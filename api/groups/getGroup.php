<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $group_id = $_POST['group_id'];
    $user_id = $_POST['user_id'];

$query = "SELECT * FROM `Groups`, Group_members WHERE Groups.id = '$group_id' and '$user_id' = Group_members.user_id";

$result = @mysqli_query($conn, $query);
$row = @mysqli_fetch_assoc($result);

if ($row) {
    $id = $row['id'];
    $name = $row['name'];
    $description = $row['description'];

    echo json_encode(
            [
                "id" => $id,
                "name" => $name,
                "description" => $description
            ]       
            );
    http_response_code(200);
} 
 else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to fetch group"));
}

 }
