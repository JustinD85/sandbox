using static System.Console;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading;

namespace collections
{
    class Program
    {
        //Allows for thread safe operations
        //one example is below where only one value with the same key is added
        //the other is ignore, safely(sort of like a race condition)
        static ConcurrentDictionary<string, string> ccConfig = new ConcurrentDictionary<string, string>();
        static void Main(string[] args)
        {
            var customers = new List<string>();
            customers.Add("Jill");
            customers.Add("Bob");
            customers.Add("Morgan");
            WriteLine(customers.Count);

            var config = new Dictionary<string, string>();
            //No duplicates or error
            config.Add("resolution", "1920x1080");
            config.Add("reactjs", "16.8.1");
            config.Add("@aspnet/signalr", "2.2.1");
            config.Add("docker", "5.2");
            config.Add("wsl", "^2");

            foreach (var tuple in config)
            {
                WriteLine(tuple);
            }
            WriteLine(config["reactjs"]);

            //Using multiple threads with dictionary
            Thread thread1 = new Thread(new ThreadStart(AddItem));
            Thread thread2 = new Thread(new ThreadStart(AddItem));
            thread1.Start();
            thread2.Start();
        }

        static void AddItem(string key, string value)
        {
            ccConfig.TryAdd(key, value);
            WriteLine(ccConfig.Count);
        }
    }
}
