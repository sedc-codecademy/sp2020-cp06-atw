/* --------- Slider --------- */
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  /*spaceBetween: 0,*/
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop:true
});

let uiService = {
  accordions: document.getElementsByClassName("accordion"),

  showHidePanel: function(){
    for (let i = 0; i < this.accordions.length; i++) {
      this.accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") panel.style.display = "none";
        else panel.style.display = "block";          
      });
    }
  },
  showCurrentYear: function(){
    let currentYear = new Date().getFullYear();
    let copyrightEl = document.getElementById("copyright");
    copyrightEl.innerText += ` ${currentYear}`;
  }
};
uiService.showHidePanel();
uiService.showCurrentYear();