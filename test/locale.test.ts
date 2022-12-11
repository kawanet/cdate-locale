#!/usr/bin/env mocha -R spec

import {strict as assert} from "assert";
import {cdate} from "cdate";

import * as locales from "../index.js";

const TITLE = "locale.ts";

describe(TITLE, () => {
    const dt = new Date("2023-04-05 06:07:08.090");
    const fmt = "%Y/%m/%d %H:%M:%S.%L";

    it("locale_en", () => {
        const c = cdate(dt).handler(locales.locale_en);

        assert.equal(c.text(fmt), "2023/04/05 06:07:08.090");
        assert.equal(c.text(`"%A"`), `"Wednesday"`, `"%A"`);
        assert.equal(c.text(`"%a"`), `"Wed"`, `"%a"`);
        assert.equal(c.text(`"%B"`), `"April"`, `"%B"`);
        assert.equal(c.text(`"%b"`), `"Apr"`, `"%b"`);

        assert.equal(c.format(`"dddd"`), `"Wednesday"`, `"dddd"`);
        assert.equal(c.format(`"ddd"`), `"Wed"`, `"ddd"`);
        assert.equal(c.format(`"MMMM"`), `"April"`, `"MMMMM"`);
        assert.equal(c.format(`"MMM"`), `"Apr"`, `"MMM"`);
    });

    it("locale_fr", () => {
        const c = cdate(dt).handler(locales.locale_fr);

        assert.equal(c.text(fmt), "2023/04/05 06:07:08.090");
        assert.equal(c.text(`"%A"`), `"mercredi"`, `"%A"`);
        assert.equal(c.text(`"%a"`), `"mer."`, `"%a"`);
        assert.equal(c.text(`"%B"`), `"avril"`, `"%B"`);
        assert.equal(c.text(`"%b"`), `"avr."`, `"%b"`);

        assert.equal(c.format(`"dddd"`), `"mercredi"`, `"dddd"`);
        assert.equal(c.format(`"ddd"`), `"mer."`, `"ddd"`);
        assert.equal(c.format(`"MMMM"`), `"avril"`, `"MMMMM"`);
        assert.equal(c.format(`"MMM"`), `"avr."`, `"MMM"`);
    });

    it("locale_ja", () => {
        const c = cdate(dt).handler(locales.locale_ja);

        assert.equal(c.text(fmt), "2023/04/05 06:07:08.090");
        assert.equal(c.text(`"%A"`), `"水曜日"`, `"%A"`);
        assert.equal(c.text(`"%a"`), `"水"`, `"%a"`);
        assert.equal(c.text(`"%B"`), `"4月"`, `"%B"`);
        assert.equal(c.text(`"%b"`), `"4月"`, `"%b"`);

        assert.equal(c.format(`"dddd"`), `"水曜日"`, `"dddd"`);
        assert.equal(c.format(`"ddd"`), `"水"`, `"ddd"`);
        assert.equal(c.format(`"MMMM"`), `"4月"`, `"MMMMM"`);
        assert.equal(c.format(`"MMM"`), `"4月"`, `"MMM"`);
    });
});