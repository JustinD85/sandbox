using System;

namespace hello_world
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter some text to have it echoed to you. \n");
            var greeting = Console.ReadLine();
            Console.WriteLine(greeting);
        }
    }
}
