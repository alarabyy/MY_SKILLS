package syntax;

import java.util.Scanner;
public class scanner {
public static void main(String[] args) {
int votingAge = 20;
System.out.print("Please enter your age: ");
@SuppressWarnings("resource")
Scanner scReadAge = new Scanner(System.in); // Create a Scanner object
int personAge= scReadAge.nextInt(); // Read user input
System.out.println(personAge >= votingAge);
}

}


// user input scanner 

// nextBoolean() Reads a boolean value from the user
// nextByte() Reads a byte value from the user
// nextDouble() Reads a double value from the user
// nextFloat() Reads a float value from the user
// nextInt() Reads a int value from the user
// nextLine() Reads a String value from the user
// nextLong() Reads a long value from the user
// nextShort() Reads a short value from the user
