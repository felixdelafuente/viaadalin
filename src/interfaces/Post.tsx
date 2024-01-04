export interface Post {
  id: number;
  _links: {
    "wp:featuredmedia": [{ href: string }];
  };
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
}
