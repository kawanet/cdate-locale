#!/usr/bin/env bash -c make

LOCALES=$(strip $(subst -,,$(shell grep "^-" locales.yml)))

ALLTS=$(addprefix locale/,$(addsuffix .ts,$(LOCALES)))
ALLDTS=$(addprefix locale/,$(addsuffix .d.ts,$(LOCALES)))
ALLJS=$(addprefix locale/,$(addsuffix .js,$(LOCALES)))
ALLCJS=$(addprefix locale/,$(addsuffix .cjs,$(LOCALES)))

ALLINDEX=index.d.ts index.js index.cjs
ALLSRC=./src/make-locale.js ./src/update-exports.js

all: $(ALLINDEX) $(ALLSRC) $(ALLTS) $(ALLJS) $(ALLDTS) $(ALLCJS) package.json

index.js:
	/bin/rm -f $@
	for f in $(LOCALES); do echo "export {locale_$$f} from \"./locale/$$f.js\";" >> $@; done

index.cjs:
	/bin/rm -f $@
	for f in $(LOCALES); do echo "exports.locale_$$f = require(\"./locale/$$f.cjs\").locale_$$f;" >> $@; done

index.d.ts:
	echo 'import type {cdate} from "cdate";' > $@
	echo '' >> $@
	for f in $(LOCALES); do echo "export const locale_$$f: cdate.Handlers;" >> $@; done

locale/%.d.ts: locale/%.ts
	./node_modules/.bin/tsc -p tsconfig.dts.json

locale/%.ts:
	mkdir -p locale/
	node ./src/make-locale $(subst _,-,$(notdir $(basename $@))) > $@

package.json: ./index.js $(ALLCJS)
	node ./src/update-exports $^ > $@~
	[ -s $@~ ] && mv -f $@~ $@

%.js: %.ts
	./node_modules/.bin/tsc -p tsconfig.json

locale/%.cjs: locale/%.js
	perl -pe 's#^export const #exports.#' < $< > $@

clean:
	/bin/rm -fr locale/*.ts locale/*.cjs locale/*.js index.d.ts index.ts index.cjs index.js src/*.js

.PHONY: all clean test
