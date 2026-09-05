// ===== STATE =====
let currentVideo = null;
let activeFilters = { level: 'all', duration: 'all', type: 'all' };

// ===== MOTIVATIONAL MESSAGES =====
const MESSAGES = [
  "Oggi è il giorno perfetto per ballare! 💃",
  "Muovi il corpo, libera la mente! 🧠✨",
  "Ogni passo ti avvicina al tuo obiettivo! 🎯",
  "La musica ti aspetta, inizia ora! 🎵",
  "Suda, sorridi, ripeti! 😊💦",
  "Il tuo corpo ti ringrazierà! 💪",
  "Balla come se nessuno guardasse! 🕺",
  "L'energia è contagiosa, diffondila! ⚡",
  "Oggi batti il tuo record! 🏆",
  "Non servono scuse, solo musica! 🎶",
  "Trasforma l'energia in movimento! 🔥",
  "Ogni workout è un passo verso la felicità! 🌈",
  "Sei più forte di quanto pensi! 💥",
  "Alza il volume e scatenati! 🔊",
];

// ===== LOCALSTORAGE HELPERS =====
function getData(key, fallback) {
  try {
    const d = localStorage.getItem('zumba_' + key);
    return d ? JSON.parse(d) : fallback;
  } catch { return fallback; }
}

function setData(key, value) {
  localStorage.setItem('zumba_' + key, JSON.stringify(value));
}

// ===== NAVIGATION =====
function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.querySelector(`[data-tab="${name}"]`).classList.add('active');

  if (name === 'preferiti') renderFavorites();
  if (name === 'profilo') renderProfile();
  if (name === 'esplora') filterVideos();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== RENDER VIDEO CARD =====
function createVideoCard(video) {
  const levelLabels = { principiante: 'Principiante', intermedio: 'Intermedio', avanzato: 'Avanzato' };
  const div = document.createElement('div');
  div.className = 'video-card';
  div.onclick = () => openPlayer(video);
  div.innerHTML = `
    <div class="thumb-wrapper">
      <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
      <span class="badge badge-duration">${video.duration} min</span>
      <span class="badge badge-level ${video.level}">${levelLabels[video.level]}</span>
    </div>
    <div class="card-info">
      <h4>${video.title}</h4>
      <div class="instructor">${video.instructor}</div>
    </div>
  `;
  return div;
}

// ===== FILTERS =====
function setFilter(el) {
  const filterType = el.dataset.filter;
  const value = el.dataset.value;
  activeFilters[filterType] = value;

  el.parentElement.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  filterVideos();
}

function filterVideos() {
  const search = (document.getElementById('search-input')?.value || '').toLowerCase();
  const grid = document.getElementById('video-grid');
  const noResults = document.getElementById('no-results');
  grid.innerHTML = '';

  let filtered = VIDEOS.filter(v => {
    if (activeFilters.level !== 'all' && v.level !== activeFilters.level) return false;
    if (activeFilters.duration !== 'all' && v.duration !== parseInt(activeFilters.duration)) return false;
    if (activeFilters.type !== 'all' && v.type !== activeFilters.type) return false;
    if (search && !v.title.toLowerCase().includes(search) && !v.instructor.toLowerCase().includes(search)) return false;
    return true;
  });

  if (filtered.length === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    filtered.forEach(v => grid.appendChild(createVideoCard(v)));
  }
}

// ===== QUICK START =====
function quickStart(duration) {
  const matching = VIDEOS.filter(v => v.duration === duration);
  if (matching.length === 0) {
    showToast('Nessun video trovato per ' + duration + ' min');
    return;
  }
  const video = matching[Math.floor(Math.random() * matching.length)];
  openPlayer(video);
}

