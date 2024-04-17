<?php
$servidor = "localhost:10007";
$usuario = "admin";
$contrasena = "web123";
$base_datos = "biblioteca_mistica";

// Conexión a la base de datos
$conexion = new mysqli($servidor, $usuario, $contrasena, $base_datos);

// Verificar conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
?>
