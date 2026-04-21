// 저장
function saveData(){
  const data = {
    income: Number(document.getElementById("income").value) || 0,
    saving: Number(document.getElementById("saving").value) || 0,
    invest: Number(document.getElementById("invest").value) || 0,
    cash: Number(document.getElementById("cash").value) || 0,
  };

  localStorage.setItem("assetData", JSON.stringify(data));
  render(data);
}

// 불러오기
function loadData(){
  const saved = localStorage.getItem("assetData");

  if(saved){
    const data = JSON.parse(saved);

    document.getElementById("income").value = data.income;
    document.getElementById("saving").value = data.saving;
    document.getElementById("invest").value = data.invest;
    document.getElementById("cash").value = data.cash;

    render(data);
  }else{
    render({income:0, saving:0, invest:0, cash:0});
  }
}

// 렌더링 (핵심 로직)
function render(data){
  const total = data.income + data.saving + data.invest + data.cash;

  document.getElementById("total").innerText =
    "₩" + total.toLocaleString();

  if(total === 0){
    document.getElementById("pie").style.background = "#eee";
    return;
  }

  const i = (data.income / total) * 100;
  const s = i + (data.saving / total) * 100;
  const v = s + (data.invest / total) * 100;

  // conic-gradient 동적 생성
  document.getElementById("pie").style.background =
    `conic-gradient(
      #3182f6 0% ${i}%,
      #00c896 ${i}% ${s}%,
      #ffb020 ${s}% ${v}%,
      #ff5a5a ${v}% 100%
    )`;
}

// 최초 실행
loadData();
