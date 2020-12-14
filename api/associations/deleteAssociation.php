<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_DELETE = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");
$table_name = 'Condo_associations';

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
  $name = $_DELETE['name'];
  
  $query = "DELETE FROM  " . $table_name . " WHERE name = '$name'";
  mysqli_query($conn, $query);
  $successful = mysqli_affected_rows($conn);

  if ($successful) {
      http_response_code(200);
      echo json_encode(array("message" => "Condo Association was successfully deleted."));
  } else {
      http_response_code(400);
      echo json_encode(array("message" => "Unable to delete the Condo Association."));
  }
}