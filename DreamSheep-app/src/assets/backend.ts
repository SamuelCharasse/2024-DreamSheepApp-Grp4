import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090/");

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