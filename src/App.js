import { Banner } from "./components/Banner";
import { Repos } from "./components/Repos";

export const App = () => {
  return (
    <div data-testid="app">
      <Banner />
      <Repos />
    </div>
  );
};
