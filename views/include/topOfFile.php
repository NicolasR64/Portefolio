<?php
    // On recupere l'URL de la page pour ensuite affecter class = "active" aux liens de nav
    $currentPage = $_SERVER['REQUEST_URI'];
    $currentPage = str_replace("/myWebsite/myWebsite/app/views/", "",$currentPage);
