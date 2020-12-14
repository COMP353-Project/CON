<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$conn = mysqli_connect("localhost", "root", "", "con");
$group_id = $_GET['id'];

$query = "SELECT group_content_post.title, group_content_post.description, posts.user_id, posts.created_at, users.first_name, users.last_name FROM group_content_post, posts, users 
INNER JOIN group_posts 
WHERE group_posts.post_id = group_content_post.group_post_id AND posts.id = group_posts.post_id AND group_posts.group_id = '$group_id' AND posts.user_id = users.id";

$result = mysqli_query($conn, $query);

if ($result->num_rows > 0) {
    $posts = array();
    while($row = $result->fetch_assoc()) {
        array_push($posts, $row);
  }
    echo json_encode($posts);
    http_response_code(200);
} 
 else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to fetch posts"));
}
