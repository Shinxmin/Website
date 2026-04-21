let chart;

// 저장 + 그래프 갱신
function saveData(){
  const data = {
    income: Number(document.getElementById("income").value) || 0,
    saving: Number(document.getElementById("saving").value) || 0,
    invest: Number(document.getElementById("invest").value) || 0,
    cash: Number(document.getElementById("cash").value) || 0,
  };

  // 로컬 저장
  localStorage.setItem("assetData", JSON.stringify(data));

  drawChart(data);
}

// 로컬 데이터 불러오기
function loadData(){
  const saved = localStorage.getItem("assetData");
  if(saved){
    const data = JSON.parse(saved);

    document.getElementById("income").value = data.income;
    document.getElementById("saving").value = data.saving;
    document.getElementById("invest").value = data.invest;
    document.getElementById("cash").value = data.cash;

    drawChart(data);
  }
}

// 차트 생성
function drawChart(data){
  const ctx = document.getElementById("chart");

  if(chart){
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['입출금', '예/적금', '투자', '현금'],
      datasets: [{
        data: [data.income, data.saving, data.invest, data.cash]
      }]
    }
  });
}

// 최초 실행
loadData();
