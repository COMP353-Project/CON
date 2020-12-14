<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "", "con");

$id = $_GET['id'];

$query = "SELECT id, name, description, budget, created_at FROM Contracts WHERE id = $id";
$result = mysqli_query($conn, $query);

if ($result) {
  $response = array();

  $row = $result->fetch_assoc();
  $response['contract'] = $row;

  $submissions_query = "SELECT * FROM Submissions WHERE contract_id = $id";
  $submissions_result = mysqli_query($conn, $submissions_query);

  if ($submissions_result) {
    if ($submissions_result->num_rows > 0) {
      $submissions = array();
      while ($submission = $submissions_result->fetch_assoc()) {
        array_push($submissions, $submission);
      }

      $response['submissions'] = $submissions;
      http_response_code(200);
      echo json_encode($response);
    } else {
      http_response_code(200);
      echo json_encode($response);
    }
  } else {
    http_response_code(400);
    echo json_encode(array("message" => "Error occured"));
  }
} else {
  http_response_code(400);
  echo json_encode(array("message" => "Error occured"));
}