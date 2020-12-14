<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

if ($_SERVER['REQUEST_METHOD'] == 'POST') { 
    $receiver_id = $_POST['receiver_id'];

    $query = "SELECT FR.sender_id, FR.created_at, U.first_name, U.last_name
                FROM Friend_requests FR, Users U
                WHERE FR.receiver_id = '$receiver_id' and FR.sender_id = U.id and FR.accepted = 0";
                
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
        echo json_encode(array("message" => "No friends"));
    }
}