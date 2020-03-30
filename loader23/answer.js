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

const param1 = {
  1_1: "A3",
  1_2: "B3",
  1_3: "N3",
  1_4: "P3",
  1_5: "R3"
};

const param2 = {
  2_1: "A4",
  2_2: "B4",
  2_3: "N4",
  2_4: "P4",
  2_5: "R4"
};

const param3 = {
  3_1: "A5",
  3_2: "B5",
  3_3: "N5",
  3_4: "P5",
  3_5: "R5"
};

const param4 = {
  4_1: "A6",
  4_2: "B6",
  4_3: "N6",
  4_4: "P6",
  4_5: "R6"
};

const result1 = [];
const result2 = [];
const result3 = [];
const result4 = [];

for (let key of Object.keys(param1)) {
  const location = param1[key];
  const cell = sheet[location];
  if (cell === undefined) {
    result1.push("");
    continue;
  }

  const value = cell.v;

  result1.push(value);
}

for (let key of Object.keys(param2)) {
  const location = param2[key];
  const cell = sheet[location];
  if (cell === undefined) {
    result2.push("");

    continue;
  }

  const value = cell.v;

  result2.push(value);
}

for (let key of Object.keys(param3)) {
  const location = param3[key];
  const cell = sheet[location];
  if (cell === undefined) {
    result3.push("");

    continue;
  }

  const value = cell.v;

  result3.push(value);
}

for (let key of Object.keys(param4)) {
  const location = param4[key];
  const cell = sheet[location];
  if (cell === undefined) {
    result4.push("");

    continue;
  }

  const value = cell.v;

  result4.push(value);
}

console.log(result1.join(","));
console.log(result2.join(","));
console.log(result3.join(","));
console.log(result4.join(","));
