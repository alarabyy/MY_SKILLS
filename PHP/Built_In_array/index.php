<?php


$fruits = array("apple", "banana");
$colors = array("red", "green", "blue");
$merged_array = array_merge($fruits, $colors);

echo "Merged array: \n";
print_r($merged_array); // Output: ["apple", "banana", "red", "green", "blue"]

echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$names = array("Alice", "Bob", "Charlie");
$ages = array(25, 30, 28);
$people = array_combine($names, $ages);

echo "People associative array: \n";
print_r($people); // Output: ["Alice" => 25, "Bob" => 30, "Charlie" => 28]

echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$fruits = array("apple" => "red", "banana" => "yellow", "orange" => "orange");
$fruit_keys = array_keys($fruits);

echo "Fruit keys: \n";
print_r($fruit_keys); // Output: ["apple", "banana", "orange"]

echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$fruit_values = array_values($fruits);

echo "Fruit values: \n";
print_r($fruit_values); // Output: ["red", "yellow", "orange"]


echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$letters = array("a", "b", "a", "c", "b");
$letter_counts = array_count_values($letters);

echo "Letter counts: \n";
print_r($letter_counts); // Output: ["a" => 2, "b" => 2, "c" => 1]

$fruits = array("apple", "banana", "orange");
$has_mango = in_array("mango", $fruits); // $has_mango will be false (not strict)
$has_banana_strict = in_array("banana", $fruits, true); // $has_banana_strict will be true (strict)

echo "Does 'mango' exist? (false): $has_mango \n";
echo "Does 'banana' exist strictly? (true): $has_banana_strict \n";


echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$fruits = array("apple" => "red", "banana" => "yellow", "orange" => "orange");
$banana_key = array_search("banana", $fruits); // $banana_key will be 1
$orange_key_strict = array_search("orange", $fruits, true); // $orange_key_strict will be 2 (strict)

echo "Key of 'banana': $banana_key \n";
echo "Strict key of 'orange': $orange_key_strict \n";

echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$numbers = array(1, 2, 3, 4, 5, 6);
$sliced_numbers = array_slice($numbers, 2, 3); // Extract elements from index 2 (length 3)

echo "Sliced numbers: \n";
print_r($sliced_numbers); // Output: [3, 4, 5]


echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$numbers = array(1, 2, 3);
$squared_numbers = array_map(function($x) { return $x * $x; }, $numbers);

echo "Squared numbers: \n";
print_r($squared_numbers); // Output: [1, 4, 9]


echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$numbers = array(1, 2, 3, 4, 5);
$even_numbers = array_filter($numbers, function($x) { return $x % 2 == 0; }); // تصفية الأرقام الزوجية

echo "Even numbers: \n";
print_r($even_numbers); // Output: [2, 4]







?>
