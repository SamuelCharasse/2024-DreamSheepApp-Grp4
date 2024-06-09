export interface users {
    id?: number; // Typiquement, les IDs sont des nombres.
    username?: string; // Les noms d'utilisateur sont généralement des chaînes de caractères.
    password?: string; // Les mots de passe sont des chaînes de caractères.
    email: string; // L'email est requis et est une chaîne de caractères.
    name: string; // Le nom est requis et est une chaîne de caractères.
    avatar?: string[]; // Un tableau d'URLs d'avatar en tant que chaînes de caractères.
}