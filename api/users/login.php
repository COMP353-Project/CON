<?php
require "../../vendor/autoload.php";
use \Firebase\JWT\JWT;
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "con");
$table_name = 'Users';

$email = $_POST['email'];
$password = $_POST['password'];

$query = "SELECT * FROM " . $table_name . " WHERE email = '$email' LIMIT 0, 1";

$result = mysqli_query($conn, $query);
$user_id = mysqli_insert_id($conn);

$row = @mysqli_fetch_assoc($result);

if($row) {
    $id = $row['id'];
    $is_admin = $row['is_admin'];
    $firstname = $row['first_name'];
    $lastname = $row['last_name'];
    $email = $row['email'];    
    $password_hash = $row['password'];
    $address = $row['address'];
    $key = md5(microtime().rand());

    if(password_verify($password, $password_hash)) {

        $secret_key = $key; // TODO: change this later
        $issuer_claim = "localhost";
        $issuedat_claim = time(); // issued at
        $notbefore_claim = $issuedat_claim + 10; //not before in seconds
        $expire_claim = $issuedat_claim + 60; // expire time in seconds
        $token = array(
            "iss" => $issuer_claim,
            "iat" => $issuedat_claim,
            "nbf" => $notbefore_claim,
            "data" => array(
                "id" => $id,
                "admin" => $is_admin,
                "firstname" => $firstname,
                "lastname" => $lastname,
                "email" => $email,
                "address" => $address
        ));
 
        $jwt = JWT::encode($token, $secret_key);
        echo json_encode(
            [
                "message" => "Successful login.",
                "jwt" => $jwt,
                "admin" => $is_admin,
                "email" => $email,
                "expireAt" => $expire_claim,
                "id" => $id
            ]       
            );

        http_response_code(200);

 
    }
else{
        http_response_code(401);
        echo json_encode(array("message" => "Login failed.", "password" => $password, "password2" => $password2));
    }

}