<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "mysql", "reactphp");
$query = "insert into test (id, name,email, feedback)
values(
    '" . $_POST['id'] . "',
    '" . $_POST['name'] . "',
    '" . $_POST['email'] . "',
    '" . $_POST['feedback'] . "'
)";
$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}
?>

