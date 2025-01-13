import { usePathname } from "next/navigation";
const PathNameHook = () => {
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";
  return { isNotHomePage };
};

export default PathNameHook;
