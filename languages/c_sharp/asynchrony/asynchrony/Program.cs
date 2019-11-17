using System;

namespace asynchrony
{
    class Program
    {
        static void Main()
        {
            PrintSum(1, 2, 3);
            PrintSum(10, 20, 30);
            PrintSum(100, 200, 300);
        }

        static void PrintSum(int a, int b, int c)
        {
            Console.WriteLine("Sum: {0}", a + b + c);
        }
    }
}
