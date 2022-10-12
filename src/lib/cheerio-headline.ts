import hljs from "highlight.js";
import type { CheerioAPI } from "cheerio";

export const cheerioHeadline = ($: CheerioAPI) => {
  $("h2").each((_, element) => {
    $(element).addClass("p-4 text-2xl font-bold mb-4 border-l-4 border-black bg-gray-100");
  });

  $("h3").each((_, element) => {
    $(element).addClass("pl-4 py-2 my-4 font-bold text-xl border-l-8 border-black bg-gray-200");
  });

  $("h4").each((_, element) => {
    $(element).addClass("my-2 font-bold text-lg");
  });

  $("p").each((_, element) => {
    $(element).addClass("mb-4");
  });

  $("ul").each((_, element) => {
    $(element).addClass("py-4 px-8 m-4 bg-gray-50 border border-black border-dashed");
  });

  $("ol").each((_, element) => {
    $(element).addClass("py-4 px-8 m-4 bg-gray-50 border border-black border-dashed");
  });

  $("pre").each((_, element) => {
    $(element).addClass("block bg-gray-600 rounded-sm overflow-x-auto");
  });
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  return $;
};
