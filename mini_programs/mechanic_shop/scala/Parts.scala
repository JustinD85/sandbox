

class Parts {
    // def start(): Unit = println("Generic Part")

}

trait Engine {
    def start(): Unit = println("Engine has started!")
    def listener(): Unit = println("Engine is Listening!")
}

object Parts {
    def listener():Unit = println("Listening!")
}