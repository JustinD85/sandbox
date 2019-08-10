using System;
using System.Collections.Generic;

namespace SchoolTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            log("Welcome to your new student tracker system." +
            "Enter data as <student_name> and <grade>.");

            var shouldContinue = true;
            var stuNames = new List<string>();
            var stuGrades = new List<int>();

            shouldContinue = checkContinue();
            while (shouldContinue)
            {
                log("Enter name of student:> ");
                stuNames.Add(Console.ReadLine());
                log("Enter grade of student:> ");
                stuGrades.Add(int.Parse(Console.ReadLine()));
                shouldContinue = checkContinue();
            }

            for (int i = stuNames.Count - 1; i >= 0; i--)
            {
                Console.WriteLine("Name:> {0} , Grade:> {1}", stuNames[i], stuGrades[i]);
            }
        }

        static void log(string msg)
        {
            Console.WriteLine(msg);
        }
        static bool checkContinue()
        {
            Console.WriteLine("Should we continue? `q` for quit, `enter` to continue");
            return Console.ReadLine().ToLower() != "q";
        }
    }
}
