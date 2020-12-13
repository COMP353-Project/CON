<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "mysql", "con");
$id = $_GET['id'];

$query = 'SELECT first_name, last_name, email, address FROM Users WHERE id = ' .$id;

$result = @mysqli_query($conn, $query);
$row = $result->fetch_assoc();

if ($row) {
  echo json_encode($row);
  http_response_code(200);
} else {
  echo json_encode(array("message" => "Unable to fetch user"));
  http_response_code(400);
}