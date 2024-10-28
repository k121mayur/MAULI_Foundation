import { default as seedrandom } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";

const random = seedrandom(`${salt}-q1`);
  const zip = new JSZip();
  const texts = [];
  for (let i = 0; i < 10; i++) {
    const list = fakeText(10000, random);
    insertText(list, " IITM ", 10, random);
    insertText(list, " iitm ", 10, random);
    insertText(list, " IITm ", 10, random);
    // Remove trailing spaces, end with "\n"
    const text =
      list
        .join("")
        .split("\n")
        .map((line) => line.trim())
        .join("\n") + "\n";
    texts.push(text);
    zip.file(`file${i}.txt`, text);
  }
  const blob = await zip.generateAsync({ type: "blob" });
  download("#q1-zip", salt, URL.createObjectURL(blob));
  q1 = await hash(texts.join("").replace(/iitm/gi, "IIT Madras"));
console.log(q1)
