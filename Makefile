#!/usr/bin/env bash -c make

LOCALES=$(strip $(subst -,,$(shell grep "^-" locales.yml)))

ALLTS=$(addprefix lib/locale_,$(addsuffix .ts,$(LOCALES)))
ALLCJS=$(addprefix lib/locale_,$(addsuffix .cjs,$(LOCALES)))

all: index.d.ts index.js index.cjs package.json

./index.ts: $(ALLTS)
	/bin/rm -f $@
	for f in $(LOCALES); do echo "export { locale_$$f } from \"./lib/locale_$$f.js\";" >> $@; done

./index.cjs: $(ALLCJS)
	/bin/rm -f $@
	for f in $(LOCALES); do echo "exports.locale_$$f = require(\"./lib/locale_$$f.cjs\").locale_$$f;" >> $@; done

lib/%.ts:
	mkdir -p lib/
	node ./src/make-locale $(subst _,-,$(subst locale_,,$(notdir $(basename $@)))) > $@

package.json: ./index.js $(ALLCJS)
	node ./src/update-exports $^ > $@~
	mv -f $@~ $@

%.js: %.ts
	./node_modules/.bin/tsc -p tsconfig.json

lib/%.js: lib/%.ts
	./node_modules/.bin/tsc -p tsconfig.json

lib/%.cjs: lib/%.js
	perl -pe 's#^export const #exports.#' < $< > $@

%.d.ts: %.ts
	./node_modules/.bin/tsc -p tsconfig.dts.json

clean:
	/bin/rm -fr lib/*.ts lib/*.cjs lib/*.js index.ts index.cjs index.js

.PHONY: all clean test
