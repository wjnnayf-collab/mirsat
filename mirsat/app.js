window.onload = function() {

  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = h + ':' + m + ':' + s;
  }
  setInterval(updateClock, 1000);
  updateClock();

  fetch('https://wttr.in/Riyadh?format=j1')
    .then(function(res) { return res.json(); })
    .then(function(data) {
      document.getElementById('weather-temp').textContent = data.current_condition[0].temp_C + '°C';
      document.getElementById('weather-desc').textContent = data.current_condition[0].weatherDesc[0].value;
      document.getElementById('weather-humidity').textContent = data.current_condition[0].humidity + '%';
      document.getElementById('weather-wind').textContent = data.current_condition[0].windspeedKmph + ' كم/س';
    });

  let counter = 4;
  window.addTask = function() {
    const name = prompt('اسم المهمة:');
    if (!name) return;
    const officer = prompt('المسؤول:');
    const priority = prompt('الأولوية (عاجل / متوسط / عادي):');
    let cls = '';
    if (priority === 'عاجل') cls = 'danger';
    if (priority === 'متوسط') cls = 'warn';
    const row = document.createElement('tr');
    row.innerHTML = '<td>#00' + counter + '</td><td>' + name + '</td><td>' + (officer||'—') + '</td><td><span class="badge ' + cls + '">' + (priority||'عادي') + '</span></td><td><span class="badge warn">جارٍ</span></td>';
    document.getElementById('tasks-body').appendChild(row);
    counter++;
  };

};