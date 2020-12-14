<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");
$table_name = 'Condo_associations';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name']; 
  $query = "INSERT INTO " . $table_name . "(name) VALUES('".$name."')";

  $result = @mysqli_query($conn, $query);

  if ($result) {
      http_response_code(200);
      echo json_encode(array("message" => "Condo Association was successfully registered."));
  } else {
      http_response_code(400);
      echo json_encode(array("message" => "Unable to register the Condo Association."));
  }
}