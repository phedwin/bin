#ifndef __VIRTUAL_MACHINE_H
#define __VIRTUAL_MACHINE_H

#include <assert.h>
#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>
#include <errno.h>
#include <string.h>

/**
 * Define memory allocation
 */
#define MEMORY_MAX (1 << 16)  // Define a constant for the maximum memory size

// Define memory allocation macros
#define ALLOCATE_MEM(type) ((type *)allocate_mem(sizeof(type)))

#define ALLOCATE_ARRAY(type, count) ((type *)allocate_mem(sizeof(type) * (count)))

#define ALLOCATE(size) allocate_mem(size)

#define REALLOCATE(ptr, size) ((void *)reallocate_mem(ptr, size))

#define FREE(ptr) free_memory(ptr)

void *allocate_mem(size_t size);
void *reallocate_mem(void *ptr, size_t size);
void free_memory(void *ptr);

static inline void panic() {
    fprintf(stderr, "Results %s\n", strerror(errno));

    exit(EXIT_FAILURE);
}

#endif
