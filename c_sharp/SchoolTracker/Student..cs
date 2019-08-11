
namespace SchoolMembers
{
    class Student : Person
    {
        public int Grade;
        public School School;
        public Teacher Teacher;

    }
    enum School
    {
        MIT,
        Harvard,
        Hogwarts,
        Franklin
    }
}