<nav class="navigation menuDropdown" role="navigation">
    <div class="nav-brand" role="none">
        <img src="../../assets/img/icon/home.png" alt="logo du site">
    </div>
    <ul role="menubar" aria-label="Menu de navigation principal">
        <!-- class="active" + aria-currrent="page" représente quel page nous sommes -->
        <!-- rajouter aria-expanded="true" / "false" en fonction de si submenu ouvert ou non -->
        <!-- Si sub menu rajouter role="menu" -->
        <!-- <li role="separator"></li> permet de faire une ligne séparé -->
        <li class="list active" tabindex="0" aria-current="page" role="none" aria-haspopup="false">
            <a href="#" target="_self" role="menuitem" aria-label="Lien vers la page d'accueil du site">
                <span class="text">
                    Home
                </span>
            </a>
        </li>
        <li class="list" role="none">
            <a href="#" target="_self" role="menuitem" aria-label="Lien vers le menu 2 du site">
                <span class="text">
                    menu 2
                </span>
            </a>
        </li>
        <li class="list" role="none">
            <a href="#" target="_self" role="menuitem" aria-label="Lien vers le menu 3 du site">
                <span class="text">
                    menu 3
                </span>
            </a>
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
            <img src="../../assets/img/icon/profile.png" style="background-color: white;border-radius: 50%; width: 30px;">
        </a>
    </div>
</nav>