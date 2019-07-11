def printArguments(arguments: Array[String]): Unit = {
  if(arguments.nonEmpty){
    println(arguments(0))
    printArguments(arguments.tail)
  }
}

printArguments(args)

// An idiomatic way to do this explicitly would be:
// args.foreach(arg => println(arg))
// alt: args.foreach( (arg: String) => println(arg))
// I am being as verbose as possible while learning

// yet another way: being concise
// args.foreach(println)
// In the above, since the function literal ( arg => statement ) took only one arguement and
// excecuted one statement I can write it with just the statement (println) instead


