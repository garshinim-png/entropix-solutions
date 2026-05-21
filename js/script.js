document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PARTICLE BACKGROUND
  ========================== */
  const canvas = document.getElementById("ai-bg");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,211,238,0.7)";
        ctx.fill();

        particles.forEach(p2 => {
          let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.strokeStyle = "rgba(34,211,238,0.05)";
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }


  /* =========================
     HERO LINE CHART
  ========================== */
  const chartCanvas = document.getElementById("chart");

  if (chartCanvas) {
    const ctxChart = chartCanvas.getContext("2d");

    chartCanvas.width = 500;
    chartCanvas.height = 300;

    let points = Array.from({ length: 30 }, () => Math.random() * 200);

    function drawChart() {
      ctxChart.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

      ctxChart.strokeStyle = "#22d3ee";
      ctxChart.lineWidth = 2;
      ctxChart.beginPath();

      points.forEach((p, i) => {
        let x = i * (chartCanvas.width / points.length);
        let y = chartCanvas.height - p;

        if (i === 0) ctxChart.moveTo(x, y);
        else ctxChart.lineTo(x, y);
      });

      ctxChart.shadowBlur = 15;
      ctxChart.shadowColor = "#22d3ee";

      ctxChart.stroke();
    }

    function updateChart() {
      points.push(50 + Math.random() * 150);
      points.shift();
      drawChart();
    }

    setInterval(updateChart, 800);
    drawChart();
  }


  /* =========================
     RADAR SCAN
  ========================== */
  const radar = document.getElementById("radar");

  if (radar) {
    const ctxRadar = radar.getContext("2d");

    radar.width = 500;
    radar.height = 300;

    let angle = 0;

    function drawRadar() {
      ctxRadar.clearRect(0, 0, radar.width, radar.height);

      let cx = radar.width / 2;
      let cy = radar.height / 2;

      ctxRadar.strokeStyle = "rgba(34,211,238,0.2)";
      ctxRadar.beginPath();
      ctxRadar.arc(cx, cy, 120, 0, Math.PI * 2);
      ctxRadar.stroke();

      let x = cx + 120 * Math.cos(angle);
      let y = cy + 120 * Math.sin(angle);

      ctxRadar.strokeStyle = "rgba(34,211,238,0.6)";
      ctxRadar.beginPath();
      ctxRadar.moveTo(cx, cy);
      ctxRadar.lineTo(x, y);
      ctxRadar.stroke();

      angle += 0.03;

      requestAnimationFrame(drawRadar);
    }

    drawRadar();
  }


  /* =========================
     NETWORK BACKGROUND
  ========================== */
  const network = document.getElementById("network");

  if (network) {
    const ctxNet = network.getContext("2d");

    network.width = window.innerWidth;
    network.height = window.innerHeight;

    let nodes = [];

    for (let i = 0; i < 40; i++) {
      nodes.push({
        x: Math.random() * network.width,
        y: Math.random() * network.height,
        dx: (Math.random() - 0.5),
        dy: (Math.random() - 0.5)
      });
    }

    function drawNetwork() {
      ctxNet.clearRect(0, 0, network.width, network.height);

      nodes.forEach(n => {
        n.x += n.dx;
        n.y += n.dy;

        ctxNet.beginPath();
        ctxNet.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctxNet.fillStyle = "#22d3ee";
        ctxNet.fill();

        nodes.forEach(n2 => {
          let d = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (d < 120) {
            ctxNet.strokeStyle = "rgba(34,211,238,0.05)";
            ctxNet.beginPath();
            ctxNet.moveTo(n.x, n.y);
            ctxNet.lineTo(n2.x, n2.y);
            ctxNet.stroke();
          }
        });
      });

      requestAnimationFrame(drawNetwork);
    }

    drawNetwork();

    window.addEventListener("resize", () => {
      network.width = window.innerWidth;
      network.height = window.innerHeight;
    });
  }


  /* =========================
     METRICS
  ========================== */
  function updateMetrics() {
    const acc = document.getElementById("accuracy");
    const lat = document.getElementById("latency");
    const models = document.getElementById("models");
    const data = document.getElementById("data");

    if (acc && lat && models && data) {
      acc.innerText = (97 + Math.floor(Math.random() * 3)) + "%";
      lat.innerText = (95 + Math.floor(Math.random() * 40)) + "ms";
      models.innerText = (22 + Math.floor(Math.random() * 6));
      data.innerText = (310 + Math.floor(Math.random() * 30)) + "TB";
    }
  }

  setInterval(updateMetrics, 2200);
  updateMetrics();


  /* =========================
     LIVE FEED
  ========================== */
  const feed = document.getElementById("ai-feed");

  if (feed) {
    const logs = [
      "Inference pipeline stabilized",
      "Gradient model retrained",
      "Bayesian confidence recalibrated",
      "Signal anomaly detected",
      "Forecast horizon extended",
      "Cloud node synchronized",
      "Prediction stream updated",
      "Adaptive learning cycle complete"
    ];

    function updateFeed() {
      const item = document.createElement("div");
      item.className = "border-l-2 border-cyan-400 pl-3 opacity-0 transition duration-700";
      item.innerText = logs[Math.floor(Math.random() * logs.length)];

      feed.prepend(item);

      setTimeout(() => item.classList.remove("opacity-0"), 50);

      while (feed.children.length > 5) {
        feed.removeChild(feed.lastChild);
      }
    }

    updateFeed();
    setInterval(updateFeed, 1800);
  }


  /* =========================
     SIGNAL BARS
  ========================== */
  const bars = document.querySelectorAll("#signal-bars div");

  if (bars.length) {
    setInterval(() => {
      bars.forEach(bar => {
        bar.style.height = (25 + Math.random() * 75) + "%";
      });
    }, 900);
  }


  /* =========================
     SCROLL REVEAL
  ========================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));







/* =========================
   VIDEO + AUDIO
========================= */

const mainVideo    = document.getElementById("mainVideo");
const secondVideo  = document.getElementById("secondaryVideo");
const music1       = document.getElementById("music1");
const music2       = document.getElementById("music2");

const PLAY_SVG  = `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
const PAUSE_SVG = `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
const VOL_ON    = `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>`;
const VOL_OFF   = `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;

function formatTime(sec) {
  if (isNaN(sec) || sec === Infinity) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function fadeIn(audio) {
  if (!audio) return;
  audio.volume = 0;
  audio.play().catch(() => {});
  let vol = 0;
  const fade = setInterval(() => {
    vol = Math.min(vol + 0.05, 0.4);
    audio.volume = vol;
    if (vol >= 0.4) clearInterval(fade);
  }, 150);
}

function stopAllMusic() {
  [music1, music2].forEach(m => { if (m) { m.pause(); m.currentTime = 0; } });
}

function syncCenterOverlay(video, overlay) {
  if (!overlay) return;
  if (video.paused) {
    overlay.classList.remove("yt-hidden");
  } else {
    overlay.classList.add("yt-hidden");
  }
}

function togglePlayPause(video, music, overlay) {
  if (!video) return;
  if (video.paused) {
    // Pause the other video + its music
    [mainVideo, secondVideo].forEach(v => { if (v && v !== video) v.pause(); });
    stopAllMusic();

    video.play().catch(() => {});
    if (music) fadeIn(music);
  } else {
    video.pause();
    if (music) music.pause();
  }
}

function setupPlayer({ video, music, playWithSoundBtn, playPauseBtn, centerBtn, centerOverlay, timeEl, progressBar, progressFill, progressThumb, volBtn, fullscreenBtn }) {
  if (!video) return;

  // Click on video itself
  video.addEventListener("click", () => togglePlayPause(video, music, centerOverlay));

  // Center big button
  if (centerBtn) centerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    togglePlayPause(video, music, centerOverlay);
  });

  // Bottom bar play/pause button
  if (playPauseBtn) playPauseBtn.addEventListener("click", () => togglePlayPause(video, music, centerOverlay));

  // "PLAY WITH SOUND" button
  if (playWithSoundBtn) playWithSoundBtn.addEventListener("click", () => {
    [mainVideo, secondVideo].forEach(v => { if (v && v !== video) v.pause(); });
    stopAllMusic();

    video.play().catch(() => {});
    if (music) fadeIn(music);
  });

  // Sync button icons + center overlay on play/pause
  video.addEventListener("play", () => {
    if (playPauseBtn) playPauseBtn.innerHTML = PAUSE_SVG;
    syncCenterOverlay(video, centerOverlay);
    // update center button icon to pause
    if (centerBtn) {
      const svg = centerBtn.querySelector("svg");
      if (svg) svg.outerHTML = `<svg class="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    }
  });
  video.addEventListener("pause", () => {
    if (playPauseBtn) playPauseBtn.innerHTML = PLAY_SVG;
    syncCenterOverlay(video, centerOverlay);
    // update center button icon to play
    if (centerBtn) {
      const svg = centerBtn.querySelector("svg");
      if (svg) svg.outerHTML = `<svg class="w-9 h-9 text-white ml-1" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
    }
  });

  // Progress bar + time
  video.addEventListener("timeupdate", () => {
    const pct = video.duration ? (video.currentTime / video.duration) * 100 : 0;
    if (progressFill)  progressFill.style.width  = pct + "%";
    if (progressThumb) progressThumb.style.left   = pct + "%";
    if (timeEl) timeEl.textContent = formatTime(video.currentTime) + " / " + formatTime(video.duration);
  });

  // Seek on progress bar click
  if (progressBar) {
    progressBar.addEventListener("click", (e) => {
      const rect = progressBar.getBoundingClientRect();
      const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (video.duration) video.currentTime = pct * video.duration;
    });

    // Drag to seek
    let dragging = false;
    progressBar.addEventListener("mousedown", () => { dragging = true; });
    document.addEventListener("mousemove", (e) => {
      if (!dragging) return;
      const rect = progressBar.getBoundingClientRect();
      const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (video.duration) video.currentTime = pct * video.duration;
    });
    document.addEventListener("mouseup", () => { dragging = false; });
  }

  // Volume toggle (video element mute)
  if (volBtn) {
    volBtn.addEventListener("click", () => {
      if (!music) return;
      music.muted = !music.muted;
      volBtn.innerHTML = music.muted ? VOL_OFF : VOL_ON;
    });
  }

  // Fullscreen
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      if      (video.requestFullscreen)       video.requestFullscreen();
      else if (video.webkitRequestFullscreen)  video.webkitRequestFullscreen();
    });
  }
}

// Wire up Video 1
setupPlayer({
  video:           mainVideo,
  music:           music1,
  playWithSoundBtn: document.getElementById("playBtn"),
  playPauseBtn:    document.getElementById("playPauseBtn1"),
  centerBtn:       document.getElementById("centerBtn1"),
  centerOverlay:   document.getElementById("centerOverlay1"),
  timeEl:          document.getElementById("time1"),
  progressBar:     document.getElementById("progress1"),
  progressFill:    document.getElementById("progressFill1"),
  progressThumb:   document.getElementById("progressThumb1"),
  volBtn:          document.getElementById("volBtn1"),
  fullscreenBtn:   document.getElementById("fullscreenBtn1"),
});

// Wire up Video 2
setupPlayer({
  video:           secondVideo,
  music:           music2,
  playWithSoundBtn: document.getElementById("playBtn2"),
  playPauseBtn:    document.getElementById("playPauseBtn2"),
  centerBtn:       document.getElementById("centerBtn2"),
  centerOverlay:   document.getElementById("centerOverlay2"),
  timeEl:          document.getElementById("time2"),
  progressBar:     document.getElementById("progress2"),
  progressFill:    document.getElementById("progressFill2"),
  progressThumb:   document.getElementById("progressThumb2"),
  volBtn:          document.getElementById("volBtn2"),
  fullscreenBtn:   document.getElementById("fullscreenBtn2"),
});





});