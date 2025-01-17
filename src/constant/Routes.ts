import * as features from "./Features";

interface Routes {
  id: string;
  path: string;
}
const routes: Routes[] = [
  { id: features.HOME, path: "/" },
  { id: features.ABOUT, path: "/about" },
  { id: features.POSTS, path: "/posts" },
  { id: features.TAGS, path: "/tags" },
  { id: features.SEARCH, path: "/search" },
  { id: features.POST_DETAIL, path: "/posts/:id" },
];

export default routes;
