const PI = 3.14;

let radius;
let circumference;



document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myRadius").value;
    radius = Number(radius);
    circumference = radius * 2 * PI;
    document.getElementById("myH3").textContent = circumference

}
