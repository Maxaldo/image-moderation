import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useStore } from '../../store/useStore';
// import { formatDate } from '../../services/ticketService';

export const TicketDetail: React.FC = () => {
    // Récupération de l'ID du ticket depuis l'URL (ex: /moderation/:id)
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // --- LOGIQUE ZUSTAND (À décommenter quand A aura fini sa tâche A2) ---
    // const ticket = useStore(state => state.tickets.find(t => t.id === id));
    // const image = useStore(state => state.images.find(img => img.id === ticket?.imageId));

    // --- FAUSSES DONNÉES (Pour tester ton affichage tout de suite) ---
    const ticket = { id: id || '1', imageId: 'img1', reason: 'Contenu offensant ou spam', status: 'open', createdAt: new Date() };
    const image = { id: 'img1', url: 'https://picsum.photos/seed/img1/600/400', description: 'Une image suspecte de test', status: 'reported' };

    // Sécurité au cas où le ticket ou l'image n'existe pas
    if (!ticket || !image) {
        return <p style={{ textAlign: 'center', marginTop: '20px' }}>Ticket introuvable.</p>;
    }

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'sans-serif' }}>

            {/* Bouton pour revenir à la liste (Tâche B2) */}
            <button
                onClick={() => navigate(-1)}
                style={{ marginBottom: '20px', cursor: 'pointer', padding: '5px 10px' }}
            >
                ← Retour à la liste
            </button>

            <h2>Détail du Ticket #{ticket.id.slice(0, 8)}</h2>

            {/* Bloc Affichage de l'image */}
            <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <img
                    src={image.url}
                    alt={image.description}
                    style={{ width: '100%', borderRadius: '8px', marginBottom: '10px', objectFit: 'cover' }}
                />
                <p><strong>Description de l'image :</strong> {image.description}</p>
            </div>

            {/* Bloc Informations du ticket */}
            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
                <p><strong>Raison du signalement :</strong> {ticket.reason}</p>
                <p><strong>Statut du ticket :</strong> {ticket.status}</p>
                <p><strong>Date de création :</strong> {/* formatDate(ticket.createdAt) */ ticket.createdAt.toLocaleDateString('fr-FR')}</p>
            </div>

            {/* Boutons d'action (Préparation pour la Tâche B4) */}
            {ticket.status === 'open' && (
                <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                    <button
                        style={{ flex: 1, backgroundColor: '#dc3545', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                        // onClick={handleApprove} (À faire dans B4)
                    >
                        Valider le signalement (Supprimer l'image)
                    </button>

                    <button
                        style={{ flex: 1, backgroundColor: '#28a745', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                        // onClick={handleReject} (À faire dans B4)
                    >
                        Refuser le signalement (Garder l'image)
                    </button>
                </div>
            )}
        </div>
    );
};