function mypage() {
    pageContent.innerHTML = `
    <h1> <center>Welcome to My Page</center> <h1>
    </br>
     <h6>
    <center> In this page you can find specific information about me ..</center>
    </br>
    <center>I'm <i><u>Ladji Jr Binate</u></i> & I'm a senior in Computer science at <b>UCO</b> </center>
     </h6>

      
     <div class="text-center">
  <img src="js/mine2.jpg" class="rounded" width=200 height=200>
    </div>

    <center>I come from the Ivory Coast in West Africa & my biggest dream is to be able to help poor people in Africa & also to make the continent better through <b>EDUCATION<b></center>
     </br> 
    <center> Here's a little progress bar about my knowledge on CS </center>

    <center>
    <div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 60%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">SQL</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> C++</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Flutter/Dart</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 65%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Angular</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 45%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Linux</div>
</div>
    </center>
  </br>
    <center> If you want to go back to the Homepage click <a href="/home"> <i>here</i> </a></center>
    

    `;
    
    }