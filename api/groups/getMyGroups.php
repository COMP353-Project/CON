<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$conn = mysqli_connect("localhost", "root", "", "con");
$user_id = $_GET['id'];

$query = "SELECT id, name, description FROM `Groups` INNER JOIN Group_members WHERE Groups.id = Group_members.group_id AND Group_members.user_id = '$user_id'";

$result = mysqli_query($conn, $query);

if ($result->num_rows > 0) {
    $myGroups = array();
    while($row = $result->fetch_assoc()) {
        array_push($myGroups, $row);
  }
    echo json_encode($myGroups);
    http_response_code(200);
} 
 else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to fetch groups"));
}
