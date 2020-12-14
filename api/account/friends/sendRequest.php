<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$users_table = 'Users';
$friend_req_table = 'Friend_requests';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $sender_id = $_POST['senderID'];
  $receiverEmail = $_POST['receiverEmail'];

  $get_user_id = "SELECT id FROM " . $users_table . " WHERE email = '$receiverEmail' LIMIT 0, 1";

  $user_result = mysqli_query($conn, $get_user_id);
  $row_user = @mysqli_fetch_assoc($user_result);
  

  if($row_user) {
    $receiver_id = $row_user['id'];

    $query = "INSERT INTO " . $friend_req_table . "(sender_id, receiver_id) VALUES('".$sender_id."','".$receiver_id."')";
    $result = mysqli_query($conn, $query);

    if ($result) {
      http_response_code(200);
      echo json_encode(array("message" => "Friend request sent successfully"));
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Unable to send friend request"));
        echo json_encode($query);
    }

  }
  else {
    http_response_code(400);
    echo json_encode(array("message" => "Receiver doesn't exist"));  
  }
}