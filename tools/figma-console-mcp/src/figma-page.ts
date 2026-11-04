#!/usr/bin/env node

/** Executable for the figma-page CLI (logic lives in page-cli.ts). */

import { runCli } from "./page-cli.js";

runCli(process.argv.slice(2), {
	log: (l) => console.log(l),
	error: (l) => console.error(l),
}).then((code) => process.exit(code));
