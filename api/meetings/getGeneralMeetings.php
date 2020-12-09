<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "mysql", "con");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
$query = "SELECT Meetings.*, General_meetings.resolution
from Meetings, General_meetings 
Where Meetings.id = General_meetings.meeting_id";

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
    echo json_encode(array("message" => "Unable to fetch meetings."));
}
}


