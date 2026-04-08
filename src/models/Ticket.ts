export enum TicketStatus {
  OPEN = 'open',
  RESOLVED = 'resolved',
}

export interface Ticket {
  id: string;
  imageId: string;
  reason: string;
  status: TicketStatus;
  createdAt: Date;
}