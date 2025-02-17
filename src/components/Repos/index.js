import { Alert } from "../Alert";
import { Repo } from "../Repo";

export const Repos = ({ repos }) => {
  return (
    <div>
      <Alert />
      {repos.map((repo) => {
        return (
          <Repo
            name={repo.name}
            login={repo.owner.login}
            description={repo.description}
            watchers={repo.watchers}
            stars={repo.stargazers_count}
            topics={repo.topics}
            url={repo.html_url}
          />
        );
      })}
    </div>
  );
};
