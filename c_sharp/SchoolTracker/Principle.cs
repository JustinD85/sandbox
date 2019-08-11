using static Util.Console;

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