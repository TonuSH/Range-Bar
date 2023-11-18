document.querySelector("input").addEventListener("input",range);

function range(){
    let rangeVal= document.querySelector("input").value;

    document.querySelector('p').innerText=rangeVal;
}

setInterval(function(){
    let color1 = Math.floor(Math.random() *255);
    let color2 = Math.floor(Math.random() *255);
    let color3 = Math.floor(Math.random() *255);

    console.log(color1, color2, color3);
    document.body.style.background = `linear-gradient(rgb(${color1}, ${color2}, ${color3}), rgb(${color1}, ${color2}, ${color3}))`;
},1000);


