import extractdoc from "npm:jsdoc-extractor";
import { readFileSync } from "node:fs";

if (!String.prototype.removeCharsBefore) {
  String.prototype.removeCharsBefore = function (char: string): string {
    const index = this.indexOf(char);
    if (index !== -1) {
      return this.slice(index + 1);
    }
    return this.toString();
  };
}

if (!String.prototype.removeCharsAfter) {
  String.prototype.removeCharsAfter = function (char: string): string {
    const index = this.indexOf(char);
    if (index !== -1) {
      return this.slice(0, index);
    }
    return this.toString();
  };
}

const files: string[] = [];
for await (const i of Deno.readDir("./src")) {
  if (i.isFile && i.name !== "docs.ts") {
    files.push(i.name.split(".ts")[0]);
  }
}

function extract(
  startChar: string,
  endChar: string,
  inputString: string,
): string {
  const startIndex = inputString.indexOf(startChar);
  if (startIndex === -1) {
    return ""; // начальный символ не найден
  }
  const endIndex = inputString.indexOf(endChar, startIndex + 1);
  if (endIndex === -1) {
    return ""; // конечный символ не найден
  }
  return inputString.substring(startIndex + 1, endIndex);
}

const test: string[] = [];

files.forEach((fileitem) => {
  const file = fileitem === "shell" ? "" : fileitem;
  const buf = readFileSync(`./src/${fileitem}.ts`);
  for (const [doc, _end, _start] of extractdoc(buf)) {
    const render = doc.toString()
      .replaceAll("/**", "")
      .replaceAll("     */", "")
      .replaceAll("   */", "")
      .replaceAll("     *", "")
      .replaceAll("   *", "");
    const extractedmethod = extract("`", "`", render);

    let method = "";
    if (
      extractedmethod &&
      extractedmethod.split("")[extractedmethod.split("").length - 1] === ")"
    ) {
      method = extractedmethod.removeCharsBefore(".").split("()").join("");
    } else {
      continue;
    }

    const object = {
      status: "✅❌",
      module: fileitem,
      path: file,
      badge: `\`@xl-soft/smartshell-io-deno/${file}\``,
      method: method,
      function: `${file}${file === "" ? "" : "."}${method}()`,
      description: "",
      usage: `${extract("``` ts", "```", render).split("`` ts").join("")}`,
      output: ``, //TODO: сделать тесты и вывести аутпуты, возможно автоматически
    };
    object.description = `${file}${file === "" ? "" : "."}${method} — ${
      extract(object.function, object.usage, render).split("``` ts").join("")
        .removeCharsBefore("`").trim()
    }`;

    test.push(`console.log('[[[${object.method}]]]')`);
    test.push(
      object.usage.removeCharsBefore("=").trim().replace(/\s*([.!?])/g, "$1"),
    );
  }
});

test.flat();
test.unshift(`
import { SmartShell } from "./mod.ts";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();
const shell = await new SmartShell({
    login: env['login'],
    password: env['password'],
    club_id: Number(env['club_id'])
})
`);

const evalstring = test.join("\n");
Deno.writeTextFile("test.ts", evalstring);