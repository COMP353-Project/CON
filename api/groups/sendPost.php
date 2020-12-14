<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $user_id = $_POST['user_id'];
  $group_id = $_POST['group_id'];
  $description = $_POST['description'];
  $title = $_POST['title'];

  $create_post = "INSERT into Posts(user_id) VALUES('$user_id');";

  $result = @mysqli_query($conn, $create_post);

  if ($result) {
    $post_id = mysqli_insert_id($conn);
  }
  else {
    http_response_code(400);
    echo json_encode(array("message" => "Error creating post"));  
  }
  $create_group_post = "INSERT into Group_posts(group_id, post_id) VALUES('$group_id', '$post_id')";
  $result = @mysqli_query($conn, $create_group_post);

  if(!$result) {
    http_response_code(400);
    echo json_encode(array("message" => "Error creating post"));  
  }

  $create_group_post_final = "INSERT into Group_content_post(group_post_id, title, description) VALUES('$post_id', '$title', '$description')";

  $result = mysqli_query($conn, $create_group_post_final);

  if ($result) {
    http_response_code(200);
    echo json_encode(array("message" => "group post created successfully."));
  } else {
      http_response_code(400);
      echo json_encode(array("message" => "Error creating group post."));
  }
}