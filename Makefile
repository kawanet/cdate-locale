#!/usr/bin/env bash -c make

LOCALES=$(strip $(subst -,,$(shell grep "^-" locales.yml)))

ALLTS=$(addprefix lib/locale_,$(addsuffix .ts,$(LOCALES)))
ALLJS=$(addprefix lib/locale_,$(addsuffix .js,$(LOCALES)))
ALLCJS=$(addprefix lib/locale_,$(addsuffix .cjs,$(LOCALES)))

all: index.d.ts index.js index.cjs $(ALLTS) $(ALLJS) $(ALLCJS) package.json

index.js:
	/bin/rm -f $@
	for f in $(LOCALES); do echo "export {locale_$$f} from \"./lib/locale_$$f.js\";" >> $@; done

index.cjs:
	/bin/rm -f $@
	for f in $(LOCALES); do echo "exports.locale_$$f = require(\"./lib/locale_$$f.cjs\").locale_$$f;" >> $@; done

index.d.ts:
	echo 'import type {cdate} from "cdate";' > $@
	echo '' >> $@
	for f in $(LOCALES); do echo "export const locale_$$f: cdate.Handlers;" >> $@; done

lib/%.ts: ./src/make-locale.js
	mkdir -p lib/
	node ./src/make-locale $(subst _,-,$(subst locale_,,$(notdir $(basename $@)))) > $@

package.json: ./src/update-exports.js
	node ./src/update-exports ./index.js $(ALLCJS) > $@~
	mv -f $@~ $@

%.js: %.ts
	./node_modules/.bin/tsc -p .

lib/%.cjs: lib/%.js
	perl -pe 's#^export const #exports.#' < $< > $@

clean:
	/bin/rm -fr lib/*.ts lib/*.cjs lib/*.js index.d.ts index.ts index.cjs index.js src/*.js

.PHONY: all clean test
