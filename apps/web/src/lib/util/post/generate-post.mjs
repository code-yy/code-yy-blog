import { readFile, writeFile } from "fs";
import { resolve, join } from "path";
import { createInterface } from "readline";

const MIN_TITLE_LENGTH = 1;
const MIN_EMOJI_LENGTH = 1;
const POSTS_DIR = "_posts";

const __dirname = resolve();
const templatePath = join(__dirname, `${POSTS_DIR}/template.md`);

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("title: ", (title) => {
  // 空文字の場合は終了
  if (title.length < MIN_TITLE_LENGTH) {
    console.error("タイトルを入力してください");
    process.exit(1);
  }

  rl.question("emoji: ", (emoji) => {
    // 空文字の場合は終了
    if (emoji.length < MIN_EMOJI_LENGTH) {
      console.error("絵文字を入力してください");
      process.exit(1);
    }

    rl.question("date(YYYY/MM/DD): ", (date) => {
      const datePattern = /^\d{4}\/\d{2}\/\d{2}$/;
      if (!datePattern.test(date)) {
        console.error("日付はYYYY/MM/DDの形式で入力してください");
        process.exit(1);
      }

      const filename = `generated-post-${date.replace(/\//g, "-")}.md`;
      const filePath = join(__dirname, `${POSTS_DIR}/${filename}`);

      readFile(templatePath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }

        data = data.replace("{{title}}", title).replace("{{emoji}}", emoji).replace("{{date}}", date);

        writeFile(filePath, data, (err) => {
          if (err) {
            throw err;
          }
          // eslint-disable-next-line no-console
          console.log(`${filename}の作成に成功しました🎉`);
          process.exit(0);
        });
      });
    });
  });
});
