<nav class="navigation menuDropdown" role="navigation">
    <div class="nav-brand" role="none" aria-label="contient le logo">
        <img src="../../assets/img/icon/home.png" alt="logo du site">
    </div>
    <ul role="menubar" aria-label="Menu principal">
        <!-- class="active" + aria-currrent="page" représente quel page nous sommes -->
        <!-- rajouter aria-expanded="true" / "false" en fonction de si submenu ouvert ou non -->
        <!-- <li role="separator"></li> permet de faire une ligne séparé -->
        <li class="list active"  role="none">
            <a href="HomePage.php" target="_self" role="menuitem" tabindex="0" aria-haspopup="false" aria-current="page">
                <span class="text">
                    Home
                </span>
            </a>
        </li>
        <li class="list" role="none">
            <a href="Cv.php" target="_self" role="menuitem" tabindex="-1" aria-haspopup="false">
                <span class="text">
                    Mon CV
                </span>
            </a>
        </li>
        <li class="list" role="none">
            <a href="#" target="_self" role="menuitem" tabindex="-1" aria-haspopup="true" aria-expanded="false">
                <span class="text">
                    Projets
                    <img src="../../assets/img/icon/down-arrow.svg">
                </span>
            </a>
            <ul role="menu" arial-label="liste des projets">
                <li role="none">
                    <a href="#" targer="_self" role="menuitem" tabindex="-1">
                        <span class="text">
                            projet 1
                        </span>
                    </a>
                </li>
                <li role="none">
                    <a href="#" targer="_self" role="menuitem" tabindex="-1">
                        <span class="text">
                            projet 2
                        </span>
                    </a>
                </li>
                <li role="none">
                    <a href="#" targer="_self" role="menuitem" tabindex="-1">
                        <span class="text">
                            projet 3
                        </span>
                    </a>
                </li>
            </ul>
        </li>
        <li class="list" role="none">
            <a href="#" target="_self" role="menuitem" aria-label="Lien vers le menu 4 du site">
                <span class="text">
                    menu 4
                </span>
            </a>
        </li>
    </ul>
    <div class="nav-profile">
        <a href="#" target="_self" role="link" aria-label="Lien vers la page profile du site">
            <img src="../../assets/img/icon/profile.png">
        </a>
    </div>
</nav>