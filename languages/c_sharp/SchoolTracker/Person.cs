class Person
{
    static public int Count { get; set; }
    public string Name { get; set; }
    public string Birthday { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }

    public Person()
    {
        Count++;
    }
}
