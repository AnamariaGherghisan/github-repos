export const formatTopics = (topics = []) => {
  return topics
    .map((topic) => {
      return `#${topic}`;
    })
    .join(", ");
};
