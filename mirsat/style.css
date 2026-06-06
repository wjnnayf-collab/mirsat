window.onload = async function () {

  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = h + ':' + m + ':' + s;
  }
  setInterval(updateClock, 1000);
  updateClock();

  async function getWeather() {
    try {
      const response = await fetch('https://wttr.in/Riyadh?format=j1');
      const data = await response.json();
      document.getElementById('weather-temp').textContent = data.current_condition[0].temp_C + 'C';
      document.getElementById('weather-desc').textContent = data.current_condition[0].weatherDesc[0].value;
      document.getElementById('weather-humidity').textContent = data.current_condition[0].humidity + '%';
      document.getElementById('weather-wind').textContent = data.current_condition[0].windspeedKmph + 'km/h';
    } catch (error) {
      document.getElementById('weather-temp').textContent = '--';
    }
  }
  await getWeather();
  setInterval(getWeather, 600000);

  let counter = 4;

  function addRowToTable(task, num) {
    let cls = '';
    if (task.priority === 'عاجل') cls = 'danger';
    if (task.priority === 'متوسط') cls = 'warn';
    const row = document.createElement('tr');
    row.innerHTML = '<td>#00' + num + '</td><td>' + task.name + '</td><td>' + (task.officer || '-') + '</td><td><span class="badge ' + cls + '">' + task.priority + '</span></td><td><span class="badge green">جاري</span></td>';
    document.getElementById('tasks-body').appendChild(row);
  }

  const saved = JSON.parse(localStorage.getItem('tasks') || '[]');
  saved.forEach(function (task) {
    addRowToTable(task, counter);
    counter++;
  });

  function updateTaskCount() {
    const rows = document.querySelectorAll('#tasks-body tr');
    document.getElementById('task-count').textContent = rows.length;
  }

  const overlay = document.getElementById('modal-overlay');
  const openBtn = document.getElementById('open-modal-btn');
  const closeBtn = document.getElementById('modal-close');
  const cancelBtn = document.getElementById('btn-cancel');
  const saveBtn = document.getElementById('btn-save');

  function openModal() {
    overlay.classList.add('active');
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.getElementById('input-name').value = '';
    document.getElementById('input-officer').value = '';
    document.getElementById('input-priority').value = '';
    document.getElementById('error-name').textContent = '';
    document.getElementById('error-officer').textContent = '';
    document.getElementById('error-priority').textContent = '';
    document.getElementById('input-name').classList.remove('error');
    document.getElementById('input-officer').classList.remove('error');
    document.getElementById('input-priority').classList.remove('error');
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  function validate() {
    let valid = true;
    const name = document.getElementById('input-name').value.trim();
    const officer = document.getElementById('input-officer').value.trim();
    const priority = document.getElementById('input-priority').value;

    if (!name) {
      document.getElementById('error-name').textContent = 'اسم المهمة مطلوب';
      document.getElementById('input-name').classList.add('error');
      valid = false;
    } else {
      document.getElementById('error-name').textContent = '';
      document.getElementById('input-name').classList.remove('error');
    }

    if (!officer) {
      document.getElementById('error-officer').textContent = 'اسم المسؤول مطلوب';
      document.getElementById('input-officer').classList.add('error');
      valid = false;
    } else {
      document.getElementById('error-officer').textContent = '';
      document.getElementById('input-officer').classList.remove('error');
    }

    if (!priority) {
      document.getElementById('error-priority').textContent = 'الاولوية مطلوبة';
      document.getElementById('input-priority').classList.add('error');
      valid = false;
    } else {
      document.getElementById('error-priority').textContent = '';
      document.getElementById('input-priority').classList.remove('error');
    }

    return valid;
  }

  saveBtn.addEventListener('click', function () {
    if (!validate()) return;
    const task = {
      name: document.getElementById('input-name').value.trim(),
      officer: document.getElementById('input-officer').value.trim(),
      priority: document.getElementById('input-priority').value
    };
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    addRowToTable(task, counter);
    counter++;
    updateTaskCount();
    closeModal();
  });

};
