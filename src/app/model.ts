export class Personne {
    public id: number;
    public prenom: string;
    public nom: string;
    public pseudo: string;
    public email: string;
    public validation: boolean;
    public motDePasse: string;
    public role: Role;

    constructor(id?:number, prenom?: string, nom?: string, pseudo?: string, email?: string, motDePasse?: string, role?: Role) {
        this.id=id;
        this.prenom = prenom;
        this.nom = nom;
        this.pseudo = pseudo;
        this.email = email;
        this.motDePasse = motDePasse;
        this.role = role;
    }
}

export enum Role {
    Utilisateur = "Utilisateur",
    Administrateur = "Administrateur"
}

export class Contenu {
    public id: number;
    public createurId: number;
    public createur: Personne;
    public texte: string;
    public horodatage: Date;
    public canal: Canal;
    public validation: Boolean;
    public parent: Contenu;
    public reponses: Array<Contenu>;
    constructor(createur?: Personne, texte?: string, horodatage?: Date, validation?: boolean) {
        this.createur = createur;
        this.texte = texte;
        this.horodatage = horodatage;
        this.validation = validation;
    }
}

export class Canal {

    public id: number;
    public libelle: string;
    public activation: boolean;
    public contenus: Array<Contenu>;

    constructor(id?:number,libelle?: string) {
        this.id=id;
        this.libelle = libelle;
    }
}

