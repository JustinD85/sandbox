using System;

namespace authenticate
{
    class Program
    {
        private static bool authenticated = false;
        static void Main(string[] args)
        {
            while (!authenticated)
            {


                Console.WriteLine("What is the pass code?");
                var code = Console.ReadLine();

                if (code.ToLower() == "password")
                {
                    authenticated = true;
                    Console.WriteLine("Success");
                }
                else
                {
                    Console.WriteLine("Boo Boo");
                }
            }
        }
    }
}
