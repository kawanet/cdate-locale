#!/usr/bin/env node

import {promises as fs} from "fs";

interface Browser {
    [js: string]: string;
}

interface Exports {
    [js: string]: {
        "import": string;
        "require": string;
    }
}

const main = async () => {
    const pkg = JSON.parse(await fs.readFile("./package.json", "utf-8"));
    const files = process.argv.slice(2);

    const browser: Browser = pkg.browser = {};
    const exporting: Exports = pkg.exports = {};

    for (let file of files) {
        file = file.replace(/^(\w)/, "./$1");
        const js = file.replace(/\.[cm]?js$/, ".js");
        const cjs = file.replace(/\.[cm]?js$/, ".cjs");
        browser[js] = cjs;

        if (/\/index\./.test(cjs)) {
            exporting["."] = {import: js, require: cjs};
        }

        exporting[js] = {import: js, require: cjs};
    }

    console.log(JSON.stringify(pkg, null, 2));
};

main().catch(console.error);
