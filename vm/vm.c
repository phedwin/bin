// Von Neumann architecture

#include <stdint.h>

// 1. input

enum
{
    MR_KBSR = 0xFE00, /* keyboard status */
    MR_KBDR = 0xFE02  /* keyboard data */
};

