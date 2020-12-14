<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$name = $_POST['name'];
$description = $_POST['description'];
$budget = $_POST['budget'];
$id = $_POST['id'];

$fetch_condo_association_id_query = "SELECT condo_assoc_id AS id FROM Members WHERE user_id = $id";
$condo_association_id_result = mysqli_query($conn, $fetch_condo_association_id_query);

if ($condo_association_id_result) {
  $condo_association_id_row = $condo_association_id_result->fetch_assoc();
  $condo_association_id = $condo_association_id_row['id'];

  $query = "INSERT INTO Contracts (condo_assoc_id, name, description, budget) VALUES ($condo_association_id, '$name', '$description', $budget)";

  $result = mysqli_query($conn, $query);
  
  if ($result) {
    http_response_code(200);
    echo json_encode(array("message" => "Contract added"));
  } else {
    http_response_code(400);
    echo json_encode(array("message" => "An error occured"));
  }
}