<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "", "con");

$id = $_GET['id'];

$query = "SELECT id, name, description, budget, created_at FROM Contracts WHERE condo_assoc_id = $id ORDER BY created_at DESC";

$result = mysqli_query($conn, $query);

if ($result) {
  if ($result->num_rows > 0) {
    $contracts = array();
    while ($row = $result->fetch_assoc()) {
      array_push($contracts, $row);
    }
    echo json_encode($contracts);
    http_response_code(200);
  } else {
    http_response_code(200);
    echo json_encode(array("message" => "No contracts"));
  }
} else {
  http_response_code(400);
  echo json_encode(array("message" => "Error Occured"));
}