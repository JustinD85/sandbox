//objects companion class
class A {
  private var id: Int = 0
  def currentId(): Int = id
  def changeId(): Unit = {
    A.incrementId 
    id = A.nextId
  }
}

// A singleton, class companion object
object A {
  private var uniqueId: Int = 0
  private def incrementId(): Unit = uniqueId += 1 //A procedure

  def nextId(): Int = uniqueId //A function/method
}

 val a = new A
 val b = new A

println("a: " + a.currentId())
a.changeId()
println("a: " + a.currentId())

 println("b: " + b.currentId())
 b.changeId()
 println("b: " + b.currentId())
