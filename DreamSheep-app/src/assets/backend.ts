import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://dreamsheep-app.scharasse.fr:443');


export async function addUser(event: { email: string; password: string; passwordConfirm: string; username: string;  name: string  }) {
    if (event.password !== event.passwordConfirm) {
        throw new Error('Les mots de passe ne correspondent pas.');
    }

    try {
        const record = await pb.collection('users').create({
            email: event.email,
            username: event.username,
            name: event.name,
            password: event.password,
            passwordConfirm: event.passwordConfirm
        });
        return record;
    } catch (error) {
        throw error;
    }
}

export async function logIn(email: string, password: string) {
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        localStorage.setItem('authToken', authData.token); // Stocker le token
        localStorage.setItem('userId', authData.record.id); // Stocker l'ID utilisateur correctement
        return authData;
    } catch (error) {
        throw error;
    }
}


export async function NewDream(event: { title: string; description: string; tags: string; date: Date; recurrent: boolean; type:boolean; }) {
    try {
        const record = await pb.collection('dreams').create({
            title: event.title,
            description: event.description,
            type: event.type,
            tags: event.tags,
            date: event.date,
            recurrent: event.recurrent,
        });
        return record;
    } catch (error) {
        throw error;
    }
}


