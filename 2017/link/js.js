var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


  window.onscroll = function() {downun(),downunn(),downunnn()};

  function downun() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      if (w>1000) {
        document.getElementById("logo").style.opacity = "1";
        document.getElementById("logo").style.left = "43%";
        }
        else {
          document.getElementById("logo").style.opacity = "1";
          document.getElementById("logo").style.left = "35%";
        }
      }
      else {
        document.getElementById("logo").style.opacity = "0";
        document.getElementById("logo").style.left = "35%";
      }
  }


    function downunn() {
      if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        if (w>1000) {

        document.getElementById("svgdown").style.visibility = "hidden";

        document.getElementById("m").style.visibility = "visible";
          }
        }
        else {
          document.getElementById("svgdown").style.visibility = "visible";

          document.getElementById("m").style.visibility = "hidden";
        }
    }

      function downunnn() {
        if (document.body.scrollTop > 390 || document.documentElement.scrollTop > 390) {
          if (w>1000) {
          document.getElementById("title").style.opacity = "0";
          document.getElementById("title").style.top = "30px";
            }
          }
          else {
            document.getElementById("title").style.opacity = "1";
            document.getElementById("title").style.top = "25%";
          }
      }


      var nbclck=0;
      function mmenu() {
      nbclck++;



      if (nbclck%2==0) {

        document.getElementById("d").style.height="0px";

        document.body.style.overflow="visible";

        document.getElementById("a1").style.visibility="hidden";
        document.getElementById("a2").style.visibility="hidden";
        document.getElementById("a3").style.visibility="hidden";
        document.getElementById("a4").style.visibility="hidden";
        document.getElementById("a5").style.visibility="hidden";

        document.getElementById("a1").style.left="-110px";
        document.getElementById("a2").style.left="-160px";
        document.getElementById("a3").style.left="-210px";
        document.getElementById("a4").style.left="-260px";
        document.getElementById("a5").style.left="-310px";
      }

      else {

        document.getElementById("d").style.height="100%";

        document.body.style.overflow="hidden";

        document.getElementById("a1").style.visibility="visible";
        document.getElementById("a2").style.visibility="visible";
        document.getElementById("a3").style.visibility="visible";
        document.getElementById("a4").style.visibility="visible";
        document.getElementById("a5").style.visibility="visible";

        document.getElementById("a1").style.left="25%";
        document.getElementById("a2").style.left="25%";
        document.getElementById("a3").style.left="25%";
        document.getElementById("a4").style.left="25%";
        document.getElementById("a5").style.left="25%";
      }

      }
