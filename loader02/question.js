/*
# 課題: kintoneに読み込めるようにカンマ区切りで出力する方法を理解する
アウトプットを出力してください。

# アウトプット
12345,WeWork,御堂筋フロンティア,〇〇株式会社
*/
const xlsx = require("xlsx");

const filePath = "./点検結果表サンプル.xlsx";
const sheetName = "点検結果表【建築物】";

const book = xlsx.readFile(filePath);
const sheet = book.Sheets[sheetName];

const param = {
  施設ID: "G3"
};

// アウトプットを出力するために配列を使う
const result = []

for (let key of Object.keys(param)) {
  const location = param[key];

  const cell = sheet[location];

  const value = cell.v;

  // pushについては以下のURLを参照
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  xxx.push(xxx);
}

// joinについては以下のURLを参照
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join
console.log(result.join("xxx"));
