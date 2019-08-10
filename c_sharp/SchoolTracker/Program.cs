using System;
using System.Collections.Generic;
using static Util.Console;

namespace SchoolTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            Log("Welcome to your new student tracker system." +
            "Enter data as <student_name> and <grade>.");

            var shouldAddMore = true;

            var students = new List<Student>();

            shouldAddMore = checkContinue();
            while (shouldAddMore)
            {
                var newStudent = new Student();

                Log("Enter name of student:> ");
                newStudent.Name = GetMessage();

                Log("Enter grade of student:> ");
                while (!int.TryParse(GetMessage(), out newStudent.Grade))
                    Log("Please Enter a number.");

                Log("Enter the address:> ");
                newStudent.Address = GetMessage();

                Log("Enter the birthday:> ");
                newStudent.Birthday = GetMessage();

                Log("Enter the phone number");
                newStudent.Phone = GetMessage();

                students.Add(newStudent);
                Log(Person.Count.ToString());
                shouldAddMore = checkContinue();
            }
            foreach (Student student in students)
            {
                Log(string.Format("{0}'s grade is: {1}. Information is as follows:\nAddress: {2}\nBirthday: {3}", student.Name, student.Grade, student.Address, student.Birthday));
            }
        }
    }
}
