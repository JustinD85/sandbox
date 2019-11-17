using static Util.Console;

namespace Banking
{
    class ChaseBank
    {
        public void Listen()
        {
            Payroll.Post += AdjustLedger;
        }

        private void AdjustLedger()
        {
            Log("Your account has been debited... ");
        }
    }
}