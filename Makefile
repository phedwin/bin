

#[]
git_auto_commit_flags = git diff
nasm := $(shell which nasm)
nasm_flags := -f elf64
linker := $(shell which ld)
nasm_out ?= x86bin
binary ?=  bin
rustc := $(shell which rustc)


gcc := $(shell which gcc)

vm_output := vm.o
vm := vm/vm.c
repo_owner := $(shell hostname -f)
message = $(shell $(git_auto_commit_flags))

# package the typescript application
BOOTSTRAP_DIR := src/main.ts
BUNDLE_FILE := dist/bundle.js
EXECUTABLE := calc
PKG := npx pkg
DIST = dist
TARGET := node18-linux-x64

INSTALL_DIR ?= /usr/bin/$(EXECUTABLE)

all: clean build package


commit : clean
	git add . && \
	git commit -m "<<${binary}>> -- ${repo_owner} 👻 💚 made the following changes" -m "${message}" && \
	git push origin main \

# TODO make this work
ifeq ($(shell uname -m), x86_64)
	build :
		npx esbuild $(BOOTSTRAP_DIR) --bundle --platform=node --outfile=dist/bundle.js --sourcemap --target=node14
	package :
		$(PKG) $(BUNDLE_FILE) --output $(EXECUTABLE) --targets $(TARGET)
	x86 :
		$(nasm) $(nasm_flags) -o $(nasm_out) asm/reg.asm && $(linker) -o bin $(nasm_out) && ./$(binary)


else
	@echo "Switch targets ${TARGET}"
	nasm_flags :=
	TARGET := 
	INSTALL_DIR ?=
	build_cmd := @echo "Build skipped for non-x86_64 architecture"
	package_cmd := @echo "Package skipped for non-x86_64 architecture"
	x86_cmd := @echo "x86 skipped for non-x86_64 architecture"

endif


x86 :
	$(nasm) $(nasm_flags) -o $(nasm_out) asm/reg.asm && $(linker) -o bin $(nasm_out) && ./$(binary)

bin : 
	./$(EXECUTABLE) "1 + 4 - 5 - 12 () + & 1 | 10"

inline :
	$(rustc) -C target-feature=+asm -C target-cpu=native src/main.rs

#install in /usr/bin/calc 
install : 
	#TODO  FINAL PRODUCT

build:
	npx esbuild $(BOOTSTRAP_DIR) --bundle --platform=node --outfile=dist/bundle.js --sourcemap --target=node14
package:
	npx pkg dist/bundle.js --output calc --targets $(TARGET)

calc :
	# arguments
	bun run $(BOOTSTRAP_DIR) 1 + 4 - 5 - 12

c :
	$(gcc) -o $(vm_output) $(vm) && ./vm.o 1 + 4 - 5 - 12 () + & 1 | 10
.PHONY: clean
clean :
	rm -rf $(binary) $(nasm_out) *.o $(EXECUTABLE) $(BUNDLE_FILE) $(DIST) log

