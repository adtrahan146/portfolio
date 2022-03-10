function contact(){
    document.getElementById("webpage").innerHTML = (
        `
        <!--Navbar-->
        <nav class="navbar navbar-expand-md navbar-dark shadow-5-strong container-fluid major-mono-display">
            <a class="navbar-brand" href="#" onclick="home()">
                <i class="bi bi-house"></i> Alex Trahan
            </a>
            <!--navbar collapse button-->
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-options">
                <i class="navbar-toggler-icon"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbar-options">

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="code()">
                            <i class="bi bi-code-slash"></i> Code
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="blog()">
                            <i class="bi bi-chat-dots"></i> Blog
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="about()">
                            <i class="bi bi-person"></i> <span id="my-triangle">&#x25b2;</span>bout
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="contact()">
                            <i class="bi bi-envelope"></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <!--Contact form-->
        <div class="container-fluid mt-4 text-white">
            <h1 class="display-4 major-mono-display">
                <i class="bi bi-envelope"></i> Contact
            </h1>
            <hr>
        </div>
        
        <div class="container-fluid mt-4 text-white justify-content-center w-75"> 
            <form class="">
                <div class="form-group mb-3">
                    <label>Name:</label>
                    <input class="form-control" type="text" id="name" placeholder="Name">
                </div>
                <div class="form-group mb-3">
                    <label>Email:</label>
                    <input class="form-control" type="email" id="email" placeholder="Email">
                </div>
                <div class="form-group mb-3">
                    <label>Subject:</label>
                    <input class="form-control" type="subject" id="subject" placeholder="Subject">
                </div>
                <div class="form-group mb-3">
                    <label>Message:</label>
                    <textarea class="form-control" rows="4" id="message" placeholder="Message">  </textarea>
                </div>
                <button class="btn btn-secondary float-end" type="submit"> Submit </button>
            </form>
        </div>
        `
    );
}

function blog(){
    document.getElementById("webpage").innerHTML = (
        `
        <!--Navbar-->
        <nav class="navbar navbar-expand-md navbar-dark shadow-5-strong container-fluid major-mono-display">
            <a class="navbar-brand" href="#" onclick="home()">
                <i class="bi bi-house"></i> Alex Trahan
            </a>
            <!--navbar collapse button-->
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-options">
                <i class="navbar-toggler-icon"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbar-options">

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="code()">
                            <i class="bi bi-code-slash"></i> Code
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="blog()">
                            <i class="bi bi-chat-dots"></i> Blog
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="about()">
                            <i class="bi bi-person"></i> <span id="my-triangle">&#x25b2;</span>bout
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="contact()">
                            <i class="bi bi-envelope"></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!--Blog page-->
        <div class="container-fluid mt-4 text-white justify-content-center">
            <h1 class="display-4 mt-4 major-mono-display text-light">
                <i class="bi bi-chat-dots"></i> Blog
            </h1>
            <hr>
        </div>

        <!--Carousel-->
        <div id="blog-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
            <!--Carousel Menu-->
            <ol class="carousel-indicators">
                <li data-bs-target="#blog-carousel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#blog-carousel" data-bs-slide-to="1"></li>
            </ol>
            <!--Carousel body-->
            <div class="carousel-inner text-center">
                <!--Slide 1:-->
                <div id="slide-1" class="carousel-item active">
                    <div class="blog-gradient">
                        <img class="blog-img" src="./assets/uno.jpg">
                    </div>
                    <div class="carousel-caption">
                        <h5> Portfolio Website Devlog </h5>
                        <p>
                            <small> Cataloguing my experience in development of my portfolio page! </small>
                        </p>
                        <button class="btn btn-secondary"> Read More </button>
                    </div>
                </div>
                
                <!--Slide 2:-->
                <div id="slide-2" class="carousel-item">
                    <div class="blog-gradient justify-content-center">
                        <img class="blog-img" src="./assets/imperial-flag.jpg">
                    </div>
                    <div class="carousel-caption">
                        <h5> Events and Impacts of the Russian Revolution </h5>
                        <p>
                            <small> A research paper I wrote during my time as a Political Science student regarding the Russian Revolution. </small>
                        </p>
                        <a href="https://docs.google.com/document/d/1qPNUk5y2OdoBan4WULltoVwxgttHU7Nrv7F1-n-MaBc/edit?usp=sharing"
                            <button class="btn btn-secondary" href="#"> Read More </button>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
        <!--Carousel Controls-->
        <div class="mt-5">
            <a class="my-carousel-control-prev" href="#blog-carousel" role="button" data-bs-slide="prev">
                <i class="carousel-control-prev-icon"></i>
            </a>
        </div>
        
        <a class="my-carousel-control-next" href="#blog-carousel" role="button" data-bs-slide="next">
            <i class="carousel-control-next-icon"></i>
        </a>
        `
        );
}

