import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TicketFilters } from './TicketFilters';
// import { useStore } from '../../store/useStore'; // À décommenter plus tard
// import { formatDate } from '../../services/ticketService'; // Ton super helper de la tâche B1 !

export const TicketList: React.FC = () => {
    // L'état local pour gérer le filtre sélectionné
    const [filter, setFilter] = useState<'all' | 'open' | 'resolved'>('all');

    // Remplacement temporaire en attendant Zustand
    // const tickets = useStore((state) => state.tickets);
    const tickets: any[] = []; // Tableau vide pour éviter les erreurs de compilation

    // Logique de filtrage
    const filteredTickets = tickets.filter(ticket => {
        if (filter === 'all') return true;
        return ticket.status === filter;
    });

    return (
        <div>
            <h2>Liste des Tickets de Modération</h2>

            {/* Ton composant de filtrage */}
            <TicketFilters currentFilter={filter} setFilter={setFilter} />

            <div style={{ display: 'grid', gap: '15px' }}>
                {filteredTickets.length > 0 ? (
                    filteredTickets.map(ticket => (
                        <div key={ticket.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
                            <p><strong>Raison :</strong> {ticket.reason}</p>
                            <p><strong>Statut :</strong> {ticket.status}</p>
                            <p><strong>Date :</strong> {/* formatDate(ticket.createdAt) */ 'Date à formater'}</p>

                            {/* Le lien vers le détail, qui sera configuré dans le routing global */}
                            <Link to={`/moderation/${ticket.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
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
};