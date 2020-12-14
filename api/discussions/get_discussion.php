<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "", "con");
$id = $_GET['id'];

$post_query = "SELECT p.id, title, content, CONCAT(u.first_name, ' ', u.last_name) AS author, p.created_at AS date, is_public AS isPublic FROM Condo_association_discussions
INNER JOIN Posts p ON p.id = condo_assoc_post_id
INNER JOIN Users u ON p.user_id = u.id
WHERE p.id = $id";

$post_result = mysqli_query($conn, $post_query);
if ($post_result) {
  $response = array();
  $row = $post_result->fetch_assoc();
  $response['discussion'] = $row;

  $comments_query = "SELECT p.id AS id, content AS comment, CONCAT(first_name, ' ', last_name) AS author, p.created_at AS date FROM Condo_association_discussions_comments
  INNER JOIN Posts p ON condo_assoc_post_id = p.id
  INNER JOIN Users u ON u.id = p.user_id
  WHERE discussion_id = $id";

  $comments_result = mysqli_query($conn, $comments_query);

  if ($comments_result) {
    $comments = array();
    while($comment = $comments_result->fetch_assoc()) {
      array_push($comments, $comment);
    }
    $response['comments'] = $comments;
    echo json_encode($response);
    http_response_code(200);
  } else {
    echo json_encode(array("message" => "There was an error"));
  }
} else {
  echo json_encode(array("message" => "There was an error"));
}