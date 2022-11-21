import rss from "./data.json";

export const rssClient = {
  find(): Zenn[] {
    return rss.map((item) => ({
      title: item.title,
      link: item.link,
      eyecatch: {
        url: item.enclosure.url,
      },
      createdAt: item.isoDate,
      isRss: true,
      category: {
        name: "Zenn",
        slug: "zenn",
      },
    }));
  },

  // NOTE: categoryでzennだけの記事を抽出するため
  findCategory(): string {
    const rss = rssClient.find();
    const result = rss.map((item) => item.category.slug)[0];
    return `/category/${result}`;
  },
};

type Zenn = {
  id?: string;
  slug?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  title?: string;
  description?: string;
  content?: string;
  eyecatch?: {
    url?: string;
    height?: number;
    width?: number;
  };
  category: {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    revisedAt?: string;
    name?: string;
    slug: string;
  };
  isRss: boolean;
  link?: string;
};
