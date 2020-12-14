<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "", "con");
$id = $_GET['id'];

$fetch_condo_association_id_query = "SELECT condo_assoc_id AS id FROM Members WHERE user_id = $id LIMIT 1";
$condo_association_id_result = mysqli_query($conn, $fetch_condo_association_id_query);

if ($condo_association_id_result) {
  $condo_association_id = $condo_association_id_result->fetch_assoc()['id'];
  $query = "SELECT p.id AS id, p.created_at AS date, title, content AS description, CONCAT(first_name, ' ', last_name) AS author FROM Condo_association_discussions
  INNER JOIN Condo_association_posts ON condo_assoc_post_id = post_id AND condo_assoc_id = $condo_association_id
  INNER JOIN Posts p ON p.id = post_id
  INNER JOIN Users u ON p.user_id = u.id";

  $result = mysqli_query($conn, $query);
  if ($result->num_rows > 0) {
    $array = array();
    while($row = $result->fetch_assoc()) {
      array_push($array, $row);
    }
    echo json_encode($array);
    http_response_code(200);
  }
  else {
    http_response_code(200);
    echo json_encode(array("message" => "No discussions"));
  }
} else {
  echo "Could not get discussions";
}