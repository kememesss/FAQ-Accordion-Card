const acc = document.getElementsByClassName("label");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
   

    if(this.style.fontWeight=='bold'){
        this.style.fontWeight='normal'
        
    }else {
        this.style.fontWeight='bold'
    }


    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";

    } else {
      panel.style.display = "block";
    }
  })
}




const labelElements = document.querySelectorAll('.label');

labelElements.forEach((label) => {
  label.addEventListener('click', () => {
    const arrowIcon = label.querySelector('.arrow-icon');
    


    if (arrowIcon.classList.contains('arrowdown')) {
      arrowIcon.classList.remove('arrowdown');
      arrowIcon.classList.add('arrowup');
      arrowIcon.style.transform = 'rotate(180deg)';


    } else if (arrowIcon.classList.contains('arrowup')) {
      arrowIcon.classList.remove('arrowup');
      arrowIcon.classList.add('arrowdown');
      arrowIcon.style.transform = 'rotate(0deg)';


    } else {
      arrowIcon.classList.add('arrowup');
      arrowIcon.style.transform = 'rotate(0deg)';
    }
  });
});