<nav class="navigation menuDropdown">
    <div class="nav-brand">
        <img src="../../assets/img/icon/home.png">
    </div>
    <ul>
    <?php
        ($currentPage == "homepage.php") ? (print '<li class="list active">') : print '<li class="list">';
    ?>
            <a href="homepage.php">
                <span class="text">
                    menu 1
                </span>
            </a>
        </li>
    <?php
        ($currentPage == "cv.php") ? (print '<li class="list active">') : print '<li class="list">';
    ?>
            <a href="cv.php">
                <span class="text">
                    menu 2
                </span>
            </a>
        </li>
        <li class="list">
            <a href="#">
                <span class="text">
                    menu 3
                </span>
            </a>
        </li>
        <li class="list">
            <a href="#">
                <span class="text">
                    menu 4
                </span>
            </a>
        </li>
    </ul>
    <div class="nav-profile">
        <img src="../../assets/img/icon/profile.png">
    </div>
</nav>