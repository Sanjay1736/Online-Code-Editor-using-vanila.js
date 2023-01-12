// creating a run funtion
function run() {
  let htmlCode = document.querySelector(".container  #htmlCode").value;
  let cssCode =
    "<style>" +
    document.querySelector(".container #cssCode").value +
    "</style>";
  let jsCode = document.querySelector(".container #javaScript").value;
  let output = document.querySelector(".iframe-container #viewer");
//   console.log(htmlCode, cssCode, jsCode, output);
    // Appending the value inside the Html&Code to iframe means ouput innnerHTML.
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    //for evaling jsCode we are eval function inside javaScript by ouput.contentWindow.eval and passing jsCode as a argument
  output.contentWindow.eval(jsCode);
}
//we are making documnet objects in global
//by using addEventLisner we are passing type of of that listner to do and passing the first class function  
document.querySelector(".container #htmlCode").addEventListener("keyup", run);
document.querySelector(".container #cssCode").addEventListener("keyup", run);
document.querySelector(".container #javaScript").addEventListener("keyup", run);
