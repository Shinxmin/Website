function changeTab(tab, el){
  // 콘텐츠 변경
  document.getElementById("content").innerText = tab + " 화면";

  // active 제거
  document.querySelectorAll(".tab").forEach(t => {
    t.classList.remove("active");
  });

  // 클릭한 요소에 active
  el.classList.add("active");
}
