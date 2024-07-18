<?php

// **Length and Case:**

$string = "Hello, world!";

// Get the length of the string
$string_length = strlen($string);
echo "The string length is: $string_length \n";  // Output: The string length is: 13
echo"<br>";
echo "============================================================================================================================";
echo"<br>";

// Find the position of the first occurrence of "world" (case-sensitive)
$world_position = strpos($string, "world");
echo "The word 'world' starts at position: $world_position \n";  // Output: The word 'world' starts at position: 7
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Find the position of the first occurrence of "WORLD" (case-insensitive)
$world_position_insensitive = stripos($string, "WORLD");
echo "The word 'WORLD' (case-insensitive) starts at position: $world_position_insensitive \n";  // Output: The word 'WORLD' (case-insensitive) starts at position: 7
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Extract a substring from the 7th character to the end (including "world!")
$sub_string = substr($string, 7);
echo "Substring: $sub_string \n";  // Output: Substring: world!
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Convert the entire string to uppercase
$uppercase_string = strtoupper($string);
echo "Uppercase: $uppercase_string \n";  // Output: Uppercase: HELLO, WORLD!
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Convert the entire string to lowercase
$lowercase_string = strtolower($string);
echo "Lowercase: $lowercase_string \n";  // Output: Lowercase: hello, world!
echo"<br>";
echo "============================================================================================================================";
echo"<br>";

// **Modification:**

$greeting = "   Hello, World!    ";

// Remove whitespace from the beginning and end of the string
$trimmed_greeting = trim($greeting);
echo "Trimmed greeting: $trimmed_greeting \n";  // Output: Trimmed greeting: Hello, World!
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Remove whitespace only from the beginning of the string
$left_trimmed_greeting = ltrim($greeting);
echo "Left-trimmed greeting: $left_trimmed_greeting \n";  // Output: Left-trimmed greeting: Hello, World!    
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Remove whitespace only from the end of the string
$right_trimmed_greeting = rtrim($greeting);
echo "Right-trimmed greeting: $right_trimmed_greeting   \n";  // Output: Right-trimmed greeting: Hello, World!
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Replace all occurrences of "world" with "universe"
$replaced_string = str_replace("world", "universe", $string);
echo "Replaced string: $replaced_string \n";  // Output: Replaced string: Hello, universe!
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Repeat the string "Hello " three times
$repeated_string = str_repeat("Hello ", 3);
echo "Repeated string: $repeated_string \n";  // Output: Repeated string: Hello Hello Hello 

echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// **Search and Replace:**

$search_string = "hello world";

// Find the first occurrence of "world" and return everything from there to the end
$from_world = strstr($search_string, "world");
echo "From 'world' to the end: $from_world \n";  // Output: From 'world' to the end: world
echo"<br>";
echo "============================================================================================================================";
echo"<br>";

// **Other Manipulations:**

$first_name = "john";

// Capitalize the first letter
$capitalized_name = ucfirst($first_name);
echo "Capitalized name: $capitalized_name \n";  // Output: Capitalized name: John
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Convert the first letter to lowercase (useful after ucfirst)
$corrected_name = lcfirst($capitalized_name);
echo "Corrected name: $corrected_name \n";  // Output: Corrected name: john
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Capitalize the first letter of every word
$full_name = "john doe";
$titled_name = ucwords($full_name);
echo "Titled name: $titled_name \n";  // Output: Titled name: John Doe
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Reverse the order of characters
$reversed_string = strrev($string);
echo "Reversed string: $reversed_string \n";  // Output: Reversed string: !dlrow ,olleH
echo"<br>";
echo "============================================================================================================================";
echo"<br>";
// Split a string into an array using a comma (,) as delimiter
$data_string = "name,age,city";
$data_array = explode(",", $data_string);
echo "Data array: ";
print_r($data_array);  // Output: Data array: Array ( [0] => name [1] => age [2] => city )

echo"<br>";
echo "============================================================================================================================";
echo"<br>";

?>