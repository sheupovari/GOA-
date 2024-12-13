const fs = require("fs");
const path = require("path");

const folderName = "randomFiles";
const phrases = [
  "გამარჯობა",
  "სალამი",
  "როგორ ხარ",
  "კეთილი იყოს თქვენი მობრძანება",
  "მშვენიერი დღეს გისურვებ",
];

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

for (let i = 1; i <= 20; i++) {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  const fileName = path.join(folderName, `file${i}.txt`);
  fs.writeFileSync(fileName, `${randomPhrase} - file number ${i}`, "utf8");
}

console.log("20 ფაილი წარმატებით შეიქმნა!");
