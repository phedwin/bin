

#[]
nasm := $(shell which nasm)
nasm_flags := -f elf64
linker := $(shell which ld)
nasm_out ?= x86bin
binary ?=  bin

ifeq ($(shell uname -m), x86_64)

x86 :
	$(nasm) $(nasm_flags) -o $(nasm_out) asm/x86.asm && $(linker) -o bin $(nasm_out) && ./$(binary)


.PHONY: clean
clean :
	rm -rf $(binary) $(nasm_out) *.o

endif

calc :
	# arguments
	bun run index.ts 1 + 4 - 5