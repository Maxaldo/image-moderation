import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { type TicketStatus } from '../../models/Ticket';
import { formatDate } from '../../services/ticketService';
import TicketFilters from './TicketFilters';

type FilterValue = 'all' | TicketStatus;

export default function TicketList() {
    const [filter, setFilter] = useState<FilterValue>('all');
    const tickets = useStore((state) => state.tickets);

    const filteredTickets = tickets.filter((ticket) => {
        if (filter === 'all') return true;
        return ticket.status === filter;
    });

    return (
        <div className="ticket-list">
            <h2>Liste des tickets de modération</h2>
            <TicketFilters currentFilter={filter} setFilter={setFilter} />

            <div className="ticket-grid">
                {filteredTickets.length > 0 ? (
                    filteredTickets.map((ticket) => (
                        <div key={ticket.id} className="ticket-card">
                            <p><strong>Raison :</strong> {ticket.reason}</p>
                            <p><strong>Statut :</strong> {ticket.status}</p>
                            <p><strong>Date :</strong> {formatDate(ticket.createdAt)}</p>
                            <Link to={`/moderation/${ticket.id}`}>
                                Voir le détail
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Aucun ticket ne correspond à ce filtre.</p>
                )}
            </div>
        </div>
    );
}