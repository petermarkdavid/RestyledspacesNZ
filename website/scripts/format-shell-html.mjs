/**
 * Pretty-print TanStack Start’s prerendered SPA shell (normally one minified line).
 * Runs after `vite build` via `postbuild`.
 */
import beautify from "js-beautify";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const shell = path.join(root, ".output/public/_shell.html");

if (!fs.existsSync(shell)) {
  console.warn("format-shell-html: .output/public/_shell.html not found (skip)");
  process.exit(0);
}

const raw = fs.readFileSync(shell, "utf8");
const out = beautify.html(raw, {
  indent_size: 2,
  indent_inner_html: true,
  wrap_line_length: 72,
  wrap_attributes: "force-expand-multiline",
});

fs.writeFileSync(shell, out.trim() + "\n");
console.log("format-shell-html: prettified .output/public/_shell.html");
