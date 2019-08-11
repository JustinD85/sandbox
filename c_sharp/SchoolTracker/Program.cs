using System;
using System.Collections.Generic;
using static Util.Console;
using SchoolMembers;

namespace SchoolTracker
{
    class Program
    {
        static List<Student> students = new List<Student>();
        static void Main(string[] args)
        {
            System.Console.Clear();
            Payroll payroll = new Payroll();
            payroll.PayAll();

            Log("Welcome to your new student tracker system." +
            "\nEnter data as <student_name> and <grade>.");

            var shouldAddMore = true;

            shouldAddMore = checkContinue();
            while (shouldAddMore)
            {
                var newStudent = new Student();
                var newTeacher = new Teacher();

                Log("Enter name of student:> ");
                newStudent.Name = GetMessage();

                Log("Enter grade of student:> ");
                GetMessageInt(out newStudent.Grade);

                Log("Enter the address:> ");
                newStudent.Address = GetMessage();

                Log("Enter the birthday:> ");
                newStudent.Birthday = GetMessage();

                Log("Enter the phone number:> ");
                newStudent.Phone = GetMessage();

                Log("Enter the Teachers Name:> ");
                newTeacher.Name = GetMessage();

                Log("Enter the subject taught:> ");
                newTeacher.Subject = GetMessage();
                newStudent.Teacher = newTeacher;

                Log("What school do you go to? \n0: MIT \n1: Harvard \n2: Hogwarts \n3: Franklin (default)");
                GetMessageSchool(out newStudent.School);

                students.Add(newStudent);
                Log(Person.Count.ToString());
                shouldAddMore = checkContinue();
            }
            Export();
        }

        static void Export()
        {
            System.Console.Clear();
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
                Log(string.Format("\n\t*** {0} ***", student.Name));
                Log("##################################");
                Log(string.Format("\n\tGrade: {0}\n\tAddress: {1}\n\tBirthday: {2}", student.Grade, student.Address, student.Birthday));
                Log(string.Format("\n\tTeacher: {0}\n\tSubject: {1}\n\t", student.Teacher.Name, student.Teacher.Subject));
                Log("##################################\n\n");
            }
        }

    }
}
