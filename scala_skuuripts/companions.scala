//objects companion class
class A {
  private var id: Int = 0
  def currentId(): Int = id
  def changeId(): Unit = {
    id = A.incrementId
  }
}

// A singleton, class companion object
object A {
  private var uniqueId: Int = 0
  private def incrementId(): Int = {
    uniqueId += 1
    uniqueId
  }
  def nextId(): Int = uniqueId
}

// val a = new A
// val b = new A
// println("a: " + a.currentId())
// a.changeId()
// println("a: " + a.currentId())

// println("b: " + b.currentId())
// b.changeId()
// println("b: " + b.currentId())
