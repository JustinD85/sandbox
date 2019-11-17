//Justin Duncan
#include <pthread.h>
#include <stdio.h>
#include <stdlib.h>

#define SIZE 10
#define NUMBER_OF_THREADS 3
#define NUMBER_OF_WORKERS (NUMBER_OF_THREADS - 1)

pthread_t threads[NUMBER_OF_THREADS];
void *sort(void *pointer_to_indices);
void *merge();

int list[SIZE] = {7, 12, 19, 3, 18, 4, 2, 6, 15, 8};
int result[SIZE];

typedef struct
{
    int first_index;
    int last_index;
} first_last;

int main()
{
    /* sortin thread one */
    first_last *indices = (first_last *)malloc(sizeof(first_last));
    //beginning to middle of arry
    indices->first_index = 0;
    indices->last_index = (SIZE / 2) - 1;
    pthread_create(&threads[0], NULL, sort, indices);

    /*sorting thread two */
    first_last *p2_indices = (first_last *)malloc(sizeof(first_last));
    //middle to end of arry
    p2_indices->first_index = (SIZE / 2);
    p2_indices->last_index = SIZE - 1;
    pthread_create(&threads[1], NULL, sort, p2_indices);

    // wait for threads
    pthread_join(threads[0], NULL);
    pthread_join(threads[1], NULL);

    //setup merge thread
    indices = (first_last *)malloc(sizeof(first_last));

    indices->first_index = 0;
    indices->last_index = (SIZE - 1);
    pthread_create(&threads[2], NULL, merge, NULL);

    // wait to finish
    pthread_join(threads[2], NULL);
    return 0;
}

void *sort(void *pointer_to_indices)
{
    int begin = ((first_last *)pointer_to_indices)->first_index;
    int end = ((first_last *)pointer_to_indices)->last_index;
    printf("Thread index:: start: %d\t end: %d\n", begin, end);

    //Essentially, for every number, compare it to it's neighbor and swap if it is greather than neighbor
    for (int i = begin; i <= end; i++)
    {
        for (int j = begin; j < end; j++)
        {
            if (list[j] > list[j + 1])
            {
                int k = list[j];
                list[j] = list[j + 1];
                list[j + 1] = k;
            }
        }
    }

    pthread_exit(0);
}

void *merge()
{
    int l_index = 0;
    int r_index = (SIZE / 2);
    int current_index = 0;

    while (current_index < SIZE)
    {
        //first two if's are guard against going past the left and right bounds
        if (l_index == (SIZE / 2))
        {
            result[current_index] = list[r_index];
            printf("\t\tright %d\n", r_index);
            r_index++;
            current_index++;
            continue;
        }
        if (r_index == SIZE)
        {
            result[current_index] = list[l_index];
            printf("left %d\n", l_index);
            l_index++;
            current_index++;
            continue;
        }
        if (list[l_index] < list[r_index])
        {
            result[current_index] = list[l_index];
            printf("left %d\n", l_index);
            l_index++;
        }
        else
        {
            result[current_index] = list[r_index];
            printf("\t\tright %d\n", r_index);
            r_index++;
        }
        current_index++;
    }

    printf("\n\n");
    for (int i = 0; i < SIZE; i++)
    {
        printf("Ordered Array: %d \n", result[i]);
    }
    pthread_exit(0);
}