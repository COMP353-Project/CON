<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_DELETE = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$id = $_DELETE['id'];

$query = "DELETE FROM Posts WHERE id = $id";

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
  $result = mysqli_query($conn, $query);

  if ($result) {
    http_response_code(200);
    echo json_encode(array("message" => "Successfully deleted"));
  } else {
    http_response_code(400);
    echo json_encode(array("message" => "Error"));
  }
}