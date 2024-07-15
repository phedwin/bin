
#include "./lib.h"
#include <stdio.h>

void read_files(char *image_path) {
    FILE* file = fopen(image_path, "rb");
    if ( ! file) panic();
}

int main(int argc, char *argv[]) {
    read_files(argv[1]);
}