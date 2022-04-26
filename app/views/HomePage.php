<?php
    include('include/topOfFile.php');
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Home - Nicolas R.</title>

    <!-- Style css link -->
    <link rel="stylesheet" href="../css/style.css">
    
    <!-- Font family -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
<body class="dark">
    <script async src="../js/tabbar.js"></script>
    <script async src="../js/tabbar.js"></script>
    <?php
        include('include/tabbar.php');
        include('include/menuDropdown.php');
    ?>
    <header role="banner">
        <video muted autoplay loop>
            <source src="../../assets/video/hero.mp4"
                    type="video/mp4">

            Désolé, votre navigateur ne supporte pas cette vidéo.
        </video>
        <!-- 
        <p>Bienvenue sur mon site web!</p>
        <br>
        <p>HELLO WORLD!</p> 
        -->
    </header>
    <main>
        <section class="hero">
            
        </section>
        <section class="cvHero">
            <div class="cvHero-container">
                <div class="cvHero-containerFlex">
                    <div class="">        
                        <h2>TITRE</h2>
                        <h4>Sous-titre</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="projets">
  <!--           <div class="">
                <div class="">
                    <h2>TITRE</h2>
                    <h4>Sous-titre</h4>
                </div>
            </div> -->
            <div class="cards-container">
                <div class="cards-containerFlex">
                    <!-- Projet 1 -->
                    <div class="card">
                        <img src="../../assets/img/card/lorem-ipsum@2x.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <!-- Projet 2 -->
                    <div class="card">
                        <img src="../../assets/img/card/lorem-ipsum@2x.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <!-- Projet 3 -->
                    <div class="card">
                        <img src="../../assets/img/card/lorem-ipsum@2x.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <!-- Projet 4 -->
                    <div class="card">
                        <img src="../../assets/img/card/lorem-ipsum@2x.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <!-- Projet 5 -->
                    <div class="card">
                        <img src="../../assets/img/card/lorem-ipsum@2x.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                    <!-- Projet 6 -->
                    <div class="card">
                        <img src="../../assets/img/card/lorem-ipsum@2x.png" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <a href="https://www.flaticon.com/fr/icones-gratuites">Certaines icônes créées par Grow studio - Flaticon</a>
    </footer>
</body>
</html>