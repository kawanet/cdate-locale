# cdate-locale - I18N display handlers for cdate

[![Node.js CI](https://github.com/kawanet/cdate-locale/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/kawanet/cdate-locale/actions/)
[![npm version](https://img.shields.io/npm/v/cdate-locale)](https://www.npmjs.com/package/cdate-locale)

## SYNOPSIS

```js
// TypeScript, ESM
import {cdate} from "cdate";
import {locale_fr} from "cdate-locale";

// CommonJS
const {cdate} = require("cdate");
const {locale_fr} = require("cdate-locale");
// OR
const {locale_fr} = require("cdate-locale/lib/locale_ja");

cdate().handler(locale_fr).strftime("%c");
// => 'dim. 11 déc. 2022, 16:40:06'
```

## LOCALES

- Find the list of the bundled locales at
  [index.d.ts](https://github.com/kawanet/cdate-locale/blob/main/index.d.ts) or
  [locales.yml](https://github.com/kawanet/cdate-locale/blob/main/locales.yml)

## LINKS

- https://github.com/kawanet/cdate
- https://github.com/kawanet/cdate-locale
- https://www.npmjs.com/package/cdate-locale
