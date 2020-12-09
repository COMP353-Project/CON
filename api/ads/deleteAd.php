<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_DELETE = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "mysql", "con");

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

$condo_assoc_post_id = $_DELETE['condo_assoc_post_id'];
$user_id = $_DELETE['user_id'];

  $query = "DELETE FROM Condo_association_ads CA, Posts P
  WHERE CA.condo_assoc_post_id = '$condo_assoc_post_id' and CA.condo_assoc_post_id = P.id and P.user_id = '$user_id'";
  mysqli_query($conn, $query);
  $successful = mysqli_affected_rows($conn);

  if ($successful) {
    http_response_code(200);
    echo json_encode(array("message" => "Ad was successfully deleted."));
  } else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to delete the ad."));
  }
}
