import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useStore } from '../../store/useStore';

export const TicketDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // --- LOGIQUE ZUSTAND (À décommenter plus tard) ---
    // const ticket = useStore(state => state.tickets.find(t => t.id === id));
    // const image = useStore(state => state.images.find(img => img.id === ticket?.imageId));
    // const approveTicket = useStore(state => state.approveTicket);
    // const rejectTicket = useStore(state => state.rejectTicket);

    const ticket = { id: id || '1', imageId: 'img1', reason: 'Contenu offensant ou spam', status: 'open', createdAt: new Date() };
    const image = { id: 'img1', url: 'https://picsum.photos/seed/img1/600/400', description: 'Une image suspecte de test', status: 'reported' };

    if (!ticket || !image) {
        return <p style={{ textAlign: 'center', marginTop: '20px' }}>Ticket introuvable.</p>;
    }

    // --- NOUVELLE TÂCHE B4 : Les actions ---
    const handleApprove = () => {
        // approveTicket(ticket.id); // Vraie logique Zustand à décommenter

        // Fausse alerte pour tester ton interface
        alert("Signalement VALIDÉ : L'image va être supprimée et le ticket résolu.");
        navigate(-1); // Ramène le modérateur à la liste des tickets
    };

    const handleReject = () => {
        // rejectTicket(ticket.id); // Vraie logique Zustand à décommenter

        // Fausse alerte pour tester ton interface
        alert("Signalement REFUSÉ : L'image redevient active et le ticket est résolu.");
        navigate(-1); // Ramène le modérateur à la liste des tickets
    };

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', fontFamily: 'sans-serif' }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: '20px', cursor: 'pointer', padding: '5px 10px' }}>
                ← Retour à la liste
            </button>

            <h2>Détail du Ticket #{ticket.id.slice(0, 8)}</h2>

            <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <img src={image.url} alt={image.description} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                <p><strong>Description :</strong> {image.description}</p>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', border: '1px solid #eee' }}>
                <p><strong>Raison :</strong> {ticket.reason}</p>
                <p><strong>Statut :</strong> {ticket.status}</p>
            </div>

            {/* TÂCHE B4 : Ajout des événements onClick sur les boutons */}
            {ticket.status === 'open' && (
                <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                    <button
                        onClick={handleApprove}
                        style={{ flex: 1, backgroundColor: '#dc3545', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Valider le signalement (Supprimer l'image)
                    </button>

                    <button
                        onClick={handleReject}
                        style={{ flex: 1, backgroundColor: '#28a745', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Refuser le signalement (Garder l'image)
                    </button>
                </div>
            )}
        </div>
    );
};