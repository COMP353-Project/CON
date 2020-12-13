<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");
$posts_table = 'Posts';
$admin_posts_table = 'Admin_posts';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $user_id = $_POST['id'];  
  $title = $_POST['title'];  
  $content = $_POST['content'];

  $create_post = "INSERT INTO " . $posts_table . "(user_id) VALUES(".$user_id.")";

  $result = @mysqli_query($conn, $create_post);

  $post_id = '';

  if ($result) {
    $post_id = mysqli_insert_id($conn);
  }
  else {
    http_response_code(400);
    echo json_encode(array("message" => "Error creating post"));  
  }

  $create_admin_post = "INSERT INTO ".$admin_posts_table." (post_id, title, content) VALUES ('".$post_id."','".$title."','".$content."')";

  $result = mysqli_query($conn, $create_admin_post);

  if ($result) {
    http_response_code(200);
    echo json_encode(array("message" => "Admin post created successfully."));
  } else {
      http_response_code(400);
      echo json_encode(array("message" => "Error creating admin post."));
  }
}