import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { TicketStatus } from '../../models/Ticket';
import { formatDate } from '../../services/ticketService';

export default function TicketDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const ticket = useStore((state) =>
        state.tickets.find((t) => t.id === id)
    );
    const image = useStore((state) =>
        state.images.find((img) => img.id === ticket?.imageId)
    );
    const approveTicket = useStore((state) => state.approveTicket);
    const rejectTicket = useStore((state) => state.rejectTicket);

    if (!ticket || !image) {
        return <p>Ticket introuvable.</p>;
    }

    const handleApprove = () => {
        approveTicket(ticket.id);
        navigate('/moderation');
    };

    const handleReject = () => {
        rejectTicket(ticket.id);
        navigate('/moderation');
    };

    return (
        <div className="ticket-detail">
            <button className="btn-back" onClick={() => navigate('/moderation')}>
                ← Retour à la liste
            </button>

            <h2>Détail du ticket</h2>

            <div className="ticket-image">
                <img src={image.url} alt={image.description} />
                <p>{image.description}</p>
            </div>

            <div className="ticket-info">
                <p><strong>Raison :</strong> {ticket.reason}</p>
                <p><strong>Statut :</strong> {ticket.status}</p>
                <p><strong>Date :</strong> {formatDate(ticket.createdAt)}</p>
            </div>

            {ticket.status === TicketStatus.OPEN && (
                <div className="ticket-actions">
                    <button className="btn-approve" onClick={handleApprove}>
                        Valider le signalement
                    </button>
                    <button className="btn-reject" onClick={handleReject}>
                        Refuser le signalement
                    </button>
                </div>
            )}
        </div>
    );
}