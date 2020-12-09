<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "", "con");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
$query = "SELECT CA.condo_assoc_post_id, CA.title, CA.description, CA.price, CA.contact_number, U.first_name, U.last_name, P.created_at
from Condo_association_ads CA, Users U, Posts P
WHERE CA.condo_assoc_post_id = P.id and P.user_id = U.id and CA.is_public =1";

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
    echo json_encode(array("message" => "Unable to fetch ads"));
}
}

