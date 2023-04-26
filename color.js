var b=document.getElementById('body')
var e=document.getElementById('gen')
var z=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

function generateur(){
    var c="#"
    for (var i=0;i<6;i++){
    var y=Math.floor(Math.random()*16);
    c+=z[y]
  }
  b.style.backgroundColor=c
  e.innerHTML=c
}
e.addEventListener('click',generateur)
