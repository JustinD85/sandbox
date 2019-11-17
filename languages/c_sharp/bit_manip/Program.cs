using static System.Console;
using System.Collections;

namespace bit_manip
{
    class Program
    {
        static void Main(string[] args)
        {
            var preload = new bool[3] { true, false, true };

            var enemyGrid = new BitArray(preload); //alt I can pass in size of array and manually manip

            foreach (var spot in enemyGrid)
            {
                WriteLine(spot);
            }

            // enemyGrid[0] = false;
            // enemyGrid[1] = true;
            // enemyGrid.Set(2, false);//alt syntax
        }
    }
}
