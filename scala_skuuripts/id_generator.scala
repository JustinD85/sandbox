object Ids {
  def main(args: Array[String]) = {
    for(arg <- args)
      println(arg + " => Welcome")
    val a = new A
    println(a.currentId)
  }
}
