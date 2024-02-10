import { useEffect, useState, useRef } from 'react';

export default function Portfolio() {
  const BASE_URL = 'http://localhost:8000/portfolios';
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
    <main>
      <div className="side-border"></div>
      <div className="divider">
        <section className="content-container">
          <div className="info-box-root">
            <h1>Tobias Skog - Portfolio</h1>
          </div>
          <section className="portfolio"> {/* Root Element */}
            {isLoading &&
              <div className="info-box-loading">
                Loading Repositories From GitHub...
              </div>}

            {!isLoading &&
              repoData.map((repo) => (
                <article
                  className={`portfolio-item ${activeModal === repo.id ? 'open' : 'closed'}`}
                  key={repo.id}
                  ref={popupRef}
                >
                  <button className="button" onClick={() => toggleModal(repo.id)}>
                    {repo.updatedName}
                  </button>
                  <div
                    className={`popup ${activeModal === repo.id ? 'open' : 'closed'}`}
                  >
                    <div className="popup-inner">
                      <h3>{repo.updatedName}</h3>
                      <div className="inner-row">
                        <p>{repo.description}</p>
                      </div>
                      <div className="row">
                        <button className="button" onClick={() => openLink(repo.svn_url)}>
                          Go to project
                        </button>
                        <button className="button" onClick={() => toggleModal(repo.id)}>
                          Close
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
    </main >
  );
}