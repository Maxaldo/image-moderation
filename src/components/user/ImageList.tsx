import { useStore } from '../../store/useStore';
import { ImageStatus } from '../../models/Image';
import ImageCard from './ImageCard';

export default function ImageList() {
  const images = useStore((state) => state.images);

  const visibleImages = images.filter(
    (img) => img.status !== ImageStatus.DELETED
  );

  return (
    <div className="image-list">
      <h2>Galerie d'images</h2>
      <div className="image-grid">
        {visibleImages.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}
