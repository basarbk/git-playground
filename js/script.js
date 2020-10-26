function exportAsPng(){
  html2canvas(document.querySelector("body")).then(canvas => {
    canvas.toBlob(function(blob){
      saveAs(blob, "git-cheat-sheet.png");
    })
});
}