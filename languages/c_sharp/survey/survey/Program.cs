using System;

namespace survey
{
    class Program
    {
        static void Main(string[] args)
        {
            SendMessage("What is your name?");
            var name = GetMessage();

            SendMessage("How old are you?");
            var age = GetMessage();

            SendMessage("What month were you born in?");
            var birth_month = GetMessage();

            SendMessage(String.Format("Your name is {0} and you are {1} with a birth month of {2}", name, age, birth_month));
            if (birth_month == "August" || birth_month == "august")
                SendMessage("Ayyyeeeee");
            if (birth_month.ToLower() == "December")
                SendMessage("Woot Woot");
        }

        static void SendMessage(string message)
        {
            Console.WriteLine(message);
        }
        static string GetMessage()
        {
            string response = Console.ReadLine();
            while (response.Trim() == "")
            {
                Console.WriteLine("Please enter valid text.");
                response = Console.ReadLine();
            }
            return response;
        }
    }
}
