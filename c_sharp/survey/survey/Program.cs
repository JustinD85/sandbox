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

            Console.WriteLine("Your name is {0} and you are {1} with a birth month of {2}", name, age, birth_month);
            if (birth_month == "August" || birth_month == "august")
            {
                Console.WriteLine("Ayyyeeeee");
            }
            if (birth_month.ToLower() == "December")
            {
                Console.WriteLine("Woot Woot");
            }
        }
    }
}
