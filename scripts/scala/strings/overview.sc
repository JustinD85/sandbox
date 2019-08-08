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

