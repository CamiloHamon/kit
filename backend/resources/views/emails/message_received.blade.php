<html>

<head>
    <h3>Bienvenido {{$name}} {{$last_name}}</h3>
</head>

<body>
    <div>
        <p>Se ha creado tu usuario satisfactoriamente con los siguiente datos de acceso:</p>
        <p><strong>Correo: {{$email}}</strong></p>
        <p><strong>Password: {{$random_password}}</strong></p>
        <a href="http://localhost:4200">Ingresa aquí para iniciar sesión y cambiar tu contraseña.</a>
    </div>
</body>

</html>