import "./index.css";

export const Banner = () => {
  return (
    <header data-testid="header" className="header">
      <h1 data-testid="title" className="title">
        GitHub Directory
      </h1>
      <h2 data-testid="sub-title" className="sub-title">
        A list of all your GitHub repositories
      </h2>
    </header>
  );
};
