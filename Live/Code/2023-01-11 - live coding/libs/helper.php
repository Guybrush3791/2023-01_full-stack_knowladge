<?php

    $mail = $_POST['mail'] ?? false;

    $validMail = str_contains($mail, "@") 
                    && str_contains($mail, ".");

    function getHtmlValidation($validMail, $mail) {

        if ($mail === false) {

            return "";
        }

        return $validMail 
            ? "<h1 class='green'>OK: " . $mail . "</h1>" 
            : "<h1 class='red'>KO: " . $mail . "</h1>"
        ;
    }

    function getOldMailValue($mail) {

        if ($mail !== false) {

            return "value='" . $mail . "'";
        }

        return "";
    }