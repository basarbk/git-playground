document.querySelectorAll('div').forEach(item => {
  item.onmouseover = () => {
    item.style.color = "red"
  }
  item.onmouseout = () => {
    item.style.color = "black"
  }
})