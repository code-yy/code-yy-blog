/* eslint-disable no-console */
import { readFile, writeFile } from "fs";
import { resolve, join } from "path";
import { createInterface } from "readline";

const MIN_TITLE_LENGTH = 1;
const MIN_EMOJI_LENGTH = 1;
const MIN_OGIMAGE_LENGTH = 1;

const POSTS_DIR = "./apps/web/posts";
const __dirname = resolve();
const templatePath = join(__dirname, "./apps/web/src/lib/util/post/template.md");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generatePost() {
  function askTitle() {
    rl.question("title: ", (title) => {
      if (title.length < MIN_TITLE_LENGTH) {
        console.error("Please enter a title");
        askTitle();
      } else {
        askEmoji(title);
      }
    });
  }

  function askEmoji(title) {
    rl.question("emoji: ", (emoji) => {
      if (emoji.length < MIN_EMOJI_LENGTH) {
        console.error("絵文字を入力してください");
        askEmoji(title);
      } else {
        askOGImage(title, emoji);
      }
    });
  }

  function askOGImage(title, emoji) {
    rl.question("ogImage (input will be prefixed with /ogp/): ", (ogImage) => {
      if (ogImage.length < MIN_OGIMAGE_LENGTH) {
        console.error("Please enter a pictogram");
        askOGImage(title, emoji);
      } else {
        askDate(title, emoji, `/ogp/${ogImage}`);
      }
    });
  }

  function askDate(title, emoji, ogImage) {
    rl.question("date(YYYY/MM/DD, leave blank for today's date): ", (date) => {
      const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
      if (date.trim() === "") {
        date = new Date().toISOString().slice(0, 10).replace(/-/g, "/");
        console.log(
          `You didn't enter a date. Today's date, ${date}, will be used. If this is not correct, please terminate the program and start again.`
        );
      } else if (!datePattern.test(date)) {
        console.error("Please enter the date in the format YYYYY/MM/DD");
        askDate(title, emoji, ogImage);
        return;
      }
      askFilePath(title, emoji, ogImage, date);
    });
  }

  function askFilePath(title, emoji, ogImage, date) {
    rl.question("filepath (leave blank for default): ", (inputPath) => {
      let filename;
      if (inputPath.trim() === "") {
        filename = `generated-post-${date.replace(/\//g, "-")}.md`;
      } else {
        filename = `${inputPath}.md`;
      }
      writePost(title, emoji, ogImage, date, filename);
    });
  }

  function writePost(title, emoji, ogImage, date, filename) {
    const filePath = join(__dirname, `${POSTS_DIR}/${filename}`);
    readFile(templatePath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      data = data
        .replace("{{title}}", title)
        .replace("{{emoji}}", emoji)
        .replace("{{date}}", date)
        .replace("{{ogImage}}", ogImage);
      writeFile(filePath, data, (err) => {
        if (err) {
          throw err;
        }
        console.log(`🎉Successfully created ${filename}!🎉`);
        rl.close();
      });
    });
  }
  askTitle();
}

generatePost();
