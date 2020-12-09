<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$conversation_id = $_POST['conversation_id'];
$user_id = $_POST['user_id'];
$content = $_POST['content'];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $query = "INSERT INTO Messages (content, conversation_id, user_id)
  VALUES ('" . $content . "', " . $conversation_id . ", " . $user_id . ");";

  $result = @mysqli_query($conn, $query);

  if ($result) {
      http_response_code(200);
  } else {
      http_response_code(400);
      echo json_encode(array("message" => "Unable to send message."));
  }
}
