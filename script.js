function Calcular() {
  var a = parseFloat(document.getElementById("A").value) 
  var b = parseFloat(document.getElementById("B").value) 
  var c = parseFloat(document.getElementById("C").value) 
  var x1 = document.getElementById("X1")
  var x2 = document.getElementById("X2")

  if(a!=0){
    x1.innerHTML = (-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
    x2.innerHTML = (-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
  } else {
    x1.innerHTML = -c/b
    x2.innerHTML = "Não existe"
  }
}
