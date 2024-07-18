package tasks.tast_three;
import java.util.Scanner;

public class index3 {

public class MultipurposeFunctions {

  public static String getGpaMeaning(char gpa) {
    switch (gpa) {
      case 'A':
        return "Excellent";
      case 'B':
        return "Very Good";
      case 'C':
        return "Good";
      case 'D':
        return "Passed";
      default:
        return "Invalid GPA";
    }
  }

  public static int sum(int a, int b, int c) {
    return a + b + c;
  }

  public static double sum(double a, double b, double c) {
    return a + b + c;
  }

  public static void compareNumbers(int a, int b, int c) {
    int largest = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
    System.out.println("Largest number: " + largest);
  }

  public static void printFruits(String[] fruits) {
    for (String fruit : fruits) {
      System.out.println(fruit);
    }
  }

  public static int factorial(int n) {
    if (n == 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // Q9: GPA Meaning
    System.out.print("Enter a GPA letter (A, B, C, D): ");
    char gpa = scanner.next().charAt(0);
    System.out.println("Meaning of GPA " + gpa + ": " + getGpaMeaning(gpa));

    // Q10: Sum of Three Numbers (Integer and Double)
    System.out.print("\nEnter three integers (separated by spaces): ");
    int int1 = scanner.nextInt();
    int int2 = scanner.nextInt();
    int int3 = scanner.nextInt();
    System.out.println("Sum of integers: " + sum(int1, int2, int3));

    System.out.print("\nEnter three floating-point numbers (separated by spaces): ");
    double double1 = scanner.nextDouble();
    double double2 = scanner.nextDouble();
    double double3 = scanner.nextDouble();
    System.out.println("Sum of floating-point numbers: " + sum(double1, double2, double3));

    // Q11: Compare Three Numbers
    System.out.print("\nEnter three numbers (separated by spaces): ");
    int num1 = scanner.nextInt();
    int num2 = scanner.nextInt();
    int num3 = scanner.nextInt();
    compareNumbers(num1, num2, num3);

    // Q12: Print Fruits
    String[] fruits = {"Banana", "Mango", "Apple", "Strawberry"};
    System.out.println("\nFruits:");
    printFruits(fruits);

    // Q13: Factorial Calculation
    System.out.print("\nEnter a number: ");
    int number = scanner.nextInt();
    int result = factorial(number);
    System.out.println("Factorial of " + number + ": " + result);
  }
}

}
