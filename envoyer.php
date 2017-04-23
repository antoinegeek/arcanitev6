<?php

// Get values from the form
$name=$_POST['name'];
$city=$_POST['city'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$monmessage=$_POST['monmessage'];
 
$to = "legeekantoine71@gmail.com";
$subject = "Mon Contact Form";
$message = " Name: " . $name . "\r\n City: " . $city . "\r\n Phone: " . $phone . "\r\n Email: " . $email . "\r\n Monmessage: " . $monmessage;
 
 
$from = "Arcanite Gaming";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
 
if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='contact.html';</script>";
  // Created by Future Tutorials
}else{
  echo "Erreur! Veuillez Remplir les Champs Requis.";
}


?>
