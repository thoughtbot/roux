#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.resolve(__dirname, "../src/css");
const destination = path.resolve(process.cwd(), "css");

try {
  fs.cpSync(source, destination, { recursive: true, force: false });
  console.log("✅ Roux initialized. Copied src/css → ./css");
} catch (err) {
  console.error("❌ Error copying files:", err.message);
  process.exit(1);
}
