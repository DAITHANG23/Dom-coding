import breadcrumbsMap from "@/constant/Breadcrumbs";
import { Breadcrumb } from "@/types/Header.types";
import { useCallback } from "react";

const useBreadcrumbs = () => {
  const getRouteBreadcrumb = useCallback((routeId: string) => {
    let breadcrumb = { ...breadcrumbsMap[routeId] };

    if (!breadcrumb) {
      return undefined;
    }

    const breadcrumbs: Breadcrumb[] = [breadcrumb];
    while (breadcrumb.parent) {
      breadcrumb = { ...breadcrumbsMap[breadcrumb.parent] };

      breadcrumbs.unshift(breadcrumb);
    }
    return breadcrumbs;
  }, []);
  return {
    getRouteBreadcrumb,
  };
};

export default useBreadcrumbs;
