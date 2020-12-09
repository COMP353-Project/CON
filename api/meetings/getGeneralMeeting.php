<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "mysql", "con");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
$id = $_GET['id'];

$query = "SELECT Meetings.*, General_meetings.resolution
from Meetings, General_meetings 
Where Meetings.id = '$id' and Meetings.id = General_meetings.meeting_id";

$result = @mysqli_query($conn, $query);
$row = @mysqli_fetch_assoc($result);

if ($row) {
    $id = $row['id'];
    $title = $row['title'];
    $description = $row['description'];
    $agenda = $row['agenda'];
    $created_at =$row['created_at'];
    $resolution = $row['resolution'];    

    echo json_encode(
            [
                "id" => $id,
                "title" => $title,
                "description" => $description,
                "agenda" => $agenda,
                "resolution" => $resolution,
                "created_at" => $created_at
            ]       
            );
    http_response_code(200);
} 
 else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to fetch meeting"));
}
}

