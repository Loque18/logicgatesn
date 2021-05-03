let result = document.getElementById("result");


let label = document.getElementById("label");

let op = document.getElementById("operation");


result.addEventListener('click', () => {

    let x1 = document.getElementById('x1').value;
    let x2 = document.getElementById('x2').value;

    let w1 = 0;
    let w2 = 0;
    let b = 0;
    if(op.value == "or"){
        w1 = 1;
        w2 = 1;
        b = 0;
    }
    else{
        w1 = 0;
        w2 = 0;
        b = -1;
    }

    let pp = x1*w1 + x2*w2 + b;

    label.innerHTML = pp > 0 ? 1 : 0;
});
