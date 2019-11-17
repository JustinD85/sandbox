using static Util.Console;
using Banking;

namespace SchoolMembers
{
    class Teacher : Person, IPayee
    {
        public string Subject { get; set; }
        public void Pay()
        {
            Log("Paying Teacher... ");
        }
    }
}