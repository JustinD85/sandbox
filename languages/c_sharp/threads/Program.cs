using static System.Console;
using System.Threading;
using System.Threading.Tasks;
using System.Net.Http;
using System;
using System.Linq;

namespace threads
{
    class Program
    {
        static bool hacking = true;
        static void Main(string[] args)
        {
            WriteLine("Simulating Hacking the Internet... ");
            Hack(onComplete);
            WriteLine("Waiting for the Hack to Complete... ");

            foreach (var item in Enumerable.Range(0, 50))
            {
                var inet = new Thread(new ThreadStart(SendRequest));
                inet.Start();

                Task.Run(() =>
                {
                    WriteLine($"Starting request in thread {Thread.CurrentThread.ManagedThreadId}");
                    Thread.Sleep(2000);
                    WriteLine("request complete");
                });
            }

            while (hacking)
            { WriteLine("Waiting...:> "); ReadLine(); }
        }
        static void onComplete()
        {
            WriteLine("Hack Complete! Watch out for the Feds... ");
            hacking = false;
        }

        static void Hack(Action callback)
        {
            Task.Run(async () =>
           {
               // Thread.Sleep(3500);
               var client = new HttpClient();
               var data = await client.GetStringAsync("http://hack.com");
               WriteLine(data);
               callback();
           });
        }

        static void SendRequest()
        {
            WriteLine($"Thread ID: {Thread.CurrentThread.ManagedThreadId}");
        }
    }
}
