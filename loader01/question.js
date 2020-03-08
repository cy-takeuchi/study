/*
# 課題: セルの値の取得方法を理解する
変数paramを変更して、アウトプットを出力してください。

# アウトプット
12345
WeWork
御堂筋フロンティア
〇〇株式会社
*/
const xlsx = require("xlsx");

const filePath = "../点検結果表サンプル.xlsx";
const sheetName = "点検結果表【建築物】";

// ファイル名とシート名を渡す必要があるということだけ知っていれば大丈夫
const book = xlsx.readFile(filePath);
const sheet = book.Sheets[sheetName];

const param = {
  施設ID: "G3"
};

for (let key of Object.keys(param)) {
  console.log("key:", key);
  const location = param[key];
  console.log("location:", location);

  const cell = sheet[location];
  // cell.vに値がある
  // cell.tやcell.wについては今は知らなくて大丈夫
  console.log("cell:", cell);

  const value = cell.v;
  console.log("value:", value);
}
