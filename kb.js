  document.getElementById("openScroll").addEventListener("click", () => {
  gsap.to(seal, { scale: 0, duration: 0.5, ease: "power2.out" });
  scroll.style.height = "700px";
  gsap.to(text, { delay: 1, opacity: 1, duration: 1.5 });
  scroll.scrollIntoView({ behavior: "smooth" });
});
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'twinkle-star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      star.style.animationDelay = `${Math.random() * 3}s`;
      document.querySelector('.stars-bg').appendChild(star);
    }
    for (let i = 0; i < 10; i++) {
      const shooting = document.createElement('div');
      shooting.className = 'shooting-star';
      shooting.style.top = `${Math.random() * 50}%`;
      shooting.style.left = `${Math.random() * 100}%`;
      shooting.style.animationDelay = `${Math.random() * 15}s`;
      document.querySelector('.stars-bg').appendChild(shooting);
    }   
  const scroll = document.getElementById("scrollImage");
  const text = document.getElementById("scrollText");
  const seal = document.getElementById("seal");
  document.getElementById("openScroll").addEventListener("click", () => {
    gsap.to(seal, { scale: 0, duration: 0.5, ease: "power2.out" });
    scroll.style.height = "700px";
    gsap.to(text, { delay: 1, opacity: 1, duration: 1.5 });
  });
  // Stars on canvas
  const canvas = document.getElementById("skyCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = Array.from({ length: 200 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    alpha: Math.random()
  }));
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
      ctx.fill();
    });
  }
  function animateStars() {
    stars.forEach(star => {
      star.alpha += (Math.random() - 0.5) * 0.05;
      if (star.alpha < 0.1) star.alpha = 0.1;
      if (star.alpha > 1) star.alpha = 1;
    });
    drawStars();
    requestAnimationFrame(animateStars);
  }
  drawStars();
  animateStars();
 const book = document.getElementById('book');
const pageTexts = [
  "Page 1: Once upon a time, in a world filled with stardust, Kritika was born.",
  "Page 2: Her smile was so bright, even the moon paused to admire it.",
  "Page 3: As a child, she laughed like bells ringing in a garden of dreams.",
  "Page 4: Kritika's heart glowed with kindness, touching everyone she met.",
  "Page 5: She made friends not with words, but with warmth in her soul.",
  "Page 6: Every birthday was a reminder that the universe gave us a gift.",
  "Page 7: She paints her world with joy, music, and a sparkle in her eyes.",
  "Page 8: Even silence around her feels like a peaceful lullaby.",
  "Page 9: When she speaks, even flowers seem to turn toward her voice.",
  "Page 10: She has a courage that can move mountains and melt storms.",
  "Page 11: Kritika, the Queen of Radiance, lights up rainy days.",
  "Page 12: Stars twinkle brighter when she wishes upon them.",
  "Page 13: She's a melody only hearts in tune with love can hear.",
  "Page 14: Her kindness isn't random; it's instinct.",
  "Page 15: Like pages in a book, her story only gets more beautiful.",
  "Page 16: On this 20th birthday, the world celebrates *you*, dear Kritika.",
  "Page 17: May this new chapter be full of magic, growth, and wonder.",
  "Page 18: Thank you for being you — radiant, rare, and remarkable.",
  "Page 19: You are loved, cherished, and forever admired.",
  "Page 20: The end of this book... is just the beginning of your legend. 💫"
];
let currentPage = 0;
const totalPages = pageTexts.length;
const pages = [];
function createBook() {
  for (let i = totalPages - 1; i >= 0; i--) {
    const page = document.createElement('div');
    page.className = 'page';
    page.style.zIndex = `${totalPages - i}`;
    page.innerHTML = `<div class="page-content">${pageTexts[i]}</div>`;
    book.appendChild(page);
    pages.unshift(page); // So index matches visually
  }
}
function updateBook() {
  pages.forEach((page, index) => {
    if (index < currentPage) {
      page.classList.add('flipped');
    } else {
      page.classList.remove('flipped');
    }
  });
}
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updateBook();
  }
}
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
}
createBook();
updateBook();
particlesJS("particles-js", {
    particles: {
      number: { value: 50 },
      color: { value: "#fff9c4" },
      shape: { type: "circle" },
      opacity: {
        value: 0.4,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        direction: "top",
        speed: 0.6
      }
    },
    interactivity: {
      events: {
        onhover: { enable: false },
        onclick: { enable: false }
      }
    },
    retina_detect: true
  });

 

