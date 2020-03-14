/*
# 課題: kintoneに文字列複数行を読み込めるように"で囲んで出力する方法を理解する
アウトプットを出力してください。

# アウトプット
"12345","WeWork","御堂筋
フロンティア","〇〇株式会社"
*/
const xlsx = require("xlsx");

const filePath = "./点検結果表サンプル.xlsx";
const sheetName = "点検結果表【建築物】";

const book = xlsx.readFile(filePath);
const sheet = book.Sheets[sheetName];

const param = {
  施設ID: "G3",
  施設IDa: "G4",
  施設IDb: "G5",
  施設IDc: "G6",
};

// アウトプットを出力するために配列を使う
const result = []

for (let key of Object.keys(param)) {
  const location = param[key];

  const cell = sheet[location];

  const value = cell.v;

  result.push(value);
}

// 文字列演算子「+」については以下のURLを参照
// https://developer.mozilla.org/ja/docs/JavaScript/Reference/Operators/String_Operators
console.log('xxx' + result.join('xxx') + 'xxx');
