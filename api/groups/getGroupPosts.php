<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$conn = mysqli_connect("localhost", "root", "", "con");
$group_id = $_GET['id'];

$query = "SELECT Group_content_post.title, Group_content_post.description, Posts.user_id, Posts.created_at, Users.first_name, Users.last_name FROM Group_content_post, Posts, Users \n"

    . "INNER JOIN Group_posts \n"

    . "WHERE Group_posts.post_id = Group_content_post.group_post_id AND Posts.id = Group_posts.post_id AND Group_posts.group_id =".$group_id." AND Posts.user_id = Users.id";
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
