export interface SiteConfigModel {
  name: string;
  url: string;
  description: string;
  links: {
    url: string;
    icon: string;
    title: string;
  }[];
}
