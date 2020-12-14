<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, POST, GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_PUT = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$title = $_PUT['title'];
$is_public = $_PUT['is_public'];
$content = $_PUT['content'];
$id = $_PUT['id'];

$query = "UPDATE Condo_association_discussions SET title = '$title', is_public = $is_public, content = '$content'
WHERE condo_assoc_post_id = $id";

$result = mysqli_query($conn, $query);

if ($result) {
  http_response_code(200);
  echo json_encode(array("message" => "Success"));
} else {
  echo json_encode(array("message" => "Error"));
}