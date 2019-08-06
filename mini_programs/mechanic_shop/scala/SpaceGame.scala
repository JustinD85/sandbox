// must supply name of standalone singleton object
// must have main method in object
    //main method takes one parameter Array[String]: Unit
//ORRR use the scala.App trait (which I will now do :) )))
// compile files which will produce bytecode
    //scalac will take a while as it looks at jar files and stuff
    //fsc will startup a local server daemon
        //advantage you don't have to wait as long
        //shutdown daemon with fsc -shutdown

import parts._

object SpaceGame extends App {
    Part.listener //equivalent to a Java static method of a class

    val partWithEngine = new Part with Engine
    partWithEngine.start
    partWithEngine.listener 

println("\n*****Part without Engine*****\n")

    val partWithoutEngine = new Part
    partWithoutEngine.start 
    // partWithoutEngine.listener  //***Doesn't have access to the companion method***

}
