<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_DELETE = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$conversation_id = $_DELETE['conversation_id'];
$user_id = $_DELETE['user_id'];

echo $conversation_id;
echo $user_id;

$query = 'DELETE FROM part_of WHERE conversation_id = ' . $conversation_id . ' AND user_id = ' . $user_id . ';';

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
  $result = @mysqli_query($conn, $query);

  if ($result) {
    echo json_encode(array("message" => "successfully left conversation"));
    http_response_code(200);
  } else {
    echo json_encode(array("message" => "Unable to leave conversation."));
    http_response_code(400);
  }
}