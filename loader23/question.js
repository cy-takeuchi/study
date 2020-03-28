/*
# 課題: 複数セルの値に応じて出力する内容を変更する
アウトプットを出力してください。
○:2点
△:1点
×:0点
空白:0点

# アウトプット
1,AAA,○,○,○,6
2,BBB,×,△,○,3
3,CCC,×,×,×,0
4,DDD,○,,△,3
*/
const xlsx = require("xlsx");

const filePath = "./点検結果表サンプル.xlsx";
const sheetName = "点検結果表【建築物】";

const book = xlsx.readFile(filePath);
const sheet = book.Sheets[sheetName];
