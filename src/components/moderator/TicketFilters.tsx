import React from 'react';

// On définit les propriétés (props) que ce composant va recevoir
interface TicketFiltersProps {
    currentFilter: 'all' | 'open' | 'resolved';
    setFilter: (filter: 'all' | 'open' | 'resolved') => void;
}

export const TicketFilters: React.FC<TicketFiltersProps> = ({ currentFilter, setFilter }) => {
    return (
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
            <button
                onClick={() => setFilter('all')}
                style={{ fontWeight: currentFilter === 'all' ? 'bold' : 'normal' }}
            >
                Tous
            </button>
            <button
                onClick={() => setFilter('open')}
                style={{ fontWeight: currentFilter === 'open' ? 'bold' : 'normal' }}
            >
                Ouverts
            </button>
            <button
                onClick={() => setFilter('resolved')}
                style={{ fontWeight: currentFilter === 'resolved' ? 'bold' : 'normal' }}
            >
                Résolus
            </button>
        </div>
    );
};