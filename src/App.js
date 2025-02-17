import { Banner } from "./components/Banner";
import { Repos } from "./components/Repos";

import repos from "./data/mockRepos.json";

export const App = () => {
  return (
    <div data-testid="app">
      <Banner />
      <Repos repos={repos} />
    </div>
  );
};
