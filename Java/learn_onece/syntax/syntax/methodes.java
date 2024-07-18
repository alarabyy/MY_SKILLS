package syntax;

public class methodes {
    
//     public static void main (String[] args) 
// {
// myMethod("Ali", 5);
// myMethod("Sara", 8);
// myMethod("Mohammed", 31);
// }
// static void myMethod(String fname, int age) {
// System.out.println(fname + " is " + age);
// }


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
public static void main (String[] args) 
{
checkAge(20); // Call the checkAge method and pass along an age of 20
}
// Create a checkAge() method with an integer variable called age
static void checkAge(int age) {
// If age is less than 18, print "access denied"
if (age < 18) {
System.out.println("Access denied - You are not old enough!");
// If age is greater than, or equal to, 18, print "access granted"
} else {
System.out.println("Access granted - You are old enough!");
}
}

}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// Method Overloading Types 
// void myMethod()
// int myMethod(int x)
// float myMethod(float x)
// double myMethod(int x, double y)
// double myMethod(double x, double y)




