import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import Collapsible from "../../components/Collapsible/Collapsible";
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import './Portfolio.css';

export default function Portfolio() {
  // This will be using the backend server and a api key however we will not be using this for the
  // github pages version and will only use the basic github rest api without authentication
  // const BASE_URL = 'http://localhost:8000/portfolios';
  // const BASE_URL = 'https://api.github.com/users/TobiasSkog/repos';
  // UPDATE Using a personal backenserver selfhosted that uses API key to talk with github
  // then making a request to that backend server in the react application with the following URL
  const BASE_URL = 'https://githubpagesapi.cozroth.com/repos';

  const [error, setError] = useState();
  const [displayError, setDisplayError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [repoData, setRepoData] = useState([]);
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
      setDisplayError(false);
      setIsLoading(true);

      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          if (response.status !== 200) {
            setDisplayError(true);
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }

        const repos = await response.json();
        repos.forEach((repo) => {
          if (!repo.updatedName) {
            repo.updatedName = updateName(repo.name)
          }
        });
        setRepoData(repos);
      } catch (error) {
        setError(error);
        setDisplayError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const openLink = (url) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if (newTab) {
      newTab.opener = null;
    }
  };

  return (
    <>
      <div className="side-border"></div>
      <div className="divider">
        <section className="content-container">
          <div className="info-box-root">
            <h1>Tobias Skog - Portfolio</h1>
          </div>
          <section className="portfolio">
            {isLoading && <Loader />}
            {displayError && !isLoading && <ErrorBox message={error.message} />}
            {!isLoading && !displayError &&
              repoData.map((repo) => (
                <Collapsible label={repo.updatedName} key={repo.id}>
                  <h3>{repo.updatedName}</h3>
                  <p>{repo.description}</p>
                  <button className="portfolio-button-link" onClick={() => openLink(repo.svn_url)}>
                    Go to project
                  </button>
                </Collapsible>
              ))}
          </section>
        </section>
      </div >
      <div className="side-border"></div>
    </>
  );
}