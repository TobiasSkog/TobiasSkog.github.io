import './Loader.css';

export default function Loader() {
  return (
    <div className="info-box-loading">
      <h2>Fetching Github Repositories...</h2>
      <div className="loading-container">
        <div className="loading-spinner">
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}