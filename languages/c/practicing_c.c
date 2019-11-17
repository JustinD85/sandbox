#include <stdio.h>
#include <stdlib.h>

int main()
{
	/*
	 * Scanf requires the memory address of the variable it will write to.
	 * malloc will return a pointer to some memory it sets aside for you
	 * *numbers is thus simply a pointer that holds the returned value of malloc  
	 */

    int *numbers= malloc(12); // hold pointer malloc returns of size given to malloc
    
    puts("Enter your numbers to be sorted: ");

    // simply using 'numbers' without an '*' gives us the address of an unknown value
    // we can use 'numbers' because address's are themselves of the numeric type
    scanf("%i", numbers);

    //to see/use the value stored at the 'numbers' address we use '*'
    printf("%i",*numbers);

    //don't forget to free up memory once you are done with it
    //THIS IS MEMORY LEAK IF YOU DO NOT
    free(numbers);

    return 0;
}
