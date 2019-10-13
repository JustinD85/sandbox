#include <stdio.h>
#include <stdlib.h>
#define SIZE (int) sizeof(int)

typedef enum {FALSE = 0, TRUE} boolean;//defined my own boolean because there is no boolean in C

//Declare functions that may be invoked... definitions at bottom
void number_checker(int*);
void take_numbers(int*, int);
char* sort_numbers(int*, int);
void clear_input(){while(getchar() != '\n');}

int main(){
  int *limit = malloc(SIZE); 
  puts("How many numbers would you like sorted?");
  number_checker(limit);

  int* numbers_array = malloc( (*limit) * SIZE);
  take_numbers(numbers_array, *limit);
  sort_numbers(numbers_array, *limit);

  free(limit);//frees the memory address we held so dear for this program
  return 0;
}

/*
 * continually checks the type of input entered until a number is recognized
 * */
void number_checker(int* number)
{
  boolean is_number = TRUE;

  while(is_number)
  {
    puts("Enter number: ");
    int correct = scanf("%d", number); 

    if(correct == EOF || correct == 0 || *number == 0)
      puts("Please enter a number");
    else
      is_number = FALSE;
  }
}		

/*
 * ensures each value in the array is a numeral
 * */
void take_numbers(int* array_numbers, int limit)
{
  for(int i = 0; i < limit; i++)
  {
    puts("Now, enter your  next number to be sorted..");
    number_checker(&array_numbers[i]);	
  }
}

/*
 * sorts then prints numbers, ascending, to output
 * */
char* sort_numbers(int* number_array, int limit)
{
  char* return_val = malloc(limit * SIZE);

  // the comparator
  int compare(const void *p, const void *q)
  {
    //This is simply subtracting two digits and returning the difference
    //I must  cast the type before dereferencing becuase the types come in as void...
    return *(int *)p - *(int *)q; 
  }

  qsort(number_array, limit, SIZE, compare);	

  for(int i = 0; i < limit; i++)
  {
    printf("Index: %3d : %3d\n\n", i, number_array[i]);
  }

}
