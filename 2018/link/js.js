var nbclck=0;
       function menu() {
       nbclck++;



       if (nbclck%2==0) {
         document.getElementById("acceuil").style.visibility ="visible";
         document.body.style.backgroundColor ="#40404c";
         document.getElementById("menu").style.visibility ="hidden";

         document.getElementById("menu-btn").style.background ="white";
       }

       else {
         document.getElementById("acceuil").style.visibility ="hidden";
         document.body.style.backgroundColor ="";
         document.getElementById("menu").style.visibility ="visible";

         document.getElementById("menu-btn").style.background ="black";
       }

       }