const compliments = [
  "She warms hearts like the sun.",
  "Her kindness has its own gravity.",
  "She orbits joy wherever she goes.",
  "Kritika — the solar center of every smile.",
  "Radiance is her natural state.",
  "She's a whole galaxy in one girl."
];

const spaceText = document.getElementById("space-text");
let spaceIndex = 0;

function updateCompliment() {
  spaceText.innerText = compliments[spaceIndex];
  spaceIndex = (spaceIndex + 1) % compliments.length;
}

setInterval(updateCompliment, 6000);
updateCompliment();
 window.addEventListener("load", function () {
    const canvas = document.getElementById("star-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const bgStars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      opacity: Math.random(),
      speed: Math.random() * 0.3 + 0.1
    }));

    const baseX = canvas.width / 2 - 300;
    const baseY = canvas.height / 2 - 100;
    const spacing = 100;

    const letters = {
      K: [
        { x: 0, y: 0 }, { x: 0, y: 40 }, { x: 0, y: 80 },
        { x: 0, y: 40 }, { x: 20, y: 40 },
        { x: 20, y: 40 }, { x: 40, y: 0 },
        { x: 20, y: 40 }, { x: 40, y: 80 }
      ],
      R: [
        { x: 0, y: 0 }, { x: 0, y: 40 }, { x: 0, y: 80 },
        { x: 0, y: 0 }, { x: 30, y: 0 }, { x: 30, y: 40 }, { x: 0, y: 40 },
        { x: 0, y: 40 }, { x: 30, y: 80 }
      ],
      I: [
        { x: 0, y: 0 }, { x: 40, y: 0 },
        { x: 20, y: 0 }, { x: 20, y: 80 },
        { x: 0, y: 80 }, { x: 40, y: 80 }
      ],
      T: [
        { x: 0, y: 0 }, { x: 60, y: 0 },
        { x: 30, y: 0 }, { x: 30, y: 80 }
      ],
      A: [
        { x: 0, y: 80 }, { x: 20, y: 0 }, { x: 40, y: 80 },
        { x: 10, y: 40 }, { x: 30, y: 40 }
      ]
    };

    const sequence = ["K", "R", "I", "T", "I", "K", "A"];
    const kritikaStars = [];
    let offsetX = 0;

    for (const letter of sequence) {
      const points = letters[letter];
      for (const pt of points) {
        kritikaStars.push({
          x: baseX + offsetX + pt.x,
          y: baseY + pt.y
        });
      }
      offsetX += spacing;
    }

    let revealedStars = 0;

    function drawBackground() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of bgStars) {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      }
    }

    function drawConstellation() {
      ctx.strokeStyle = "rgba(255,255,255,0.7)";
      ctx.lineWidth = 1.2;

      for (let i = 0; i < revealedStars; i++) {
        const star = kritikaStars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        if (i > 0) {
          const prev = kritikaStars[i - 1];
          if (Math.abs(prev.x - star.x) < 100) {
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(star.x, star.y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      drawBackground();
      drawConstellation();
      requestAnimationFrame(animate);
    }

    animate();

    const revealInterval = setInterval(() => {
      if (revealedStars < kritikaStars.length) {
        revealedStars++;
      } else {
        clearInterval(revealInterval);
      }
    }, 200);
  });


 

  window.onload = function () {
    const heartCanvas = document.getElementById("heartCanvas");
    const ctx = heartCanvas.getContext("2d");
    const fireworkCanvas = document.getElementById("fireworkCanvas");
    const fireCtx = fireworkCanvas.getContext("2d");
    const birthdayMessage = document.getElementById("birthdayMessage");
    const launchBtn = document.getElementById("launchBtn");

    let width = window.innerWidth;
    let height = window.innerHeight;
    heartCanvas.width = fireworkCanvas.width = width;
    heartCanvas.height = fireworkCanvas.height = height;

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      heartCanvas.width = fireworkCanvas.width = width;
      heartCanvas.height = fireworkCanvas.height = height;
    });

    let hearts = [];
    for (let i = 0; i < 120; i++) {
      hearts.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * (width / 3) + 50,
        size: Math.random() * 6 + 4,
        speed: Math.random() * 0.002 + 0.001,
        color: `hsla(${Math.random() * 360}, 100%, 70%, 0.8)`
      });
    }

    function drawHeart(x, y, size, color) {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      for (let t = 0; t <= Math.PI * 2; t += 0.01) {
        const hx = 16 * Math.pow(Math.sin(t), 3);
        const hy = -13 * Math.cos(t) + 5 * Math.cos(2 * t) + 2 * Math.cos(3 * t) + Math.cos(4 * t);
        ctx.lineTo((hx * size) / 32, (hy * size) / 32);
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }

    function animateHearts() {
      ctx.clearRect(0, 0, width, height);
      hearts.forEach(h => {
        h.angle += h.speed;
        const x3d = Math.cos(h.angle) * h.radius;
        const z3d = Math.sin(h.angle) * h.radius;
        const y3d = Math.sin(h.angle * 2) * h.radius * 0.3;
        const scale = 400 / (400 + z3d);
        const x2d = width / 2 + x3d * scale;
        const y2d = height / 2 + y3d * scale;
        drawHeart(x2d, y2d, h.size * scale, h.color);
      });
      if (!fireworkMode) requestAnimationFrame(animateHearts);
    }

    let fireworkMode = false;

    let fireworks = [];
    function launchFirework() {
      for (let i = 0; i < 60; i++) {
        fireworks.push({
          x: width / 2,
          y: height / 2,
          vx: Math.cos(i * (Math.PI * 2 / 60)) * (Math.random() * 6 + 2),
          vy: Math.sin(i * (Math.PI * 2 / 60)) * (Math.random() * 6 + 2),
          alpha: 1,
          radius: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
      }
    }

    function animateFireworks() {
      fireCtx.clearRect(0, 0, width, height);
      fireCtx.fillStyle = "rgba(0, 0, 0, 0.2)";
      fireCtx.fillRect(0, 0, width, height);
      for (let i = fireworks.length - 1; i >= 0; i--) {
        const f = fireworks[i];
        f.x += f.vx;
        f.y += f.vy;
        f.alpha -= 0.01;
        if (f.alpha <= 0) {
          fireworks.splice(i, 1);
          continue;
        }
        fireCtx.beginPath();
        fireCtx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        fireCtx.fillStyle = f.color;
        fireCtx.globalAlpha = f.alpha;
        fireCtx.fill();
      }
      fireCtx.globalAlpha = 1;
      requestAnimationFrame(animateFireworks);
    }

    launchBtn.addEventListener("click", () => {
      fireworkMode = !fireworkMode;
      if (fireworkMode) {
        heartCanvas.style.display = "none";
        fireworkCanvas.style.display = "block";
        fireworks = [];
        launchFirework();
        launchBtn.innerText = "❤️ Back to Hearts";
      } else {
        fireworkCanvas.style.display = "none";
        heartCanvas.style.display = "block";
        animateHearts();
        launchBtn.innerText = "🎆 Launch Fireworks";
      }
    });

    animateHearts();
    animateFireworks();
  };