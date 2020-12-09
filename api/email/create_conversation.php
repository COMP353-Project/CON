<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$subject = $_POST['subject'];
$recipients = $_POST['recipients'];
$user_id = $_POST['user_id'];
$content = $_POST['content'];

$insertRecipients = '';

foreach($recipients as $recipient) {
  $insertRecipients = $insertRecipients . ", (@conversation_id, (SELECT id FROM Users WHERE email = '" . $recipient . "'))";
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $query = "INSERT INTO Conversations (subject) VALUES ('" . $subject . "');
  SET @conversation_id = LAST_INSERT_ID();
  INSERT INTO part_of (conversation_id, user_id) VALUES (@conversation_id, " . $user_id . ")" . $insertRecipients . ";
  INSERT INTO Messages (content, conversation_id, user_id) VALUES ('" . $content . "', @conversation_id, " . $user_id . ");";
  
  $result = mysqli_multi_query($conn, $query);
  
  if ($result) {
    http_response_code(200);
    echo json_encode(array("message" => "Conversation successfully created"));
  } else {
    http_response_code(400);
    echo json_encode(array("message" => "Couldnt create conversation"));
  }
}

// TODO: RETURN THE ID OF THE CONVERSATION