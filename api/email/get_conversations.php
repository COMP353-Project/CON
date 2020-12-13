<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "", "con");
$id = $_GET['id'];

$query = 'SELECT c.id, c.subject, c.updated_at, r.user_id FROM Conversations c
INNER JOIN part_of p ON c.id = p.conversation_id AND p.user_id = ' . $id . '
INNER JOIN part_of r ON c.id = r.conversation_id
ORDER BY c.updated_at DESC;';

$result = @mysqli_query($conn, $query);

if($result){
  $count = 0;
  $conversations = array();
  while($row = $result->fetch_assoc()) {
    $members_query = 'SELECT email FROM Users WHERE id = ' . $row['user_id'] . ';';
    $members_result = @mysqli_query($conn, $members_query);
    $email = $members_result->fetch_assoc();
    if ($count != 0){
      $updated_members = $conversations[$row['id']]['members'];
    }
    $updated_members[$row['user_id']] = $email['email'];
    $conversation = array(
      'id' => $row['id'],
      'subject' => $row['subject'],
      'updated_at' => $row['updated_at'],
      'members' => $updated_members
    );
    $conversations[$row['id']] = $conversation;
    $count = $count + 1;
  }
  echo json_encode($conversations);
  http_response_code(200);
}
else {
  echo json_encode(array("message" => "Error fetching emails"));
  http_response_code(400);
}