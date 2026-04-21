function changeTab(tab){
  // 텍스트 변경
  document.getElementById("content").innerText = tab + " 화면";

  // active 상태 변경
  document.querySelectorAll(".tab").forEach(el => {
    el.classList.remove("active");
  });

  event.target.classList.add("active");
}
