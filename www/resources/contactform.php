<?php

if(isset($_POST['email'])){

  $recipient = 'info@zonnemeting.nl';
  $subject = 'Contact Zonnemeting.nl';
  $template = file_get_contents('rd-mailform.tpl');

  function died($error){
    echo $error;
    die();
  }

  // check values
  if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['msg'])) {
        died('Het fomulier is niet volledig ingevuld');
    }

  // spam prevention
  if($_POST['nope'] != '') {
    died('nope');
  }

  $name = $_POST['name'];
  $email = $_POST['email'];
  $msg = $_POST['msg'];

  function clean($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
  }

  $email_msg .= "Naam: ".clean($name)."\n";
    $email_msg .= "E-mail: ".clean($email)."\n";
    $email_msg .= "Bericht: ".clean($msg)."\n";

  $headers = 'From: '.$email."\r\n".
  'Reply-To: '.$email."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($recipient, $subject, $email_msg, $headers);

?>

<script>
  window.location = '../index.html?feedback';
</script>

<?php
}
?>
