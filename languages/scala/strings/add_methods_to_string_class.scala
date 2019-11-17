//In lieu of writing my own library of custom method I'd prefer to add
//more to an existing library 

implicit class StringImprovements(s: String) {
  def increment = s.map(c => c.+(1).toChar)
}

val result = "HAL".increment

println(result)

/*Can only be defined where methods are allowed to be defined..ie not top level
 *
 * Op1: use in an object in a package and import
 * Ex. package com.madfunctional.utils
 *
 * object StringUtil {
 *  implicit class StringImprovements(val s: String){
 *    def increment = s.map(c => c.+(1).toChar)
 *    }
 * }
 *
 * Then, import: 
 * import com.madfunctional.utils._
 * println("JOE".increment)
 *
 * Op2: Use in package object 
 * 
 * Ex. package com.madfunctional
 *
 * package object utils {
 *  def increment = s.map(c => c.+(1).toChar)
 *  }
 *
 * Then, import:
 * import com.madfunctional.utils._
 * println("JOE".increment)
 * ************************************
 * 
 *
 * Ok what in the blue Mary is going on here:
 * 
 * 1. The compiler notices you are invoking a method on a string
 * 2. The compiler cannot find said method on the String class 
 * 3. The compiler then search for an implicit class with a method that accepts a String arg 
 * 4. The compiler finds said class with a method that does and uses that definition
 * /
