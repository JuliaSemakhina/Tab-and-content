const tabs = document.querySelectorAll(".tab_btn");
const contentAll = document.querySelectorAll(".content");

tabs.forEach((tab, index)=>{
  tab.addEventListener('click', (e)=>{
    e.preventDefault();
    tabs.forEach(tab=>{tab.classList.remove('active')});
    tab.classList.add('active');

    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    contentAll.forEach(content=>{content.classList.remove('active')});
    contentAll[index].classList.add('active');
  });

})