import { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';

export default function Portfolio() {
  // This will be using the backend server and a api key however we will not be using this for the
  // github pages version and will only use the basic github rest api without authentication
  const BASE_URL = 'http://localhost:8000/portfolios';
  //const BASE_URL = 'https://api.github.com/users/TobiasSkog/repos';
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [repoData, setRepoData] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const updateName = (name) => {
      return name
        .replace(/([A-Z]+)([A-Z][a-z])/g, ' $1 $2')
        .replace(/([a-z\d])([A-Z])/g, '$1 $2')
        .replace(/([a-zA-Z])(\d)/g, '$1 $2')
        .replace(/^./, function (name) { return name.toUpperCase(); })
        .trim();
    };

    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          console.log(response)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const repos = await response.json();
        repos.forEach(repo => {
          if (!repo.updatedName) {
            repo.updatedName = updateName(repo.name)
          }
        });
        setRepoData(repos);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (error) {
    return <div className="info-box-error">
      Something went wrong! Please try again.
    </div>;
  }

  const openLink = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (newTab) {
      newTab.opener = null;
    }
  };

  const toggleModal = (repoId) => {
    setActiveModal((prevModal) => (prevModal === repoId ? null : repoId));
  };

  return (
    <>
      <div className="side-border"></div>
      <div className="divider">
        <section className="content-container">
          <div className="info-box-root">
            <h1>Tobias Skog - Portfolio</h1>
          </div>
          <section className="portfolio"> {/* Root Element */}
            {isLoading && <Loader />}
            {!isLoading &&
              repoData.map((repo) => (
                <article
                  className={`portfolio-item ${activeModal === repo.id ? 'open' : ''}`}
                  key={repo.id}
                  ref={popupRef}>
                  <button className="button" onClick={() => toggleModal(repo.id)}>
                    {repo.updatedName}
                  </button>
                  <div className="popup">
                    <div className="popup-inner">
                      <h3>{repo.updatedName}</h3>
                      <div className="inner-row">
                        <p>{repo.description}</p>
                      </div>
                      <div className="row">
                        <button className="button link" onClick={() => openLink(repo.svn_url)}>
                          Go to project
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </section>
        </section>
      </div>
      <div className="side-border"></div>
    </>
  );
}