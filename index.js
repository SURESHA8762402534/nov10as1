var cylinder = {
    hieght:20,
    radius:5

} ;
var r =cylinder.radius
var h = cylinder.hieght


//var r = Math.floor(radius);
//var h = Math.floor(height);


function volume(){
   
   
    //var v = document.getElementById('volume');
    var volume = (22/7*r*r*h);
   // v.innerText = volume;
console.log(volume)
}

function surArea(){
    var sur = 2*22/7*r*h+2*22/7*r*r
    //var s = document.getElementById('surArea')
    //s.innerText = sur
    console.log(sur)
}

surArea();
volume();