<?php
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//////project_2
$name ="alaraby";
$student= true;
$orphen=true;
$country ="egypt";
$discount_country=50;
$price =100;
$student_discount=15;
$orphen_discount=20;

if ($country =="egypt") {
    if ($student == true) {
       if ($orphen=true){
        echo"hello: $name";
        echo "<br>";
        echo"price:" .$price - $discount_country - $student_discount -$orphen_discount;
       }else{
        echo"hello: $name";
        echo "<br>";
        echo"price:" .$price - $discount_country - $student_discount;
       }
    }else{
        echo"hello: $name";
        echo "<br>";
        echo"price:" .$price - $discount_country ;
    }
}else{
    echo"hello: $name";
    echo "<br>";
    echo"price: $price";

}

?>