using System;

namespace SchoolTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] studentGrades = new int[] { 80, 95, 12, 67, 78, 89, 23, 45, 99, 77 };
            foreach (int grade in studentGrades)
            {
                Console.WriteLine(grade);
            }
        }
    }
}
