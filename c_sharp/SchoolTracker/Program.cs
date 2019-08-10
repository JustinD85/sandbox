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

            var shouldContinue = true;

            var students = new List<Student>();

            shouldContinue = checkContinue();
            while (shouldContinue)
            {
                var name = "";
                var grade = "";
                var address = "";
                var birthday = "";
                var phone = "";

                Log("Enter name of student:> ");
                name = GetMessage();
                Log("Enter grade of student:> ");
                grade = GetMessage();
                Log("Enter the address:> ");
                address = GetMessage();
                Log("Enter the birthday:> ");
                birthday = GetMessage();
                Log("Enter the phone number");
                phone = GetMessage();

                students.Add(new Student()
                {
                    Name = name,
                    Grade = grade,
                    Address = address,
                    Birthday = birthday,
                    Phone = phone
                });
                Student.Count++;
                Console.WriteLine(Student.Count);
                shouldContinue = checkContinue();
            }
            foreach (Student student in students)
            {
                Console.WriteLine("{0}'s grade is: {1}. Information is as follows:\nAddress: {2}\nBirthday: {3}", student.Name, student.Grade, student.Address, student.Birthday);//, student.Phone);
            }
        }
    }
}
