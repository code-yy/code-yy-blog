import { client } from "@/lib/microcms-client";
import { Category } from ".";

export type Categories = {
  contents: Category[];
};

export const categoryRepository = {
  async find(): Promise<Categories> {
    return await client.get({ endpoint: "categories" });
  },
};