// ===== PLAYER =====
function openPlayer(video) {
  currentVideo = video;
  const modal = document.getElementById('player-modal');
  const levelLabels = { principiante: '🟢 Principiante', intermedio: '🟡 Intermedio', avanzato: '🔴 Avanzato' };
  const typeLabels = { classic: '💃 Classic', toning: '🏋️ Toning', strong: '⚡ Strong', gold: '🌟 Gold' };

  document.getElementById('youtube-player').innerHTML =
    `<iframe src="https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0" 
     allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  document.getElementById('player-title').textContent = video.title;
  document.getElementById('player-instructor').textContent = video.instructor;
  document.getElementById('player-duration').textContent = video.duration + ' min';
  document.getElementById('player-level').textContent = levelLabels[video.level];

  const favs = getData('favorites', []);
  const isFav = favs.includes(video.id);
  document.getElementById('fav-icon').textContent = isFav ? '❤️' : '🤍';
  document.getElementById('btn-favorite').classList.toggle('favorited', isFav);

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePlayer() {
  document.getElementById('player-modal').style.display = 'none';
  document.getElementById('youtube-player').innerHTML = '';
  document.body.style.overflow = '';
  currentVideo = null;
}

// ===== FAVORITES =====
function toggleFavorite() {
  if (!currentVideo) return;
  let favs = getData('favorites', []);
  const idx = favs.indexOf(currentVideo.id);
  if (idx === -1) {
    favs.push(currentVideo.id);
    document.getElementById('fav-icon').textContent = '❤️';
    document.getElementById('btn-favorite').classList.add('favorited');
    showToast('❤️ Aggiunto ai preferiti!');
  } else {
    favs.splice(idx, 1);
    document.getElementById('fav-icon').textContent = '🤍';
    document.getElementById('btn-favorite').classList.remove('favorited');
    showToast('💔 Rimosso dai preferiti');
  }
  setData('favorites', favs);
}

function renderFavorites() {
  const favs = getData('favorites', []);
  const grid = document.getElementById('favorites-grid');
  const empty = document.getElementById('favorites-empty');
  grid.innerHTML = '';

  if (favs.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  favs.forEach(id => {
    const v = VIDEOS.find(v => v.id === id);
    if (v) grid.appendChild(createVideoCard(v));
  });
}

// ===== COMPLETED WORKOUTS =====
function markCompleted() {
  if (!currentVideo) return;
  const completed = getData('completed', []);
  const today = new Date().toISOString().slice(0, 10);
  completed.push({
    videoId: currentVideo.id,
    date: today,
    duration: currentVideo.duration,
    timestamp: Date.now()
  });
  setData('completed', completed);
  updateStreak();
  showToast('🎉 Workout completato! Grande!');
}

// ===== STREAK =====
function updateStreak() {
  const completed = getData('completed', []);
  const uniqueDays = [...new Set(completed.map(c => c.date))].sort().reverse();

  let streak = 0;
  const today = new Date();

  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    if (uniqueDays.includes(dateStr)) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }

  setData('streak', streak);

  // Update best streak
  const best = getData('bestStreak', 0);
  if (streak > best) setData('bestStreak', streak);

  document.getElementById('streak-count').textContent = streak;
  return streak;
}

// ===== PROFILE =====
function renderProfile() {
  const completed = getData('completed', []);
  const streak = updateStreak();
  const goal = getData('weeklyGoal', 3);

  // Stats
  const totalMinutes = completed.reduce((s, c) => s + (c.duration || 0), 0);
  document.getElementById('stat-workouts').textContent = completed.length;
  document.getElementById('stat-minutes').textContent = totalMinutes;
  document.getElementById('stat-streak').textContent = streak;
  document.getElementById('stat-best').textContent = getData('bestStreak', 0);

  // Weekly goal
  document.getElementById('goal-select').value = goal;
  const now = new Date();
  const dayOfWeek = now.getDay() || 7; // Monday = 1
  const monday = new Date(now);
  monday.setDate(now.getDate() - dayOfWeek + 1);
  const weekStart = monday.toISOString().slice(0, 10);

  const thisWeekDays = new Set(
    completed.filter(c => c.date >= weekStart).map(c => c.date)
  );
  const weekProgress = thisWeekDays.size;
  const pct = Math.min(100, (weekProgress / goal) * 100);

  document.getElementById('goal-progress-text').textContent = `${weekProgress} / ${goal} giorni`;
  document.getElementById('goal-progress-bar').style.width = pct + '%';

  // Heatmap (last 12 weeks = 84 days)
  renderHeatmap(completed);
}

function renderHeatmap(completed) {
  const heatmap = document.getElementById('heatmap');
  heatmap.innerHTML = '';

  const dateCounts = {};
  completed.forEach(c => {
    dateCounts[c.date] = (dateCounts[c.date] || 0) + 1;
  });

  const today = new Date();
  // Start from 83 days ago (12 weeks)
  for (let i = 83; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const count = dateCounts[dateStr] || 0;

    const el = document.createElement('div');
    el.className = 'heatmap-day';
    if (count >= 3) el.classList.add('l3');
    else if (count === 2) el.classList.add('l2');
    else if (count === 1) el.classList.add('l1');

    el.title = `${dateStr}: ${count} workout`;
    heatmap.appendChild(el);
  }
}

function setWeeklyGoal(val) {
  setData('weeklyGoal', parseInt(val));
  renderProfile();
}

function resetStats() {
  if (!confirm('Sei sicuro? Tutte le statistiche verranno cancellate!')) return;
  setData('completed', []);
  setData('streak', 0);
  setData('bestStreak', 0);
  setData('favorites', []);
  renderProfile();
  showToast('🗑️ Statistiche resettate');
}

// ===== DAILY WORKOUT =====
function renderDailyWorkout() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const video = VIDEOS[dayOfYear % VIDEOS.length];
  const levelLabels = { principiante: '🟢 Principiante', intermedio: '🟡 Intermedio', avanzato: '🔴 Avanzato' };
  const typeLabels = { classic: '💃 Classic', toning: '🏋️ Toning', strong: '⚡ Strong', gold: '🌟 Gold' };

  const container = document.getElementById('daily-workout');
  container.innerHTML = `
    <img class="card-thumb" src="${video.thumbnail}" alt="${video.title}">
    <div class="card-body">
      <div class="card-title">${video.title}</div>
      <div class="card-meta">
        <span>${video.instructor}</span>
        <span>${video.duration} min</span>
        <span>${levelLabels[video.level]}</span>
        <span>${typeLabels[video.type]}</span>
      </div>
    </div>
  `;
  container.onclick = () => openPlayer(video);
}

// ===== DAILY MESSAGE =====
function setDailyMessage() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  document.getElementById('motivational-msg').textContent = MESSAGES[dayOfYear % MESSAGES.length];
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ===== KEYBOARD: ESC closes modal =====
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePlayer();
});

// ===== INIT =====
function init() {
  setDailyMessage();
  renderDailyWorkout();
  updateStreak();
  filterVideos();
}

init();
