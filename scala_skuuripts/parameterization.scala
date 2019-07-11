/* Parameterization: means configuring an instance when creating it.
 */

// Configuring(Parameterizing) an object with a value
val big = new java.math.BigInteger("123")

// new is used the same as in Java(whew nothing new :) )

//Parameterzing an Array to contain type String and parameterizing it's length to 3
val greetings = new Array[String](3)
//more explicitly: val greetings: Array[String] = new Array[String](3)
// SUPER IMPORTANTE
// the declaration port of a definition shows only it's type parameterization, NOT it's value
// that is, Array[String] NOT Array[String](3), the `3` is part of the value parameterization
// which is done on the right side(expression side)

greetings(0) = "Hi"
greetings(1) = "Konnichiwa"
greetings(2) = "Sawadee khrap"

for(greeting <- greetings) println(greeting)

//alts:
// for(i <- 0 to 2) println(greetings(i))
// for i <- greetings.length) println(greetings(i))

// something cool
/* 0 to 2, is a method call  of `+` on `0` with `2` as the arguement
 termed another way. 1 is the receiver of the `+` method call with `2` as the arguement.
 This is important because as long as a function has one arguement and a recevier is specified
 I can write methods like (0 to 2) instead of 0.to(2). Also, Console println "This is cool" instead
 of println("This is cool"). Neat to know indeed.
 */ 

