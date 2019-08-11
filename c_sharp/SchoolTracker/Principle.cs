using static Util.Console;
using Banking;

namespace SchoolMembers
{
    class Principle : Person, IPayee
    {
        public void Pay()
        {
            Log("Paying the Principle... ");
        }
    }
}