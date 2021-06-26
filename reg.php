<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  <title>Login</title>
  <style>
    body {
      text-align: center;
    }
    .container {
      margin-top: 10px;
    }
    h1 {
      text-decoration: underline;
    }
    .nav-link {
  color: #616161;
}
.nav-link:hover {
  color: black;
  text-decoration: underline;
}
.nav-
.navbar-expand {
  @each $breakpoint in map-keys($grid-breakpoints) {
    $next: breakpoint-next($breakpoint, $grid-breakpoints);
    $infix: breakpoint-infix($next, $grid-breakpoints);

    // stylelint-disable-next-line scss/selector-no-union-class-name
    &#{$infix} {
      @include media-breakpoint-up($next) {
        flex-wrap: nowrap;
        justify-content: flex-start;

        .navbar-nav {
          flex-direction: row;

          .dropdown-menu {
            position: absolute;
          }

          .nav-link {
            padding-right: $navbar-nav-link-padding-x;
            padding-left: $navbar-nav-link-padding-x;
          }
        }

        .navbar-nav-scroll {
          overflow: visible;
        }

        .navbar-collapse {
          display: flex !important; // stylelint-disable-line declaration-no-important
          flex-basis: auto;
        }

        .navbar-toggler {
          display: none;
        }
      }
    }
  }
}

  </style>
</head>
<body>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-light p-4">
      <h4 style="text-decoration: underline;" class="text-black h4">Navbar</h4>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a href="index.html" class="nav-link"><span>Home</span></a></li>
        <li class="nav-item"><a href="about.html" class="nav-link"><span>About</span></a></li>
        <li class="nav-item"><a href="reg.php" class="nav-link"><span>Register for updates</span></a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link"><span>Contact</span></a></li>
      </ul>
    </div>
  </div>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <?php
    $server = "localhost";
    $user = "root";
    $pass = "";
    $db = "registration";
    $conn = mysqli_connect($server, $user,$pass,$db);
  if($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST["username"]; 
        $password = $_POST["password"]; 
        $email = $_POST["email"];
        $sql = "SELECT * FROM users WHERE email=" . "'$email'";
        $checkname = "SELECT * FROM users WHERE username=" . "'$username'";
        $resultother = mysqli_query($conn, $checkname);
        $fetchname = mysqli_fetch_array($resultother, MYSQLI_NUM);
        $result = mysqli_query($conn, $sql);
        $fetch = mysqli_fetch_array($result, MYSQLI_NUM);
            if (is_array($fetch) && count($fetch)> 0) {
              echo '<div class="alert alert-primary d-flex align-items-center" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <div>' . 
                'The email ' . '<strong>' . $email . '</strong>' . ' is already registered!' . 
              '</div>
            </div>';  
            }
            elseif (is_array($fetchname) && count($fetchname)> 0) {
                echo '<div class="alert alert-primary d-flex align-items-center" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div>' . 
                  'The username ' . '<strong>' . $username . '</strong>' . ' is already registered!' . 
                '</div>
              </div>';
            }
            else {
                $sqli = "INSERT INTO users(username,email,password) VALUES ".
                "('$username','$email','$password')";
                $resultant = mysqli_query($conn, $sqli);
                echo '
                  <div class="alert alert-success alert-dismissible fade show"" role="alert">
                  <div>'
                  .'<strong>Success!</strong>' . ' You are registered successfully! Now you can receive updates on my sites!'. $username
                  .'</div>
                  </div>'; 
                $message = "Your email has been successfully registered! Thank you for registering";
            }
        }
    elseif (!$conn) {
    die('<div class="alert alert-danger alert-dismissible fade show"" role="alert">
        <div>
      Unable to connect to database
       </div>
     </div>');
    }
  ?>
  <div class="container">
    <h1>Register</h1>
    <form action="reg.php" method="post">
      <label for="username">Username:</label><br>
      <input type="text" class="form-control" id="username" name="username" placeholder="Create a username" required><br><br>
      <label for="email">Email: </label><br>
      <input type="email" class="form-control" id="email" name="email" placeholder="Enter your Email" required><br><br>
      <label for="password">Password: </label><br>
      <input type="password" class="form-control" id="password" name="password" placeholder="Create a password" required><br><br>
      <button type="submit" class="btn btn-primary btn-lg">Register</button>
    </form>
  </div>
</body>
</html>