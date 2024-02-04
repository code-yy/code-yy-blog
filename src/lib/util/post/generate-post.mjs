/* eslint-disable no-console */
import { readFile, writeFile } from "fs";
import { resolve, join } from "path";
import { createInterface } from "readline";

const MIN_TITLE_LENGTH = 1;
const MIN_EMOJI_LENGTH = 1;
const MIN_DESCRIPTION_LENGTH = 1; // 最低限の説明文の長さを設定
const POSTS_DIR = "./posts";
const __dirname = resolve();
const templatePath = join(__dirname, "./src/lib/util/post/template.md");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Main function to generate a new blog post.
 */
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
        console.error("Please enter an emoji");
        askEmoji(title);
      } else {
        askDescription(title, emoji);
      }
    });
  }

  /**
   * Asks the user for the description of the post and validates the input.
   */
  function askDescription(title, emoji) {
    rl.question("description: ", (description) => {
      if (description.length < MIN_DESCRIPTION_LENGTH) {
        console.error("Please enter a description");
        askDescription(title, emoji);
      } else {
        askFilePath(title, emoji, description);
      }
    });
  }

  /**
   * Asks the user for the file path where the post should be saved.
   * Uses a generated filename based on the date if the input is left blank.
   */
  function askFilePath(title, emoji, description) {
    rl.question("filepath (leave blank for default): ", (inputPath) => {
      let filename;
      if (inputPath.trim() === "") {
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, "/");
        filename = `generated-post-${date.replace(/\//g, "-")}.md`;
      } else {
        filename = `${inputPath}.md`;
      }
      writePost(title, emoji, description, filename);
    });
  }

  function writePost(title, emoji, description, filename) {
    const filePath = join(__dirname, `${POSTS_DIR}/${filename}`);

    readFile(templatePath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      data = data
        .replace("{{title}}", title)
        .replace("{{emoji}}", emoji)
        .replace("{{description}}", description) // 説明文をテンプレートに追加
        .replace("{{filePath}}", filename); // ファイルパスをテンプレートに追加
      writeFile(filePath, data, (err) => {
        if (err) {
          throw err;
        }
        console.log(`🎉Successfully created ${filename} with description!🎉`);
        rl.close();
      });
    });
  }

  askTitle();
}

generatePost();
