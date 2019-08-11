using static System.Console;
using System.Threading;
using System.Threading.Tasks;

namespace threads
{
    class Program
    {
        static bool hacking = true;
        static void Main(string[] args)
        {
            WriteLine("Simulating Hacking the Internet... ");
            Hack();
            WriteLine("Waiting for the Hack to Complete... ");

            while (hacking)
            { WriteLine("Waiting...:> "); ReadLine(); }
        }

        static void Hack()
        {
            Task.Run(() =>
            {
                Thread.Sleep(3500);
                WriteLine("Hack Complete! Watch out for the Feds... ");
                hacking = false;
            });
        }
    }
}
