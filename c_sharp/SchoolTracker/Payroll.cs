using System.Collections.Generic;

namespace SchoolMembers
{
    interface IPayee
    {
        void Pay();
    }
    class Payroll
    {
        private List<IPayee> payees = new List<IPayee>();
        public Payroll()
        {
            payees.Add(new Teacher());
            payees.Add(new Teacher());
            payees.Add(new Teacher());
            payees.Add(new Teacher());
            payees.Add(new Principle());

        }
        public void PayAll()
        {
            foreach (var payee in payees)
            {
                payee.Pay();
            }
        }

    }
}