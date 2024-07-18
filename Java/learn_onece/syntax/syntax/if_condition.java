package syntax;
import java.util.Scanner; 
public class if_condition {

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// public static void main(String[] args) {
// int myAge = 25;
// int votingAge = 18;
// if (myAge >= votingAge) {
// System.out.println("Old enough to vote!");
// } else {
// System.out.println("Not old enough to vote.");
// }
// }

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// public static void main (String[] args){
//     int time = 22; // Using 24 format.
//     if (time < 10) {
//     System.out.println("Good morning.");
//     } 
//     else if (time < 18) {
//     System.out.println("Good day.");
//     } 
//     else {
//     System.out.println("Good evening.");
//     }
//     // Outputs "Good evening.
//     } 
// }

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// public static void main (String[] args){
//     int x = 1010, y = 170, z = 169; 
//     if(x > y) 
//     { 
//     if(x > z) 
//     //prints x, if the above two conditions are true 
//     System.out.println("The largest number is: "+x); 
//     else
//     //means x>y and x<z 
//     System.out.println("The largest number is: "+z); 
//     } 
//     else
//     { 
//     if(y > z) 
//     //means z>x and y>z 
//     System.out.println("The largest number is: "+y); 
//     else
//     //z>x and z>y 
//     System.out.println("The largest number is: "+z); 
//     } 
//     }
// }
    
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

public static void main (String[] args) {
    int num1, num2, num3; 
    System.out.println("Enter three integers: "); 
    @SuppressWarnings("resource")
    Scanner sc = new Scanner(System.in); 
    num1=sc.nextInt(); 
    num2=sc.nextInt(); 
    num3=sc.nextInt(); 
    if (num1 > num2 && num1 > num3) 
    System.out.println("The largest number is: "+num1); 
    else if (num2 > num1 && num2 > num3) 
    System.out.println("The largest number is: "+num2); 
    else if (num3 > num1 && num3 > num2) 
    System.out.println("The largest number is: "+num3); 
    else
    System.out.println("The numbers are same."); 
    }}
