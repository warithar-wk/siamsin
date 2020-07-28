<?php
    $to = 'info@siamsincon.com';
    $firstname = $_POST["fname"];
    $subject = $_POST["subject"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $phone= $_POST["tel"];
    $time = date("d-m-Y");


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: info@siamsincon.com\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$message ='
<div class="coupon" style="border: 5px dotted #0d85e7; width: 80%; border-radius: 15px; margin: 0 auto; max-width: 600px;">
  <div class="container" style="padding: 2px 16px; background-color: #f9f9ff;">
    <h3>Siamsin Constraction Contact</h3>
  </div>
  <div class="container" style="padding: 2px 16px; background-color: white;">
    <h2><b>Subject: </b>'.$subject.'</h2>
    <h3><b>Name : </b>'.$firstname.'</h3>
    <h3><b>E-mail : </b>'.$email.'</h3>
    <h3><b>Tel : </b>'.$phone.'</h3>
    <span>Message: '.$text.'</span>
  </div>
  <div class="container" style="padding: 2px 16px; background-color: #f9f9ff;">
    <p class="expire" style="color: red;">Time contact : '.$time.'</p>
  </div>
</div>';

    if (@mail($to, 'Customer register', $message, $headers)) {
        echo 'The message has been sent.';
    } else {
        echo 'failed';
    }