function about(){
    document.getElementById("webpage").innerHTML = (
        `
        <!--Navbar-->
        <nav class="navbar navbar-expand-md navbar-dark shadow-5-strong container-fluid major-mono-display">
            <a class="navbar-brand" href="#" onclick="home()">
                <i class="bi bi-house"></i> Alex Trahan
            </a>
            <!--navbar collapse button-->
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-options">
                <i class="navbar-toggler-icon"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbar-options">

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="code()">
                            <i class="bi bi-code-slash"></i> Code
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="blog()">
                            <i class="bi bi-chat-dots"></i> Blog
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="about()">
                            <i class="bi bi-person"></i> <span id="my-triangle">&#x25b2;</span>bout
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="contact()">
                            <i class="bi bi-envelope"></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!--About heading-->
        <div class="container-fluid text-white justify-content-center">
            <div class="container-fluid">
                <h1 class="display-4 mt-4 major-mono-display text-light">
                    <i class="bi bi-person"></i> <span id="larger-triangle">&#x25b2;</span>bout
                </h1>
                <hr>
            </div>

            <!--About me: using GRID & FLEX-->
            <div class="container-fluid shadow-lg text-light row">

                <!--Column 1:-->
                <div class="text-center col-md-2">
                    <h4 class="lead"> Alex Trahan </h4>
                    <img id="myThumb" class="img-thumbnail w-50" src="./assets/100_0541.JPG">
                    <div class="d-flex justify-content-center gap-4 m-4">
                        <a href="#" class="text-white"> <i class="bi bi-twitter"></i> </a>
                        <a href="#" class="text-white"> <i class="bi bi-linkedin"></i> </a>
                        <a href="#" class="text-white"> <i class="bi bi-github"></i> </a>
                    </div>
                    
                    <div class="d-flex row row-cols-1 d-md-block d-none">
                        <hr>
                        <span> Education: </span>
                        <small> Computer Science, B.S. </small>
                        <small> University of New Orleans </small>
                        <hr>
                    </div>
                    
                </div>
                <!--Column 2:-->
                <div class="bg-transparent col-md-10">
                
                    <!--Row 1 name n image-->
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <h1>Alex Trahan</h1>
                            <p class="indent"> Hello, my name's Alex.  I'm currently a junior studying Computer Science
                            at the University of New Orleans.  <strike>I've also taken multiple liberal arts courses relating to Political Science.</strike>
                            I'm most recently working in sales, but aspiring for a software development job.
                            I'm also a human, so feel free to contact! </p>
                        </div>
                        <div class="col-md-4 d-md-block d-none">
                            <img class="img-fluid alex" src="./assets/profile-image.png">
                        </div>
                    </div>

                    <!--Row 2 skills-->
                    <hr>
                    <h4 class="display-4">Skills:</h4>
                    <div class="row row-col-2 d-flex">
                        <img class="col-2 img" src='./assets/icon-java.png'>
                        <img class="col-2 img" src='./assets/icon-js.png'>
                        <img class="col-2 img" src='./assets/icon-html5.png'>
                        <img class="col-2 img" src='./assets/icon-css3.png'>
                        <img class="col-2 img" src='./assets/icon-react.png'>
                        <img class="col-2 img" src='./assets/icon-mongodb.png'>
                        <img class="col-2 img" src='./assets/icon-node.webp'>
                        <img class="col-2 img" src='./assets/icon-npm.png'>
                        <img class="col-2 img" src='./assets/icon-passport.png'>
                        <img class="col-2 img" src='./assets/icon-socketio.png'>
                    </div>
                    
                </div>
                
            </div>
        </div>
        `
        );
}

