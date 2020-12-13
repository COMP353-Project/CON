<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "", "con");
$id = $_GET['id'];

$query = 'SELECT u.first_name, u.last_name, m.id, m.created_at, m.content
FROM Messages m
INNER JOIN Users u ON u.id = m.user_id
WHERE m.conversation_id = ' . $id . ' ORDER BY m.created_at;';

$result = @mysqli_query($conn, $query);

if($result){
  $messages = array();
  while($row = $result->fetch_assoc()) {
    $message = array(
      'id' => $row['id'],
      'first_name' => $row['first_name'],
      'last_name' => $row['last_name'],
      'created_at' => $row['created_at'],
      'content' => $row['content']
    );
    array_push($messages, $message);
  }
  echo json_encode($messages);
  http_response_code(200);
}
else {
  echo json_encode(array("message" => "No message"));
  http_response_code(400);
}
