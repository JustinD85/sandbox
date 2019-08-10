namespace Util
{
    class Console
    {
        static public void Log(string msg)
        {
            System.Console.WriteLine(msg);
        }
        static public string GetMessage()
        {
            string response = System.Console.ReadLine();
            while (response.Trim() == "")
            {
                System.Console.WriteLine("Please enter valid text.");
                response = System.Console.ReadLine();
            }
            return response;
        }

        static public bool checkContinue()
        {
            System.Console.WriteLine("Should we continue? `q` for quit, `enter` to continue");
            return System.Console.ReadLine().ToLower() != "q";
        }
    }
}