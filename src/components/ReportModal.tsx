import { useState } from 'react';
import { useStore } from '../../store/useStore';

interface ReportModalProps {
  imageId: string;
  onClose: () => void;
}

export default function ReportModal({ imageId, onClose }: ReportModalProps) {
  const [reason, setReason] = useState('');
  const reportImage = useStore((state) => state.reportImage);

  const handleSubmit = () => {
    if (reason.trim() === '') return;
    reportImage(imageId, reason.trim());
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Signaler cette image</h3>
        <textarea
          placeholder="Raison du signalement..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={4}
        />
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Annuler
          </button>
          <button className="btn-confirm" onClick={handleSubmit}>
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}