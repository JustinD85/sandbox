
namespace SchoolMembers
{
    class Student : Person
    {
        public int Grade { get; set; }
        public School School { get; set; }
        public Teacher Teacher { get; set; }

    }
    enum School
    {
        MIT,
        Harvard,
        Hogwarts,
        Franklin
    }
}