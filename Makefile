
.PHONY: install clean clean-al

install:
	pnpm install

dev:
	pnpm run dev

watch:
	pnpm run watch

build:
	pnpm run build

release: build
	pnpm run web-ext:build
	zip -r web-ext-artifacts/markdownify-metadata-v0.0.1.zip dist/*

test:
	pnpm run test

clean:
	rm -rf dist/

clean-all: clean
	rm -rf node_modules/ pnpm-lock.yaml

nolyfill:
	pnpx nolyfill && pnpx nolyfill install && pnpm install

