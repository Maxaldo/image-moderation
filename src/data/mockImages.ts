import { type Image, ImageStatus } from '../models/Image';

export const mockImages: Image[] = [
  {
    id: '1',
    url: 'https://picsum.photos/seed/img1/400/300',
    description: 'Paysage de montagne au coucher du soleil',
    status: ImageStatus.ACTIVE,
  },
  {
    id: '2',
    url: 'https://picsum.photos/seed/img2/400/300',
    description: 'Rue animee en centre-ville',
    status: ImageStatus.ACTIVE,
  },
  {
    id: '3',
    url: 'https://picsum.photos/seed/img3/400/300',
    description: 'Chat dormant sur un canape',
    status: ImageStatus.ACTIVE,
  },
  {
    id: '4',
    url: 'https://picsum.photos/seed/img4/400/300',
    description: 'Plage tropicale avec palmiers',
    status: ImageStatus.ACTIVE,
  },
  {
    id: '5',
    url: 'https://picsum.photos/seed/img5/400/300',
    description: 'Gratte-ciels vus du sol',
    status: ImageStatus.ACTIVE,
  },
  {
    id: '6',
    url: 'https://picsum.photos/seed/img6/400/300',
    description: 'Foret enneigee en hiver',
    status: ImageStatus.ACTIVE,
  },
  {
    id: '7',
    url: 'https://picsum.photos/seed/img7/400/300',
    description: 'Marche aux epices colore',
    status: ImageStatus.ACTIVE,
  },
  {
    id: '8',
    url: 'https://picsum.photos/seed/img8/400/300',
    description: 'Velo gare devant un mur graffiti',
    status: ImageStatus.ACTIVE,
  },
];