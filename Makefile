#!/usr/bin/env bash -c make

LOCALES=$(strip $(subst -,,$(shell grep "^-" locales.yml)))

ALLTS=$(addprefix lib/locale_,$(addsuffix .ts,$(LOCALES)))
ALLDTS=$(addprefix lib/locale_,$(addsuffix .d.ts,$(LOCALES)))
ALLJS=$(addprefix lib/locale_,$(addsuffix .js,$(LOCALES)))
ALLCJS=$(addprefix lib/locale_,$(addsuffix .cjs,$(LOCALES)))

ALLINDEX=index.d.ts index.js index.cjs
ALLSRC=./src/make-locale.js ./src/update-exports.js

all: $(ALLINDEX) $(ALLSRC) $(ALLTS) $(ALLJS) $(ALLDTS) $(ALLCJS) package.json

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

lib/%.d.ts: lib/%.ts
	./node_modules/.bin/tsc -p tsconfig.dts.json

lib/%.ts:
	mkdir -p lib/
	node ./src/make-locale $(subst _,-,$(subst locale_,,$(notdir $(basename $@)))) > $@

package.json: ./index.js $(ALLCJS)
	node ./src/update-exports $^ > $@~
	[ -s $@~ ] && mv -f $@~ $@

%.js: %.ts
	./node_modules/.bin/tsc -p tsconfig.json

lib/%.cjs: lib/%.js
	perl -pe 's#^export const #exports.#' < $< > $@

clean:
	/bin/rm -fr lib/*.ts lib/*.cjs lib/*.js index.d.ts index.ts index.cjs index.js src/*.js

.PHONY: all clean test
