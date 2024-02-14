import './ErrorBox.css';

export default function ErrorBox({ title, message }) {
  return (
    <div className="info-box-error">
      <h2 className="info-box-error-title">{title || 'Something went wrong! Please try again.'}</h2>
      <p className="info-box-error-message">{message || ''}</p>
    </div>
  );
}