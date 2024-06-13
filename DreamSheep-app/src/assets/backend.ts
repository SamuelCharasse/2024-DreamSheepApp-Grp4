import PocketBase from "pocketbase";
import { type DreamsResponse, type TypedPocketBase, Collections } from "@/pocketbase-types";

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase;

export async function addUser(event: {
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
  name: string;
  avatar?: File;
}) {
  if (event.password !== event.passwordConfirm) {
    throw new Error("Les mots de passe ne correspondent pas.");
  }

  try {
    const formData = new FormData();
    formData.append("email", event.email);
    formData.append("username", event.username);
    formData.append("name", event.name);
    formData.append("password", event.password);
    formData.append("passwordConfirm", event.passwordConfirm);

    if (event.avatar) {
      formData.append("avatar", event.avatar);
    }

    const record = await pb.collection("users").create(formData);

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
export async function createDream(dreamData: { title: string; description: string, date: string, recurrent: boolean, type: string, tags: string, partage: boolean}) {
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
            categories: dreamData.tags,
            extrait: extrait, // Utiliser l'extrait généré
        });

        return newDream;
    } catch (error) {
        throw error;
    }
}

// Générer extrait rêve
export function generateExcerpt(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
      return text;
  }
  return text.substring(0, maxLength) + '...';
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



export async function fetchUserLikedDream(userId: string) {
  try {
    const likes = await pb.collection('likes').getFullList({
      filter: `userId="${userId}"`,
      expand: 'dreamId.userId',
    });

    const likedDreams = likes.map(like => {
      const dream = like.expand?.dreamId;
      const user = dream?.expand?.userId || { username: 'Utilisateur inconnu', avatar: null };
      return {
        ...dream,
        user: user
      };
    });

    return likedDreams;
  } catch (error) {
    console.error('Error fetching user liked dreams:', error);
    throw error;
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
      expand: 'userId'
    });

    const dreamsWithUserDetails = dreams.map(dream => {
      const user = dream.expand?.userId || { username: 'Utilisateur inconnu', avatar: null };
      return {
        ...dream,
        user: user,
        avatarUrl: user?.avatar ? pb.getFileUrl(user, user.avatar) : null // Ajout de l'URL de l'avatar
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

export async function fetchSharedDreamsSorted(order) {
  const sortOrder = order === "newest" ? "-created" : "created";
  try {
    const dreams = await pb.collection("dreams").getFullList({
      filter: 'partage = true',
      sort: sortOrder,
      expand: 'userId'
    });
    const dreamsWithUserDetails = dreams.map(dream => {
      const user = dream.expand?.userId || { username: 'Utilisateur inconnu' };
      return {
        ...dream,
        user: user
      };
    });
    return dreamsWithUserDetails;
  } catch (error) {
    console.error("Error fetching sorted shared dreams:", error);
    throw error;
  }
}

export async function fetchSharedDreamsByTag(tag) {
  try {
    const dreams = await pb.collection("dreams").getFullList({
      filter: `partage = true && tags ?~ "${tag}"`,
      expand: 'userId'
    });
    const dreamsWithUserDetails = dreams.map(dream => {
      const user = dream.expand?.userId || { username: 'Utilisateur inconnu' };
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
// Dans votre backend, ajoutez cette fonction pour filtrer les rêves par tag et date
export async function fetchSharedDreamsByTagAndDate(tag, order) {
  const sortOrder = order === "newest" ? "-created" : "created";
  try {
    const dreams = await pb.collection("dreams").getFullList({
      filter: `partage = true && tags ?~ "${tag}"`,
      sort: sortOrder,
      expand: 'userId'
    });
    const dreamsWithUserDetails = dreams.map(dream => {
      const user = dream.expand?.userId || { username: 'Utilisateur inconnu' };
      return {
        ...dream,
        user: user
      };
    });
    return dreamsWithUserDetails;
  } catch (error) {
    console.error("Error fetching shared dreams by tag and date:", error);
    throw error;
  }
}

export async function createSharedDream(dreamData: { title: string; description: string; date: string; recurrent: boolean; type: string; tags: string }) {
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
          extrait: extrait,
          partage: true, // Rêve partagé
      });

      return newDream;
  } catch (error) {
      throw error;
  }
}

export async function getUserData(userId: string) {
  try {
    const user = await pb.collection('users').getOne(userId);
    return user;
  } catch (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`);
  }
}


export async function updateUserData(userId: string, userData: { name?: string; username?: string; avatar?: string; email?: string }) {
  try {
    const updatedUser = await pb.collection('users').update(userId, userData);
    return updatedUser;
  } catch (error) {
    throw new Error(`Failed to update user data: ${error.message}`);
  }
}


export async function changePassword(userId: string, newPassword: string, confirmPassword: string) {
  console.log(newPassword);
  console.log(confirmPassword);
  if (newPassword === confirmPassword) {
    await pb.collection('users').update(userId, {
    password: newPassword, passwordConfirm: confirmPassword,
    })
  } else {
      throw new Error('Les nouveaux mots de passe ne correspondent pas.');
    };
}


//récup les infos de l'utilisateur connecté 
export async function getCurrentUser() {
  try {
    const user = await pb.authStore.model;
    if (!user) {
      throw new Error("Utilisateur non connecté");
    }
    return {
      ...user,
      avatarUrl: user.avatar
        ? `http://127.0.0.1:8090/api/files/_pb_users_auth_/${user.id}/${user.avatar}`
        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    };
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error;
  }
}

//fonction pour afficher les rêves que l'utilisateur a posté
export async function fetchUserSharedDreams() {
  try {
      if (!pb.authStore.isValid) {
          throw new Error('Utilisateur non connecté');
      }

      const userId = pb.authStore.model?.id;
      if (!userId) {
          throw new Error('ID utilisateur non disponible');
      }

      const dreams = await pb.collection(Collections.Dreams).getFullList({
          filter: `userId = '${userId}' && partage = true`,
          expand: 'userId'
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
      throw new Error('Unable to fetch shared dreams at this time.');
  }
}

//page profil post liké par l'utilisateur
export async function fetchLikedDreams() {
  try {
    if (!pb.authStore.isValid) {
      throw new Error('Utilisateur non connecté');
    }

    const userId = pb.authStore.model?.id;
    if (!userId) {
      throw new Error('ID utilisateur non disponible');
    }

    const likes = await pb.collection(Collections.Likes).getFullList({
      filter: `userId = '${userId}'`,
      expand: 'dreamId,dreamId.userId'
    });

    const likedDreams = likes.map(like => {
      const dream = like.expand?.dreamId;
      if (dream && dream.expand?.userId) {
        dream.user = dream.expand.userId;
      }
      return dream;
    }).filter(dream => dream !== undefined);

    return likedDreams;
  } catch (error) {
    console.error('Error fetching liked dreams:', error);
    throw new Error('Unable to fetch liked dreams at this time.');
  }
}

//
export interface User {
  id: string;
  username: string;
  avatar: string | null;
}
export async function fetchUserProfile(): Promise<User> {
  try {
    const user = pb.authStore.model; // Utilisateur actuellement connecté
    if (user) {
      return user as User;
    } else {
      throw new Error('No user is logged in');
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}
