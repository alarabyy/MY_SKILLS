<?php 

echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$email = "invalid_email@example";
$filtered_email = filter_var($email, FILTER_VALIDATE_EMAIL);

if ($filtered_email === false) {
    echo "Invalid email format. \n";
} else {
    echo "Valid email: $filtered_email \n";
}

echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$age = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT);

if ($age === false) {
    echo "'Age' must be a valid integer. \n";
} else {
    echo "Age: $age \n";
}


echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$user_data = filter_input_array(INPUT_POST, [
    'username' => FILTER_SANITIZE_STRING,
    'email' => FILTER_VALIDATE_EMAIL,
]);

if ($user_data['email'] === false) {
    echo "Invalid email format in POST data. \n";
} else {
    echo "Username: " . $user_data['username'] . ", Email: " . $user_data['email'] . " \n";
}


echo"<br>";
echo "============================================================================================================================";
echo"<br>";

$available_filters = filter_list();
print_r($available_filters); // Output: Array containing filter constants like FILTER_VALIDATE_INT, etc.


echo"<br>";
echo "============================================================================================================================";
echo"<br>";


echo"<br>";
echo "============================================================================================================================";
echo"<br>";

?>