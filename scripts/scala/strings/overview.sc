import sys.process._
import scala.language.postfixOps

"clear" !

println("Scala strings are Java strings") 
Thread.sleep(1000)

println(s"""
    | val s = "Hello, world"
    | s length is ${"Hello, world".length}
    | val ss = "Hello, " + "world"
    | ss length is ${("Hello, " + "world").length}
    """)

//Add interaction here(prev,next,quit,restart)

Thread.sleep(1000)

println("""
    | Strings inherit from StringOps, so a wealth of functionality is builtin such as:
    |
    | "hello".foreach(println)
    | //h 
    | //e
    | //l 
    | //l 
    | //o
    """)

println("""
    |I can treat strings like sequences of chars
    |for (c <- "Justin") println(c)
    """)
for (c <- "Justin") println(s"\t|${c}")

println("""
    |To show methods of an object:
    |"foo".[Tab]
    |This will display, in a REPL(sbt,scala,etc) methods that can be invoked)
    |Hitting tab a second will display even MORE completions!
    """)

println("""
    |To show methods of StringOps for example:
    |val s = new scala.collection.immutable.StringOps("s")
    |s.[Tab]
    |Viola(sp?)
    """)
println(s"""
    |Cool example of a StringOps method:
    | "NOSQL".drop(2)
    | ${"NOSQL".drop(2)} //It drops the head twice
    """)
println("""
    ||To align text use ".stripMargin([<delimiter>])")
  ||This line was no aligned and now is, thanks stripMargin!
  """.stripMargin)
