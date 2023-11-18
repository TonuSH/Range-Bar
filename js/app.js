document.querySelector("input").addEventListener("input",range);

function range(){
    let rangeVal= document.querySelector("input").value;

    document.querySelector('p').innerText=rangeVal;
}