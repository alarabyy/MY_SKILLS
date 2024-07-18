<?php

// **Basic Math Functions**

// Get the absolute value of a negative number (-10 becomes 10)
$negative = -10;
$positive_abs = abs($negative);
echo "Absolute value of -$negative: $positive_abs \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Round a decimal number up to the nearest integer (3.14 becomes 4)
$decimal = 3.14;
$rounded_up = ceil($decimal);
echo "Rounded up $decimal: $rounded_up \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Round a decimal number down to the nearest integer (3.14 becomes 3)
$rounded_down = floor($decimal);
echo "Rounded down $decimal: $rounded_down \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Round a number with decimals (23.4567 rounded to two decimal places becomes 23.46)
$money_value = 23.4567;
$rounded_money = round($money_value, 2);
echo "Rounded money value: $rounded_money \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Raise a number (2) to a power (3) (2 raised to the power of 3 becomes 8)
$squared = pow(2, 3);
echo "2 raised to the power of 3: $squared \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Calculate the square root of a number (16 becomes 4)
$root_of_16 = sqrt(16);
echo "Square root of 16: $root_of_16 \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// **Random Number Functions**

// Generate a random integer between a specified minimum and maximum (1 to 100)
$random_number = rand(1, 100);
echo "Random number between 1 and 100 (rand): $random_number \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Generate a more secure random integer using the Mersenne Twister algorithm (1 to 100)
$secure_random = mt_rand(1, 100);
echo "Secure random number between 1 and 100 (mt_rand): $secure_random \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// **Number Formatting Function**

// Format a number with commas and two decimal places (12345.678 becomes "12,345.68")
$price = 12345.678;
$formatted_price = number_format($price, 2, ".", ",");
echo "Formatted price: $formatted_price \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// **Number Type Checking Functions**

// Check if a variable is an integer (10 is an integer)
$value = 10;
$is_integer = is_int($value);
echo "Is $value an integer? $is_integer \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Check if a variable is a float (3.14 is a float)
$value = 3.14;
$is_float = is_float($value);
echo "Is $value a float? $is_float \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Check if a variable is numeric (including numeric strings, "123" is considered numeric)
$value = "123";
$is_numeric_string = is_numeric($value);
echo "Is '123' numeric? $is_numeric_string \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// **Other Number Functions**

// Find the minimum value among a list of numbers (2 is the minimum)
$min_value = min(5, 10, 2);
echo "Minimum value among 5, 10, and 2: $min_value \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Find the maximum value among a list of numbers (10 is the maximum)
$max_value = max(5, 10, 2);
echo "Maximum value among 5, 10, and 2: $max_value \n";
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Get the mathematical constant pi (approximately 3.14159)
$circle_constant = pi();
echo "Pi value: $circle_constant \n";

?>
