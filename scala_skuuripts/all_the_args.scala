def printArguments(arguments: Array[String]): Unit = {
  if(arguments.nonEmpty){
    println(arguments(0))
    printArguments(arguments.tail)
  }
}

printArguments(args)
