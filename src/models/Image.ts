export enum ImageStatus {
  ACTIVE = 'active',
  REPORTED = 'reported',
  DELETED = 'deleted',
}

export interface Image {
  id: string;
  url: string;
  description: string;
  status: ImageStatus;
}