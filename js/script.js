function exportAsPng(){
  html2canvas(document.querySelector("#capture")).then(canvas => {
    canvas.toBlob(function(blob){
      saveAs(blob, "git-cheat-sheet.png");
    })
});
}