function code(){
    document.getElementById("webpage").innerHTML = (
        `
        <!--Navbar-->
        <nav class="navbar navbar-expand-md navbar-dark shadow-5-strong container-fluid major-mono-display">
            <a class="navbar-brand" href="#" onclick="home()">
                <i class="bi bi-house"></i> Alex Trahan
            </a>
            <!--navbar collapse button-->
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-options">
                <i class="navbar-toggler-icon"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbar-options">

                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="code()">
                            <i class="bi bi-code-slash"></i> Code
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="blog()">
                            <i class="bi bi-chat-dots"></i> Blog
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="about()">
                            <i class="bi bi-person"></i> <span id="my-triangle">&#x25b2;</span>bout
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="contact()">
                            <i class="bi bi-envelope"></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!--Coding Projects Port-->
        <div class="container-fluid text-white justify-content-center">
            <h1 class="display-4 mt-4 major-mono-display">
                <i class="bi bi-code-slash"></i> Code
            </h1>
            <hr>
            
            <!--Card Group -->
            <div class="card-group gap-5 opaque-4 text-light float-center">
                <div class="row mx-auto">

                    <!--Card 1-->
                    <div class="col-auto mb-5 d-flex">
                        <div class="card bg-dark text-center" style="width: 18rem;">
                            <!--Card header-->
                            <div class="card-header bg-transparent">
                                <img class="img-thumbnail" src="./assets/waremp.png">
                            </div>
                            <!--Card body-->
                            <div class="card-body">
                                <h3 class="card-title opaque-regular"> War Empathy </h3>
                                <p style="color: rgba(255,255,255,1) !important;" class="card-text text-small">
                                    An HTML-based RPG with minimal CSS styling to bring awareness to geopolitical crises.
                                </p>
                            </div>
                            <!--Card footer-->
                            <div class="card-footer opaque-regular">
                                <small class="text-muted"> HTML, CSS </small>
                                <a href="https://adtrahan146.github.io/war-emp/">
                                    <button class="btn btn-secondary float-end"> See More </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!--Card 2-->
                    <div class="col-auto mb-5 d-flex">
                        <div class="card bg-dark text-center" style="width: 18rem;">
                            <!--Card header-->
                            <div class="card-header bg-transparent">
                                <img class="img-thumbnail" src="./assets/icon-java.png">
                            </div>
                            <!--Card body-->
                            <div class="card-body opaque-regular">
                                <h3 class="card-title"> GroupChat </h3>
                                <p class="card-text text-small">
                                    Second project upload is coming soon!
                                </p>
                            </div>
                            <!--Card footer-->
                            <div class="card-footer opaque-regular">
                                <small class="text-muted"> Java </small>
                                <button class="btn btn-secondary float-end"> See More </button>
                            </div>
                        </div>
                    </div>
                    <!--Card 3:-->
                    
                </div>
            <!--End card group-->
        </div>
        `
        );
}

function home(){
    document.getElementById("webpage").innerHTML = (
        `<div class="display-10 text-white text-center">
            <div class="display-2">
                <h3> </h3>
                <h1 class="animate__animated major-mono-display animate__fadeInDown"> <span class="red-hat-mono">I'm</span> Alex </h1>
            </div>
            <div><small>try moving the camera!</small></div>
            
        </div>
        

        <div class="container align-bottom major-mono-display w-25">
            <div class="row p-3 animate__animated animate__slideInLeft">
                <button class="btn btn-outline-light" type="button" onclick="code()">
                    <i class="bi bi-code-slash"></i> Code
                </button>
            </div>
            <div class="row p-3 animate__animated animate__slideInLeft animate__delay-1s">
                <button class="btn btn-outline-light" type="button" onclick="blog()">
                    <i class="bi bi-chat-dots"></i> Blog
                </button>
            </div>
            
            <div class="row p-3 animate__animated animate__slideInLeft animate__delay-2s">
                <button class="btn btn-outline-light" type="button" onclick="about()">
                    <i class="bi bi-person"></i> <span id="my-triangle">&#x25b2;</span>bout
                </button>
            </div>
            
            <div class="row p-3 animate__animated animate__slideInLeft animate__delay-3s">
                <button class="btn btn-outline-light" type="button" onclick="contact()">
                    <i class="bi bi-envelope"></i> Contact
                </button>
            </div>
            
        </div>
        `
    );
}