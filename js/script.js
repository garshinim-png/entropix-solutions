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
     LIVE METRICS (HERO)
  ========================== */
  function updateHeroMetrics() {
    const acc = document.getElementById("hero-accuracy");
    const lat = document.getElementById("hero-latency");

    if (acc && lat) {
      acc.innerText = (97 + Math.floor(Math.random() * 3)) + "%";
      lat.innerText = (90 + Math.floor(Math.random() * 40)) + "ms";
    }
  }

  setInterval(updateHeroMetrics, 2000);
  updateHeroMetrics();


  /* =========================
     ABOUT METRICS DASHBOARD
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

});