import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  checkOut: string;
  payment: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list/:petBreed",
  checkOut: "/checkOut",
  payment: "/payment"
};

interface Routes extends Omit<SwitchRoutes, "list"> {
  list: (petBreed: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  list: (petBreed) => generatePath(switchRoutes.list, { petBreed }),
};
