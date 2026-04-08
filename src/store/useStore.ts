import { create } from 'zustand';
import { type Image, ImageStatus } from '../models/Image';
import { type Ticket, TicketStatus } from '../models/Ticket';
import { mockImages } from '../data/mockImages';

interface AppState {
  images: Image[];
  tickets: Ticket[];
  reportImage: (imageId: string, reason: string) => void;
  approveTicket: (ticketId: string) => void;
  rejectTicket: (ticketId: string) => void;
}

export const useStore = create<AppState>((set) => ({
  images: mockImages,
  tickets: [],

  reportImage: (imageId: string, reason: string) => {
    const newTicket: Ticket = {
      id: crypto.randomUUID(),
      imageId,
      reason,
      status: TicketStatus.OPEN,
      createdAt: new Date(),
    };

    set((state) => ({
      tickets: [...state.tickets, newTicket],
      images: state.images.map((img) =>
        img.id === imageId ? { ...img, status: ImageStatus.REPORTED } : img
      ),
    }));
  },

  approveTicket: (ticketId: string) => {
    set((state) => {
      const ticket = state.tickets.find((t) => t.id === ticketId);
      if (!ticket) return state;

      return {
        tickets: state.tickets.map((t) =>
          t.id === ticketId ? { ...t, status: TicketStatus.RESOLVED } : t
        ),
        images: state.images.map((img) =>
          img.id === ticket.imageId ? { ...img, status: ImageStatus.DELETED } : img
        ),
      };
    });
  },

  rejectTicket: (ticketId: string) => {
    set((state) => {
      const ticket = state.tickets.find((t) => t.id === ticketId);
      if (!ticket) return state;

      return {
        tickets: state.tickets.map((t) =>
          t.id === ticketId ? { ...t, status: TicketStatus.RESOLVED } : t
        ),
        images: state.images.map((img) =>
          img.id === ticket.imageId ? { ...img, status: ImageStatus.ACTIVE } : img
        ),
      };
    });
  },
}));