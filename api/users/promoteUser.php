<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_PUT = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");
$table_name = 'Users';

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
  $email = $_PUT['email'];

  $query = "UPDATE " . $table_name . " SET is_admin = 1 WHERE email = '$email'";
  mysqli_query($conn, $query);
  $successful = mysqli_affected_rows($conn);

  if ($successful) {
      http_response_code(200);
      echo json_encode(array("message" => "User was successfully promoted."));
  } else {
      http_response_code(400);
      echo json_encode(array("message" => "Unable to promote the user."));
  }
}