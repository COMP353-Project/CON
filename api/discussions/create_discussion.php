<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$title = $_POST['title'];
$is_public = $_POST['is_public'];
$content = $_POST['content'];
$id = $_POST['id'];

$fetch_condo_association_id_query = "SELECT condo_assoc_id AS id FROM Members WHERE user_id = $id LIMIT 1";
$condo_association_id_result = mysqli_query($conn, $fetch_condo_association_id_query);
if ($condo_association_id_result) {
  $condo_association_id_row = $condo_association_id_result->fetch_assoc();
  $condo_association_id = $condo_association_id_row['id'];

  $insert_post_query = "INSERT INTO Posts (user_id) VALUES ($id)";
  $post_result = mysqli_query($conn, $insert_post_query);

  $fetch_last_id_query = "SELECT LAST_INSERT_ID() AS id";
  $post_id_result = mysqli_query($conn, $fetch_last_id_query);
  $post_id = $post_id_result->fetch_assoc()['id'];

  $insert_ca_post_query = "INSERT INTO Condo_association_posts (post_id, condo_assoc_id) VALUES ($post_id, $condo_association_id)";
  $condo_association_post_result = mysqli_query($conn, $insert_ca_post_query);

  $ca_post_id_result = mysqli_query($conn, $fetch_last_id_query);
  if ($ca_post_id_result) {
    $ca_post_id = $ca_post_id_result->fetch_assoc()['id'];

    $insert_discussion_query = "INSERT INTO Condo_association_discussions (condo_assoc_post_id, title, content, is_public) VALUES ($post_id, '$title', '$content', $is_public)";
    $discussion_result = mysqli_query($conn, $insert_discussion_query);
  
    if ($discussion_result) {
      http_response_code(200);
      echo json_encode(array("message" => "Success"));
    } else {
      http_response_code(400);
      echo json_encode(array("message" => "Failure"));
    }
  } else {
    echo "Could not post discussion";
  }
} else {
  echo "Could not post discussion";
}