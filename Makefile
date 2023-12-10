
.PHONY: install clean clean-al

install:
	pnpm install

clean:
	rm -rf dist/

clean-all: clean
	rm -rf node_modules/ pnpm-lock.yaml

build:
	pnpm run vite:build
