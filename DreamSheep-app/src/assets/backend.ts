import PocketBase from "pocketbase";
import { type TypedPocketBase } from "@/pocketbase-types";

export const pb = new PocketBase("http://127.0.0.1:8090") as TypedPocketBase;

export async function addUser(event: {
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
  name: string;
}) {
  if (event.password !== event.passwordConfirm) {
    throw new Error("Les mots de passe ne correspondent pas.");
  }

  try {
    const record = await pb.collection("users").create({
      email: event.email,
      username: event.username,
      name: event.name,
      password: event.password,
      passwordConfirm: event.passwordConfirm,
    });
    return record;
  } catch (error) {
    throw error;
  }
}

export async function logIn(email: string, password: string) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    localStorage.setItem("authToken", authData.token); // Stocker le token
    localStorage.setItem("userId", authData.record.id); // Stocker l'ID utilisateur correctement
    return authData;
  } catch (error) {
    throw error;
  }
}

// Créer rêve
export async function createDream(dreamData: { title: string; description: string, date: string, recurrent: boolean, type: string, tags: string }) {
    try {
        if (!pb.authStore.isValid) {
            throw new Error('Utilisateur non connecté');
        }

        const userId = pb.authStore.model?.id;
        if (!userId) {
            throw new Error('ID utilisateur non disponible');
        }

        const extrait = generateExcerpt(dreamData.description, 20);

        const newDream = await pb.collection('dreams').create({
            ...dreamData,
            userId: userId,
            categories: dreamData.tags, // Assurez-vous que les catégories sont envoyées correctement
            extrait: dreamData,
            
        });

        return newDream;
    } catch (error) {
        throw error;
    }
}

// Générer extrait rêve
function generateExcerpt(text: string, charLimit: number): string {
    if (text.length <= charLimit) {
        return text;
    }
    return text.slice(0, charLimit) + '...';
}

export async function deleteDreams(dreamId: string) {
    try {
        if (!pb.authStore.isValid) {
            throw new Error('Utilisateur non connecté');
        }

        await pb.collection('dreams').delete(dreamId);
    } catch (error) {
        throw error;
    }
}
export async function fetchDreamDetails(dreamId:string) {
  try {
    const response = await pb.collection("dreams").getOne(dreamId);
    return response;
  } catch (error) {
    throw new Error(`Failed to fetch dream details: ${error.message}`);
  }
}

export async function updateDream(dreamId:string, dreamData) {
  try {
    const updatedDream = await pb.collection("dreams").update(dreamId, dreamData);
    return updatedDream;
  } catch (error) {
    throw new Error(`Failed to update dream: ${error.message}`);
  }
}
export async function getUserDreams(userId: string) {
  const dreams = await pb.collection("dreams").getFullList({
    filter: `userId="${userId}"`,
  });
  return dreams;
}

export async function likeDream(dreamId: string, userId: string) {
  await pb.collection("likes").create({
    dreamId,
    userId,
  });
}

export async function unlikeDream(likeId: string) {
  await pb.collection("likes").delete(likeId);
}

export async function getLikes(dreamId: string) {
  const likes = await pb.collection("likes").getFullList({
    filter: `dreamId="${dreamId}"`,
  });
  return likes;
}

export async function getUserLikes(userId: string) {
  const likes = await pb.collection("likes").getFullList({
    filter: `userId="${userId}"`,
  });
  return likes;
}
export async function getDreamsWithUsernames() {
  const dreams = await pb.collection("dreams").getFullList();
  const users = await pb.collection("users").getFullList();
  const userMap = new Map(users.map(user => [user.id, user]));

  return dreams.map(dream => ({
    ...dream,
    username: userMap.get(dream.userId)?.username || 'Utilisateur inconnu',
  }));
}

export async function addComment(userId: string, dreamId: string, Message: string) {
  try {
    await pb.collection('commentaires').create({
      userId: userId,
      dreamId: dreamId,
      Message: Message,
    });
  } catch (error) {
    throw new Error(`Failed to add comment: ${error.message}`);
  }
}

// Fonction pour récupérer les commentaires d'un rêve
export async function getComments(dreamId: string) {
  try {
    const comments = await pb.collection('commentaires').getFullList({
      filter: `dreamId="${dreamId}"`,
      expand: 'userId'
    });
    return comments;
  } catch (error) {
    throw new Error(`Failed to fetch comments: ${error.message}`);
  }
}


export async function reportDream(dreamId: string, userId: string, message: string, nature: string) {
  try {
    console.log(`DreamId: ${dreamId}, UserId: ${userId}, Message: ${message}, Nature: ${nature}`);
    const report = await pb.collection("report").create({
      cible: dreamId,
      create: userId,
      message: message,
      nature: nature,
    });
    return report;
  } catch (error) {
    throw error;
  }
}