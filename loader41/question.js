/*
# 課題: タイトル行の値を別の行に利用する方法を理解する
アウトプットを出力してください。

# アウトプット
1,(1),ABC1,あいうえお1
1,(2),ABC2,あいうえお2
1,(3),ABC3,あいうえお3
2,(1),DEF1,かきくけこ1
2,(2),DEF2,かきくけこ2
2,(3),DEF3,かきくけこ3
2,(4),DEF4,かきくけこ4
3,(1),GHI1,さしすせそ1
3,(2),GHI2,さしすせそ2
3,(3),GHI3,さしすせそ3
3,(4),GHI4,さしすせそ4
3,(5),GHI5,さしすせそ5
3,(6),GHI6,さしすせそ6
*/
const xlsx = require("xlsx");

const filePath = "./点検結果表サンプル.xlsx";
const sheetName = "点検結果表【建築物】";

const book = xlsx.readFile(filePath);
const sheet = book.Sheets[sheetName];


