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