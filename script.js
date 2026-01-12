function goQuestion(){
  document.getElementById('intro').style.display="none";
  document.getElementById('step1').style.display="block";

  setTimeout(()=>{
    document.getElementById('step1').style.display="none";
    document.getElementById('step2').style.display="block";
  }, 3000);
}

function no(){
  document.getElementById('step2').style.display="none";
  document.getElementById('noBox').style.display="block";
}

function yes(){
  document.getElementById('step2').style.display="none";
  document.getElementById('noBox').style.display="none";
  document.getElementById('yesBox').style.display="block";
}

/* Floating flowers */
const flowers = ["flower1.gif","flower2.gif","flower3.gif"];

function spawnFlower(){
  const f = document.createElement("img");
  f.src = flowers[Math.floor(Math.random()*flowers.length)];
  f.style.left = Math.random()*100+"vw";
  f.style.animationDuration = (6+Math.random()*6)+"s";
  document.getElementById("flowers").appendChild(f);
  setTimeout(()=>f.remove(),12000);
}

setInterval(spawnFlower,700);
