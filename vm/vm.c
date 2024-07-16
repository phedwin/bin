

#include <stdio.h>
int main(int argc, char *argv[]) {
    ssize_t value;

    for (value = 0; value < argc; value ++) {
        char *values = argv[value];
        printf("%s\n", values);
    }
}