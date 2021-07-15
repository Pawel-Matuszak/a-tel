
<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  //data from request
  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);

  if (empty($_POST['email']) || empty($_POST['topic']) || empty($_POST['content'])) die();

  //if request is correct send mail
  if($_POST){
    http_response_code(200);

    //mail credentials
    $to = "pawelxmatuszak@gmail.com";
    $from = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['topic']);
    $content = htmlspecialchars($_POST['content']);

    $msg = "
      <div><b>Nadawca:</b> $from</div>
      <div><b>Temat:</b> $subject</div>
      <div><b>Treść:</b> $content</div>
    ";

    $headers  = "From: Formularz kontaktowy - A-Tel Andrzej Borzek <$from>\n";
    $headers .= "Cc:  Wiadomość od: <$from>\n"; 
    $headers .= "X-Sender: Wiadomość od: <$from>\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= "X-Priority: 0\n";
    $headers .= "Return-Path: $to\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=iso-8859-1\n";

    //Send mail and return status
    $mailStatus = mail($to, $subject, $msg, $headers, "-f $from");
    echo json_encode(["status" => $mailStatus]);

  }else{
    //on error return status
    echo json_encode(["status" => false]);
  }

?>