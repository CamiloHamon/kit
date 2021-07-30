<html>

<head>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .btn {
            display: inline-block;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            cursor: pointer;
            -webkit-user-select: none;
            user-select: none;
            background-color: transparent;
            border: 1px solid transparent;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            border-radius: 0.25rem;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .btn-primary {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            background-color: #6caaff;
            color: white;
        }

        .border {
            border: 1px solid #dee2e6;
        }

        .rounded {
            border-radius: 0.25rem !important;
        }

        .shadow {
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }

        .p-3 {
            padding: 3rem;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 1rem;
            width: 100%;
        }

        .col-12 {
            flex: 0 0 auto;
            width: 80%;
            max-width: 500px;
        }

        .mt-3 {
            margin-top: 3rem;
        }

        .text-center {
            text-align: center;
            font-style: italic;
        }

        .w-100 {
            width: 100%;
        }
    </style>
</head>

<body>
    <div class="row">
        <div class="col-12 border rounded shadow p-3">
            <h3>Restaurar contraseña</h3>
            <p class="mt-3">Hola <b>{{$name}},</b></p>
            <p>¿Olvidaste tu contraseña?
                <br />
                Hemos recibido una petición para restablecer la contraseña de tu
                cuenta.
                <br />
            </p>
            <p>Para cambiar tu contraseña, dale click al siguiente botón:</p>
            <a class="btn btn-primary" href="http://localhost:4200/response-password-reset?token={{$token}}&email={{$email}}">Restablecer contraseña</a>
            <div class="text-center w-100 mt-3">
                <small>Kit de Conversaciones Inteligentes</small>
            </div>
        </div>
    </div>
</body>

</html>