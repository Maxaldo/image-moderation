import { useState } from 'react';
import { type Image, ImageStatus } from '../../models/Image';
import { useStore } from '../../store/useStore';
import ReportModal from './ReportModal';

interface ImageCardProps {
  image: Image;
}

export default function ImageCard({ image }: ImageCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="image-card">
      <img src={image.url} alt={image.description} />
      <div className="image-card-body">
        <p>{image.description}</p>
        <span className={`badge badge-${image.status}`}>
          {image.status}
        </span>
        {image.status === ImageStatus.ACTIVE && (
          <button
            className="btn-report"
            onClick={() => setShowModal(true)}
          >
            Signaler
          </button>
        )}
      </div>

      {showModal && (
        <ReportModal
          imageId={image.id}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}