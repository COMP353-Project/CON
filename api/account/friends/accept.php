<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_PUT = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");
$table_name = 'Friend_requests';

if ($_SERVER['REQUEST_METHOD'] == 'PUT') { 
  $sender_id = $_PUT['sender_id'];
  $receiver_id = $_PUT['receiver_id'];

  $query = "UPDATE " . $table_name . " SET accepted = 1 WHERE sender_id = '$sender_id' and receiver_id = '$receiver_id'";
  mysqli_query($conn, $query);
  $successful = mysqli_affected_rows($conn);

  if ($successful) {
      http_response_code(200);
      echo json_encode(array("message" => "Request was accepted"));
  } else {
      http_response_code(400);
      echo json_encode(array("message" => "Unable accept the request"));
  }
}