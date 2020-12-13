<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
$rest_json = file_get_contents("php://input");
$user_id = $_POST['user_id'];
$group_id = $_POST['group_id'];
$description = $_POST['description'];
$title = $_POST['title'];

// $user_id = 5;
// $group_id = 1;
// $description = "db description";
// $title ="db title";
 
$conn = mysqli_connect("localhost", "root", "zhawa", "con");

$post_query = "INSERT into posts(user_id) VALUES('$user_id');";

$result = mysqli_query($conn, $post_query);
$last_post_id = mysqli_insert_id($conn);
echo json_encode($result);
if ($result) {
  $group_post_query =  "INSERT into group_posts(group_id, post_id) VALUES('$group_id', '$last_post_id')";

  $result1 = mysqli_query($conn, $group_post_query);

  $group_content_query = "INSERT into group_content_post(group_post_id, title, description) VALUES('$last_post_id', '$title', '$description')";

  $result2 =  mysqli_query($conn, $group_content_query);

  if ($result1 && $result2) {
    http_response_code(200);
    echo json_encode($result);
  } 
  else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to post1"));
  }
}else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to post2"));
}
}