import { type TicketStatus } from '../../models/Ticket';

type FilterValue = 'all' | TicketStatus;

interface TicketFiltersProps {
    currentFilter: FilterValue;
    setFilter: (filter: FilterValue) => void;
}

export default function TicketFilters({ currentFilter, setFilter }: TicketFiltersProps) {
    return (
        <div className="ticket-filters">
            <button
                className={currentFilter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                Tous
            </button>
            <button
                className={currentFilter === 'open' ? 'active' : ''}
                onClick={() => setFilter('open' as TicketStatus)}
            >
                Ouverts
            </button>
            <button
                className={currentFilter === 'resolved' ? 'active' : ''}
                onClick={() => setFilter('resolved' as TicketStatus)}
            >
                Résolus
            </button>
        </div>
    );
}