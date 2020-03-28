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

const filePath = "./点検結果表サンプル.xlsx";
const sheetName = "点検結果表【建築物】";

// ファイル名とシート名を渡す必要があるということだけ知っていれば大丈夫
const book = xlsx.readFile(filePath);
const sheet = book.Sheets[sheetName];

const param = {
  施設ID: "G3",
  全体施設名: "G4",
  棟名: "G5",
  施設名: "G6"
};

for (let key of Object.keys(param)) {
  const location = param[key];

  const cell = sheet[location];
  // cell.vに値がある
  // cell.tやcell.wについては今は知らなくて大丈夫

  const value = cell.v;
  console.log(value);
}
