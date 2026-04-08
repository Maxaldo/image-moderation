// Si ton binôme a bien fait sa tâche A1, tu pourras décommenter l'import suivant :
// import { Ticket, TicketStatus } from '../models/Ticket';

export const generateId = (): string => {
    // Génère un identifiant unique robuste [cite: 162]
    return crypto.randomUUID();
};

export const formatDate = (date: Date): string => {
    // Formate la date pour un affichage propre [cite: 164]
    return new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(date);
};

// Pense à typer le retour avec ": Ticket" une fois l'import actif [cite: 163]
export const createTicket = (imageId: string, reason: string) => {
    return {
        id: generateId(), // Utilise la fonction juste au-dessus [cite: 163]
        imageId: imageId,
        reason: reason,
        status: 'open', // ou TicketStatus.OPEN selon l'enum de l'étudiant A
        createdAt: new Date(), // Date du jour générée automatiquement [cite: 163]
    };
};