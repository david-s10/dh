const showInfo = document.querySelectorAll('.advice__question');

function active(){
    this.classList.toggle('active')
    let showInfo = this.nextElementSibling;
    if(showInfo.style.maxHeight) {
      showInfo.style.maxHeight = null;
      }else{
        showInfo.style.maxHeight = showInfo.scrollHeight + 'px'   
    }   
}

showInfo.forEach(showAnswer => {
    showAnswer.addEventListener('click', active)
});


