<?php

if(isset($_COOKIE["background"])){
    echo "<style>body{ background-color : ".$_COOKIE["background"] ." }</style>";
}
if($_SERVER["REQUEST_METHOD"] == "POST"){
    setcookie("background",$_POST["bg_color"] ,strtotime("+1 year"));
    header("Location:" .$_SERVER["REQUEST_URI"]);

}

?>

<form action="" method="post">
    <input type="color" name="bg_color">
    <input type="submit" value="submit">
</form>