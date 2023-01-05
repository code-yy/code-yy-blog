import { Category } from "../category";

export class Blog {
  id!: string;
  slug!: string;
  createdAt!: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  title!: string;
  description!: string;
  content!: string;
  eyecatch!: {
    url?: string;
    height?: number;
    width?: number;
  };
  category!: Category;
  isRss!: boolean;
  link?: string;
}
