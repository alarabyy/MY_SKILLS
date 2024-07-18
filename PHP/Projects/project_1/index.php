<?php
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//project
////////////////////
////// echo $_POST["username"];
////// echo "<br>";
////// echo $_POST["lang"];

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    if($_POST["lang"] == "ar") {
        header("Location: ar.php");

    }elseif($_POST["lang"] == "en") {
        header("Location: en.php");
    }elseif($_POST["lang"] == "sp") {
        header("Location: sp.php");
        exit();
}}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php</title>
</head>
<body>
    <form action="" method="POST">
        <input type="text" name="username">
        <select name="lang">
            <option value="ar">araby</option>
            <option value="en">english</option>
            <option value="sp">spanesh</option>
        </select>
        <input type="submit" value="GO">
    </form>
</body>
</html>