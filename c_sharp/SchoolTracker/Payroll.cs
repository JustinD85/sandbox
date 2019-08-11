
using System.Collections.Generic;
using SchoolMembers;

namespace Banking
{
    interface IPayee
    {
        void Pay();
    }
    class Payroll
    {
        private List<IPayee> payees = new List<IPayee>();
        private ChaseBank chaseBank = new ChaseBank();
        public static event System.Action Post;

        public Payroll()
        {
            payees.Add(new Teacher());
            payees.Add(new Teacher());
            payees.Add(new Teacher());
            payees.Add(new Teacher());
            payees.Add(new Principle());
            chaseBank.Listen();
        }
        public void PayAll()
        {
            foreach (var payee in payees)
            {
                payee.Pay();
                Post();
            }
        }

    }
}