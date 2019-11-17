
   package parts{
        class Part {
        def start(): Unit = println("Generic Part started without listener")
    }

    trait Engine extends Part {
        override def start(): Unit = println("Engine has started!")
         def listener(): Unit = println("Engine is Listening!")
    }

    object Part {
        def listener():Unit = println("Generic Part is Listening!")
    }
   }