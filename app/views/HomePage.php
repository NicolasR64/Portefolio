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
    <header>
    <?php
        include('include/tabbar.php');
        include('include/menuDropdown.php');
    ?>
    </header>
    <main>
        <section class="hero">
            <video autoplay loop muted preload="auto">
                <source src="" type="video/mp4">
                Désolé, votre navvigateur ne supporte pas la vidéo.
            </video>
            <div class="hero-text">
                <strong>Bienvenue</strong>
                <p>Decouvrez mon univers</p>
            </div>
        </section>
    </main>
    <footer>
        <a href="https://www.flaticon.com/fr/icones-gratuites">Certaines icônes créées par Grow studio - Flaticon</a>
    </footer>
</body>
</html>