function changeTab(index){
  const indicator = document.querySelector(".indicator");
  const tabs = document.querySelectorAll(".tab");

  indicator.style.transform = `translateX(${index * 100}%)`;

  tabs.forEach(t => t.classList.remove("active"));
  tabs[index].classList.add("active");

  screens.forEach(s => s.classList.remove("active"));
  screens[index].classList.add("active");

}
