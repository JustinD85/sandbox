using System;
using System.Collections.Generic;
using static Util.Console;

namespace SchoolTracker
{
    class Program
    {
        // enum School
        // {
        //     Hogwarts = 0,
        //     Harvard = 1,
        //     Franklin = 2,
        //     MIT = 3
        // }
        static List<Student> students = new List<Student>();
        static void Main(string[] args)
        {
            Log("Welcome to your new student tracker system." +
            "Enter data as <student_name> and <grade>.");

            var shouldAddMore = true;

            shouldAddMore = checkContinue();
            while (shouldAddMore)
            {
                var newStudent = new Student();

                Log("Enter name of student:> ");
                newStudent.Name = GetMessage();

                Log("Enter grade of student:> ");
                GetMessageInt(out newStudent.Grade);

                Log("Enter the address:> ");
                newStudent.Address = GetMessage();

                Log("Enter the birthday:> ");
                newStudent.Birthday = GetMessage();

                Log("Enter the phone number");
                newStudent.Phone = GetMessage();
                Log("What school do you go to?");
                GetMessageSchool(out newStudent.School);

                students.Add(newStudent);
                Log(Person.Count.ToString());
                shouldAddMore = checkContinue();
            }
            Export();
        }

        static void Export()
        {
            foreach (var student in students)
            {
                switch (student.School)
                {
                    case School.MIT:
                        Log("Exports to MIT... ");
                        break;
                    case School.Harvard:
                        Log("Exporting to Harvard");
                        break;
                    case School.Hogwarts:
                        Log("Exporting to Hogwarts");
                        break;
                    default:
                        Console.WriteLine("Exporting to Franklin University... ");
                        break;
                }
                Log(string.Format("\n\n{0}'s grade is: {1}. Information is as follows:\nAddress: {2}\nBirthday: {3}", student.Name, student.Grade, student.Address, student.Birthday));
            }
        }

    }
}
