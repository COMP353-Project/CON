<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "mysql", "con");

$condo_assoc_post_id = $_GET['condo_assoc_post_id'];
    
$query = "SELECT CA.condo_assoc_post_id, CA.title, CA.description, CA.price, CA.contact_number, U.first_name, U.last_name, P.created_at
from Condo_association_ads CA, Users U, Posts P
WHERE CA.condo_assoc_post_id = '$condo_assoc_post_id' and CA.condo_assoc_post_id = P.id and P.user_id = U.id and CA.is_public =1";

$result = @mysqli_query($conn, $query);
$row = @mysqli_fetch_assoc($result);

if ($row) {
    $id = $row['condo_assoc_post_id'];
    $title = $row['title'];
    $description = $row['description'];
    $price = $row['price'];
    $contact_number = $row['contact_number'];    
    $first_name = $row['first_name'];
    $last_name = $row['last_name'];
    $created_at =$row['created_at'];

    echo json_encode(
            [
                "condo_assoc_post_id" => $id,
                "title" => $title,
                "description" => $description,
                "price" => $price,
                "contact_number" => $contact_number,
                "first_name" => $first_name,
                "last_name" => $last_name,
                "created_at" => $created_at
            ]       
            );
    http_response_code(200);
} 
 else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to fetch ad"));
}


