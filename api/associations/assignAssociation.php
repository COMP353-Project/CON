<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");
$users_table = 'Users';
$cond_assoc_table = 'Condo_associations';
$members_table = 'Members';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $email = $_POST['email'];  
  $name = $_POST['name'];

  $get_user_id = "SELECT id FROM " . $users_table . " WHERE email = '$email' LIMIT 0, 1";
  $get_assoc_id = "SELECT id FROM " . $cond_assoc_table . " WHERE name = '$name' LIMIT 0, 1";

  $user_result = mysqli_query($conn, $get_user_id);
  $assoc_result = mysqli_query($conn, $get_assoc_id);

  $row_user = @mysqli_fetch_assoc($user_result);
  $row_assoc = @mysqli_fetch_assoc($assoc_result);
  

  if($row_user && $row_assoc) {
    $user_id = $row_user['id'];
    $assoc_id = $row_assoc['id'];

    $query="INSERT INTO " . $members_table . "(user_id, condo_assoc_id) VALUES('".$user_id."','".$assoc_id."')";
    $result = mysqli_query($conn, $query);

    if ($result) {
      http_response_code(200);
      echo json_encode(array("message" => "User was assigned to Condo Association successfully."));
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Unable to assign user to Condo Association."));
    }

  }
  else {
    http_response_code(400);
    echo json_encode(array("message" => "Make sure user and condo association exist!"));  
  }
}