<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "", "con");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
$query = "SELECT name FROM `Groups`";

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
    echo json_encode(array("message" => "Unable to fetch groups"));
}
}