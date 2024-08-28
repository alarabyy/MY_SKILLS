

<?php
echo "cookies:";
$myname2 = $_COOKIE["name_cookies"];

echo "hello :".$myname2;
echo "<br>==================================<br>";

?>


<?php
echo "_SESSION:";
$x = $_SESSION["name"];
$y = $_SESSION["age"];

echo "your name:".$x."  ....your age :".$y."";
?>