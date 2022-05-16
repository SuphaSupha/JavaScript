//3
const myName = document.querySelector("input[name='myName']");
myName.addEventListener("blur",handleBlur);

function handleBlur(event) {
    const value = event.target.value;
    const outputElement = document.getElementById("output");
    if(value) {
        outputElement.innerText += `${value},`;
    }
}

// function addNameToList(event) {
//     const name = event.target.value.trim();
//     const outputElement = document.getElementById('output');
//     if (name) {
//       outputElement.innerText += `${name}, `;
//     }
//   }
  
//   document.getElementById('name').addEventListener('blur', addNameToList);

//1
const painter = document.querySelector("input[name=painter]");
painter.addEventListener("input", (event) => {
    const value = event.target.value;
    const result = document.getElementById("result");
    let paintedL = "";
    let valueL = "L";
    

    for (let i = 1; i < value; i++){
        paintedL += "<div>L</div>";
    } for (let i = 0 ; i < value ; i++){
        paintedL += valueL;
    }

  
result.innerHTML = paintedL;
 });

//  E raide bus atsiskaityme 

// function drawC(event) {
//     const size = Number(event.target.value);
//     const outputElement = document.getElementById('output');
  
//     if (size < 5) {
//       outputElement.innerHTML = 'C letter size must be at least 3';
//       return;
//     }
  
//     let output = '';
//     for (i = 0; i < size; i++) {
//       output += 'C'
//     }
//     output += '<br>'
//     for (i = 0; i < size - 2; i++) {
//       output += 'C<br>';
//     }
  
//     for (i = 1; i < size; i++) {
//       output += 'C'
//     }
//     for (i = 0; i < size - 2; i++) {
//       output += 'C<br>';
//     }
  
//     for (i = 0; i < size; i++) {
//       output += 'C'
//     }
//     outputElement.innerHTML = output;
//   }
  
//   document.getElementById('size').addEventListener('input', drawC)
  
const cpainter = document.querySelector("input[name=cpainter]")

cpainter.addEventListener("input",headleLetterPainter)
function headleLetterPainter(event) {
    const size = Number(event.target.value);
    const result = document.getElementById("cresult");
    
    let output = '';
    for (i = 0; i < size; i++) {
      output += 'C'
    }
    output += '<br>'
    for (i = 0; i < size - 2; i++) {
      output += 'C<br>';
    }
    for (i = 0; i < size; i++) {
      output += 'C'
    }
    result.innerHTML = output;
}