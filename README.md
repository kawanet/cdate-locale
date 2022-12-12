# cdate-locale - I18N display handlers for cdate

[![Node.js CI](https://github.com/kawanet/cdate-locale/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/kawanet/cdate-locale/actions/)
[![npm version](https://img.shields.io/npm/v/cdate-locale)](https://www.npmjs.com/package/cdate-locale)

## SYNOPSIS

```js
// TypeScript, ESM
import {cdate} from "cdate";
import {locale_en} from "cdate-locale";

// CommonJS
const {cdate} = require("cdate");
const {locale_fr} = require("cdate-locale");
const {locale_de} = require("cdate-locale/locale/de.js");
```

```js
cdate().handler(locale_en).format("MMMM")
// => 'December'

cdate().handler(locale_en).text("%c");
// => 'Mon, Dec 12, 2022, 7:26:12 PM'

cdate().handler(locale_fr).format("MMMM")
// => 'décembre'

cdate().handler(locale_fr).text("%c");
// => 'lun. 12 déc. 2022, 19:26:12'

cdate().handler(locale_de).format("MMMM")
// => 'Dezember'

cdate().handler(locale_de).text("%c");
// => Mo., 12. Dez. 2022, 19:26:12'
```

## LOCALES

- Find the list of the bundled locales at
  [index.d.ts](https://github.com/kawanet/cdate-locale/blob/main/index.d.ts) or
  [locales.yml](https://github.com/kawanet/cdate-locale/blob/main/locales.yml)

## LINKS

- https://github.com/kawanet/cdate
- https://github.com/kawanet/cdate-locale
- https://www.npmjs.com/package/cdate-locale
