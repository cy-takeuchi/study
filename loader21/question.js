/*
# 課題: セルの値に応じて出力する内容を変更する
xxxを変更して、アウトプットを出力してください。

# アウトプット
OK
NG
特になし
特になし
*/
const xlsx = require("xlsx");

const filePath = "./点検結果表サンプル.xlsx";
const sheetName = "点検結果表【建築物】";

const book = xlsx.readFile(filePath);
const sheet = book.Sheets[sheetName];

const param = {
  地盤: "AG8",
  敷地: "AG9",
  敷地内の通路: "AG10",
  堀: "AG11"
};

for (let key of Object.keys(param)) {
  const location = param[key];
  const cell = sheet[location];
  const value = cell.v;

  if (xxx === "○") {
    console.log("OK");
  } else if (xxx === "xxx") {
    console.log("xxx");
  } else {
    console.log("xxx");
  }
}
