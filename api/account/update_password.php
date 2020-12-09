<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, POST, GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_PUT = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$id = $_PUT['id'];
$current_password = $_PUT['current_password'];
$new_password = $_PUT['new_password'];

$new_password_hash = password_hash($new_password, PASSWORD_DEFAULT);

$get_current_password_query = "SELECT * FROM Users WHERE id = '$id'";

// // echo $get_current_password_query;

$result = mysqli_query($conn, $get_current_password_query);
$row = $result->fetch_assoc();

if (password_verify($current_password, $row['password'])) {
  $query = "UPDATE Users SET password = '$new_password_hash' WHERE id = '$id'";

  $result = @mysqli_query($conn, $query);
  $successful = mysqli_affected_rows($conn);

  if ($successful > 0) {
    echo json_encode(array("message" => "Password updated"));
    http_response_code(200);
  } else {
    echo json_encode(array("message" => "error"));
    http_response_code(400);
  }
}