<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");

$password = $_POST['password'];
$password_hash = password_hash($password, PASSWORD_DEFAULT);

$query = "insert into Users (first_name, last_name, email, password, address)
values(
    '" . $_POST['first_name'] . "',
    '" . $_POST['last_name'] . "',
    '" . $_POST['email'] . "',
    '" . $password_hash . "',
    '" . $_POST['address'] . "',
)";

$result = @mysqli_query($conn, $query);
echo(json_encode($result));

if ($result) {
    http_response_code(200);
    echo json_encode(array("message" => "User was successfully registered."));
} else {
    echo json_encode(array("message" => "Unable to register the user."));
    http_response_code(400);
}