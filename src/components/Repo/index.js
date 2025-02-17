import { formatTopics } from "./formatTopics";

export const Repo = ({
  name,
  login,
  description,
  watchers,
  stars,
  topics,
  url,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{login}</h4>
      <p>{description}</p>
      <div>
        <div>
          <div>Watchers</div>
          <div>{watchers}</div>
        </div>
        <div>
          <div>Stars</div>
          <div>{stars}</div>
        </div>
      </div>
      <div>{formatTopics(topics)}</div>
      <div>
        <a href={url}>View</a>
      </div>
    </div>
  );
};
