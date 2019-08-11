
namespace SchoolMembers
{
    class Student : Person
    {
        public int Grade;
        public School School;

    }
    enum School
    {
        MIT = 0,
        Harvard = 1,
        Hogwarts = 2,
        Franklin
    }
}