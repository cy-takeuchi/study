/*
# 課題: 空白セルの取り扱いを理解する
xxxを変更して、アウトプットを出力してください。

# アウトプット
"","WeWork","御堂筋
フロンティア","〇〇株式会社"
*/
const xlsx = require("xlsx");

const filePath = "./点検結果表サンプル.xlsx";
const sheetName = "点検結果表【建築物】";

const book = xlsx.readFile(filePath);
const sheet = book.Sheets[sheetName];

const param = {
  施設ID: "G3",
  全体施設名: "G4",
  棟名: "G5",
  施設名: "G6"
};

// アウトプットを出力するために配列を使う
const result = [];

for (let key of Object.keys(param)) {
  const location = param[key];
  const cell = sheet[location];
  if (cell === undefined) {
    result.push("");
    // continueについては以下のURLの「for文」、「while文」、「continue文の例1のみ（ラベルは使わないので）」を参照
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration
    continue;
  }

  const value = cell.v;

  result.push(value);
}

console.log('"' + result.join('","') + '"');
