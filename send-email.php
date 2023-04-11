<?php

   
$userName = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
echo '<p>Dziękujemy <span>'.$userName.'</span> za kontakt</p>
<p>Podany przez Ciebie adres email to: <span>'.$email.'</span>.</p>
<p>Wysłana do Nas wiadomość: <span>'.$message.'</span>.</p>';

echo '<br><br><button><a href=https://jakubkasztura.github.io/Contact-form/>Powrót na stronę główną</a></button>'
// href is set to github pages address to display properly for people checking project on this page
    
?>
<style>
   
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    body{
        text-align:center;
    }
    p,a{
        font-family:"Poppins", sans-serif;
        font-size:20px;
    }
    span{
        font-weight:600;
    }
    a{
        color:rgb(0,0,0);
        text-decoration:none;
      
    }
   button{
    padding:10px 15px;
    border:1px solid black;
    border-radius:10px;
    background-color:hsl(0, 100%, 74%);
   }
   button:hover{
    background-color:hsl(0, 100%, 64%);
   }
</style>

<!-- location of prompts, avoid ## in text files 
https://tonyfrenzy.medium.com/xampp-serving-from-any-directory-outside-of-htdocs-22a93f1b8815 -->

<!-- using XAMPP server, live server answer on: http://externalapp.local/ only after filling form and submit-->
<!-- back to main page button only works when live server is on -->