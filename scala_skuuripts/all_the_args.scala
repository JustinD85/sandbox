def printArguments(arguments: Array[String]): Unit = {
  if(arguments.length != 0){
    println(arguments(0))
    printArguments(arguments.tail)
  }
}

printArguments(args)
