<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$contract_id = $_POST['contract_id'];
$poster = $_POST['poster'];
$statement = $_POST['statement'];

$query = "INSERT INTO Submissions (contract_id, poster, statement) VALUES ($contract_id, '$poster', '$statement')";

$result = mysqli_query($conn, $query);

if ($result) {
  echo json_encode(array("message" => "Successfully submitted"));
  http_response_code(200);
}