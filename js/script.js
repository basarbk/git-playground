document.querySelectorAll('div').forEach(item => {
  item.onmouseover = () => {
    item.style.color = "red"
  }
  item.onmouseout = () => {
    item.style.color = "black"
  }
})

function exportAsPng(){
  html2canvas(document.querySelector("#capture")).then(canvas => {
    canvas.toBlob(function(blob){
      saveAs(blob, "git-cheat-sheet.png");
    })
});
}