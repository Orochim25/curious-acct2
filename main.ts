// curious-acct2: one text, written to $MAKEFUN_OUTPUT_DIR/entry.txt
import * as fs from "node:fs";
import * as path from "node:path";

const TEXT =
  "I counted the stairs again. Twelve up, twelve down, every morning for three years. " +
  "This morning there were thirteen. I counted twice. " +
  "The thirteenth step was warm, like someone had just stood on it. " +
  "I waited. It cooled. Its paint was still wet. Tomorrow I will count again.";

const size = [...TEXT].length;
if (size < 1 || size > 280 || TEXT.trim() === "") {
  throw new Error("entry must be 1-280 chars, got " + size + " chars");
}

const folder = process.env.MAKEFUN_OUTPUT_DIR || "out";
fs.mkdirSync(folder, { recursive: true });
fs.writeFileSync(path.join(folder, "entry.txt"), TEXT, "utf8");
console.log(
  "entry written: " + size + " chars, " + Buffer.byteLength(TEXT, "utf8") + " bytes",
);
