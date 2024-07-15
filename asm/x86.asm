

section .data
hello db 'Hello, World!', 0  

section .text
global _start

_start:
    mov rax, 1        
    mov rdi, 1          
    mov rsi, hello     
    mov rdx, 13    
    syscall    

    ; Exit the program
    mov rax, 60         ; System call number (sys_exit)
    xor rdi, rdi        ; Exit code 0
    syscall             ; Invoke the system call
