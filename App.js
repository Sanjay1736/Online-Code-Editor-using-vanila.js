function run() {
  let htmlCode = document.querySelector(".container  #htmlCode").value;
  let cssCode =
    "<style>" +
    document.querySelector(".container #cssCode").value +
    "</style>";
  let jsCode = document.querySelector(".container #javaScript").value;
  let output = document.querySelector(".iframe-container #viewer");
  console.log(htmlCode, cssCode, jsCode, output);
  output.contentDocument.body.innerHTML = htmlCode + cssCode;
  output.contentWindow.eval(jsCode);
}
document.querySelector(".container #htmlCode").addEventListener("keyup", run);
document.querySelector(".container #cssCode").addEventListener("keyup", run);
document.querySelector(".container #javaScript").addEventListener("keyup", run);
