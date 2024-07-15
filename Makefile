

#[]
nasm := $(shell which nasm)
nasm_flags := -f elf64
linker := $(shell which ld)
nasm_out ?= x86bin
binary ?=  bin

gcc := $(shell which gcc)

vm_output := vm.o
vm := vm/vm.c

# package the typescript application
BOOTSTRAP_DIR := src/main.ts
BUNDLE_FILE := dist/bundle.js
EXECUTABLE := calc
PKG := npx pkg

all: clean build package
build :
	npx esbuild $(BOOTSTRAP_DIR) --bundle --platform=node --outdir=dist --sourcemap --target=node14

package :
	$(PKG) $(BUNDLE_FILE) --output $(EXECUTABLE) --targets node18-linux-x64

ifeq ($(shell uname -m), x86_64)

x86 :
	$(nasm) $(nasm_flags) -o $(nasm_out) asm/x86.asm && $(linker) -o bin $(nasm_out) && ./$(binary)


.PHONY: clean
clean :
	rm -rf $(binary) $(nasm_out) *.o $(JS_DIST_DIR) $(BUNDLE_FILE) $(EXECUTABLE)

endif

calc :
	# arguments
	bun run index.ts 1 + 4 - 5

c : 
	$(gcc) -o $(vm_output) $(vm) && ./vm.o
