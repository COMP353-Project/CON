<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

if ($_SERVER['REQUEST_METHOD'] == 'GET') { 
    $group_id = $_GET['group_id'];
    $query = "SELECT U.first_name, U.last_name, GM.created_at FROM `Group_members` GM, Users U WHERE GM.group_id = '$group_id' and GM.user_id = U.id";
                
    $result = @mysqli_query($conn, $query);

    if ($result->num_rows > 0) {
        $array = array();
        while($row = $result->fetch_assoc()) {
            array_push($array, $row);
    }
        echo json_encode($array);
        http_response_code(200);
    } 
    else {
        http_response_code(400);
        echo json_encode(array("message" => "No friend requests"));

    }
}