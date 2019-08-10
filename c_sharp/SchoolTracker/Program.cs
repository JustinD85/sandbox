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

            var students = new List<Student>();

            shouldContinue = checkContinue();
            while (shouldContinue)
            {
                var name = "";
                var grade = "";
                var address = "";
                var birthday = "";
                var phone = "";

                log("Enter name of student:> ");
                name = Console.ReadLine();
                log("Enter grade of student:> ");
                grade = Console.ReadLine();
                log("Enter the address:> ");
                address = Console.ReadLine();
                log("Enter the birthday:> ");
                birthday = Console.ReadLine();
                log("Enter the phone number");
                phone = Console.ReadLine();

                students.Add(new Student()
                {
                    Name = name,
                    Grade = grade,
                    Address = address,
                    Birthday = birthday,
                    Phone = phone
                });
                shouldContinue = checkContinue();
            }
            foreach (Student student in students)
            {
                Console.WriteLine("{0}'s grade is: {1}. Information is as follows:\nAddress: {2}\nBirthday: {3}\nPhone: {4}", student.Name, student.Grade, student.Address, student.Birthday, student.Phone);
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

    class Student
    {
        public string Name;
        public string Grade;
        public string Birthday;
        public string Address;
        public string Phone;
    }
}
