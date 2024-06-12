import PocketBase from "pocketbase";
import { type DreamsResponse, type TypedPocketBase, Collections } from "@/pocketbase-types";

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


export async function getDreamsWithUsernames() {
  const dreams = await pb.collection("dreams").getFullList();
  const users = await pb.collection("users").getFullList();
  const userMap = new Map(users.map(user => [user.id, user]));

  return dreams.map(dream => ({
    ...dream,
    username: userMap.get(dream.userId)?.username || 'Utilisateur inconnu',
  }));
}

export async function addComment(userId: string, dreamId: string, message: string) {
  try {
      const newComment = await pb.collection('commentaires').create({
          userId: userId,
          dreamId: dreamId,
          Message: message,
      });
      return newComment;
  } catch (error) {
      throw new Error(`Failed to add comment: ${error.message}`);
  }
}

export async function getComments(dreamId: string) {
  try {
      const comments = await pb.collection('commentaires').getFullList({
          filter: `dreamId="${dreamId}"`,
          expand: 'userId',
          sorted: '-created',
      });

      const commentsWithUserDetails = comments.map(comment => {
          const user = comment.expand?.userId || { username: 'Utilisateur inconnu' };
          return {
              ...comment,
              user: user
          };
      });

      return commentsWithUserDetails;
  } catch (error) {
      throw new Error(`Failed to fetch comments: ${error.message}`);
  }
}

export async function reportDream() {
  try {
    const report = await pb.collection("reports").create({
      cible: "dreamId",
      create: "userId",
      message: "message",
      nature: "nature",
    });
    return report;
  } catch (error) {
    throw error;
  }
}

export async function fetchUserSharedDreams(userId: string) {
  try {
    const dreams = await pb.collection('dreams').getFullList({
      filter: `userId="${userId}" && partage=true`, // Filtrer pour obtenir uniquement les rêves partagés par cet utilisateur
      // expand: 'userId' // Expande les détails de l'utilisateur pour chaque rêve
    });
    return dreams; 
  } catch (error) {
    console.error(`Failed to fetch shared dreams: ${error.message}`);
    throw new Error(`Failed to fetch shared dreams: ${error.message}`);
  }
}

export async function fetchUserLikedDreams(userId: string) {
  try {
    const likes = await pb.collection('likes').getFullList({ filter: `userId="${userId}"` });
    const dreamIds = likes.map(like => like.dreamId);
    if (dreamIds.length === 0) return [];
    return await pb.collection('dreams').getFullList({
      filter: `id in (${dreamIds.join(",")})`,
      // expand: 'userId'
    });
  } catch (error) {
    throw new Error(`Failed to fetch dreams liked by the user: ${error.message}`);
  }
}

// test de fonction 
export async function allDreamUserSort() { 
  return await pb.collection(Collections.Dreams).getFullList<DreamsResponse>(
        {expand: 'users',
            filter: 'partage = true',
            sort: 'created'
        })
}
export async function fetchSharedDreams() {
  try {
      const dreams = await pb.collection('dreams').getFullList({
          filter: 'partage = true',
          expand: 'userId' // Assurez-vous d'inclure les détails de l'utilisateur
      });

      const dreamsWithUserDetails = dreams.map(dream => {
          const user = dream.expand?.userId || { username: 'Utilisateur inconnu', avatar: null };
          return {
              ...dream,
              user: user
          };
      });

      return dreamsWithUserDetails;
  } catch (error) {
      console.error('Error fetching shared dreams:', error);
      throw error;
  }
}

export async function likeDream(dreamId: string, userId: string) {
  try {
    // Ajouter un enregistrement de like
    await pb.collection('likes').create({
      dreamId,
      userId,
    });

    // Récupérer le rêve actuel pour mettre à jour le nombre de likes
    const dream = await pb.collection('dreams').getOne(dreamId);
    await pb.collection('dreams').update(dreamId, {
      likes: dream.likes + 1,
    });

  } catch (error) {
    console.error('Failed to like the dream:', error);
    throw error;
  }
}

export async function unlikeDream(dreamId: string, userId: string) {
  try {
    // Trouver et supprimer le like
    const likes = await pb.collection('likes').getFullList({
      filter: `dreamId="${dreamId}" && userId="${userId}"`,
    });

    if (likes.length > 0) {
      await pb.collection('likes').delete(likes[0].id);

      // Récupérer le rêve actuel pour mettre à jour le nombre de likes
      const dream = await pb.collection('dreams').getOne(dreamId);
      await pb.collection('dreams').update(dreamId, {
        likes: dream.likes - 1,
      });
    }
  } catch (error) {
    console.error('Failed to unlike the dream:', error);
    throw error;
  }
}
export async function getLikes(dreamId: string) {
  try {
    const likes = await pb.collection('likes').getFullList({
      filter: `dreamId="${dreamId}"`
    });
    return likes;
  } catch (error) {
    console.error("Error fetching likes:", error);
    throw error;
  }
}

export async function fetchSharedDreamsSorted(sortBy: string) {
  try {
    let sortQuery;
    if (sortBy === "newest") {
      sortQuery = "created DESC";
    } else if (sortBy === "oldest") {
      sortQuery = "created ASC";
    }

    const dreams = await pb.collection("dreams").getFullList({
      filter: "partage = true",
      sort: sortQuery,
      expand: "userId"
    });

    const dreamsWithUserDetails = dreams.map(dream => {
      const user = dream.expand?.userId || { username: "Utilisateur inconnu" };
      return {
        ...dream,
        user: user
      };
    });

    return dreamsWithUserDetails;
  } catch (error) {
    console.error("Error fetching shared dreams:", error);
    throw error;
  }
}

export async function fetchSharedDreamsByTag(tag: string) {
  try {
    const dreams = await pb.collection("dreams").getFullList({
      filter: `partage = true && tags ~ "${tag}"`,
      expand: "userId"
    });

    const dreamsWithUserDetails = dreams.map(dream => {
      const user = dream.expand?.userId || { username: "Utilisateur inconnu" };
      return {
        ...dream,
        user: user
      };
    });

    return dreamsWithUserDetails;
  } catch (error) {
    console.error("Error fetching shared dreams by tag:", error);
    throw error;
  }
}
