<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, POST, GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_PUT = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$first_name = $_PUT['first_name'];
$last_name = $_PUT['last_name'];
$email = $_PUT['email'];
$address = $_PUT['address'];
$id = $_PUT['id'];

$query = "UPDATE Users SET first_name = '" . $first_name . "', last_name = '" . $last_name . "', email = '" . $email . "',
address = '" . $address . "' WHERE id = " . $id;

$result = @mysqli_query($conn, $query);

if ($result) {
  http_response_code(200);
  echo json_encode(array("message" => "User successfully updated"));
}