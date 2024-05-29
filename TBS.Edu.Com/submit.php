<?php
//db.php - Database connection
$servername = "localhost";
$username = "username";
$address = "address";
$password = "password";
$dbname = "mydatabase";

$conn = new mysqli($servername, $username, $address, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>