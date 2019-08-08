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

Thread.sleep(1000)
println("""
    |I can treat strings like sequences of chars
    |for (c <- "Justin") println(c)
    """)
for (c <- "Justin") println(s"\t|${c}")

Thread.sleep(1000)
println("""
    |To show methods of an object:
    |"foo".[Tab]
    |This will display, in a REPL(sbt,scala,etc) methods that can be invoked)
    |Hitting tab a second will display even MORE completions!
    """)

Thread.sleep(1000)
println("""
    |To show methods of StringOps for example:
    |val s = new scala.collection.immutable.StringOps("s")
    |s.[Tab]
    |Viola(sp?)
    """)

Thread.sleep(1000)
println(s"""
    |Cool example of a StringOps method:
    | "NOSQL".drop(2)
    | ${"NOSQL".drop(2)} //It drops the head twice
    """)

Thread.sleep(1000)
println("""
    ||To align text use ".stripMargin([<delimiter>])")
  ||This line was no aligned and now is, thanks stripMargin!
  """.stripMargin)

Thread.sleep(1000)
println("""
    |String interpolation can be done with a processed string literal.
    |The syntax is s"some text" 
    |To evaluate a variable: s"some $var"
    |To evaluate property of an object s"some ${obj.var}" 
    | 's' IS a method
    """)

Thread.sleep(1200)
println("""
   |There is a 'f' string formatter as well
   |The syntax is f"some text"
   |To format f"some $weight%.2f"
   |//some 200.00
   """)

Thread.sleep(1100)
def toUp(c: Char): Char = c.toByte.-(32).toChar 
  println(s"""
    |Processing a string:
    |Given: def toUp: Char = (c: Char) => c.toByte.-(32).toChar 
    |Produces a uppercase character given an lowercase character.
    |Ex "hello".map(toUp) //${"hello".map(toUp)} 
    """)

Thread.sleep(1300)
println(s"""
    |Using regex:
    |Create a pattern with '.r'
    |val birthdayPattern = "13".r
    |val birthday = "August 13, 1985"
    |val capture = birthdayPattern.findFirstIn(birthday)
    |produces: ${ "13".r.findFirstIn("August 13 1985").getOrElse("not found")}
    """)
