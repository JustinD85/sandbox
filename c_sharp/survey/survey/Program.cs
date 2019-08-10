using System;

namespace survey
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What is your name?");
            var name = Console.ReadLine();

            Console.WriteLine("How old are you?");
            var age = Console.ReadLine();

            Console.WriteLine("What month were you born in?");
            var birth_month = Console.ReadLine();

            Console.WriteLine("Your name is " + name + " and you are " + " with a birth month of " + birth_month);
        }
    }
}
