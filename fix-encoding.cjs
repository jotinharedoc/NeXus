const fs = require("fs");
const path = require("path");
const { TextDecoder } = require("util");

const root = path.join(process.cwd(), "src");
const extensions = new Set([".ts", ".tsx", ".css"]);

const decoder = new TextDecoder("windows-1252");

const codePoints = [
  0x00e1, 0x00e0, 0x00e2, 0x00e3,
  0x00e9, 0x00ea,
  0x00ed,
  0x00f3, 0x00f4, 0x00f5,
  0x00fa,
  0x00e7,

  0x00c1, 0x00c0, 0x00c2, 0x00c3,
  0x00c9, 0x00ca,
  0x00cd,
  0x00d3, 0x00d4, 0x00d5,
  0x00da,
  0x00c7,

  0x2013,
  0x2014,
  0x2018,
  0x2019,
  0x201c,
  0x201d,
  0x2026,
  0x2022,

  0x00b7,
  0x00a9,

  0x2192,
  0x2193,
  0x2197
];

const replacements = codePoints.map((codePoint) => {
  const correct = String.fromCodePoint(codePoint);

  const broken = decoder.decode(
    Buffer.from(correct, "utf8")
  );

  return [broken, correct];
});

function repair(text) {
  let current = text;

  for (let pass = 0; pass < 3; pass++) {
    let next = current;

    for (const [broken, correct] of replacements) {
      next = next.split(broken).join(correct);
    }

    if (next === current) {
      break;
    }

    current = next;
  }

  return current;
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true
  })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!extensions.has(path.extname(entry.name))) {
      continue;
    }

    const original = fs.readFileSync(fullPath, "utf8");
    const repaired = repair(original);

    if (original !== repaired) {
      fs.writeFileSync(fullPath, repaired, "utf8");
      console.log("Corrigido:", fullPath);
    }
  }
}

walk(root);

console.log("\nReparo de UTF-8 concluído.");
