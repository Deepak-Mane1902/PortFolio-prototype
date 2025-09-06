    var crsr = document.querySelector("#cursor");
var crsrBr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
     crsr.style.left =dets.x+"px"
     crsr.style.top =dets.y+"px"   
     crsrBr.style.left =dets.x -200+"px"
     crsrBr.style.top =dets.y -200+"px"   
})
    
    
    const scrollLine = document.getElementById('scroll-line');
    const projectItems = document.querySelectorAll('.project');
    const dots = document.querySelectorAll('.dot');
    const lastProject = projectItems[projectItems.length - 1];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const dot = el.parentElement.querySelector('.dot');

          el.classList.remove('opacity-0');
          el.classList.add('animate-slide-in');

          // Show red dot
          if (dot) dot.classList.add('visible');

          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.3,
    });

    projectItems.forEach(item => observer.observe(item));

    // Update scroll line height dynamically
    window.addEventListener('scroll', () => {
      const rect = lastProject.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const heightToBottom = rect.top + scrollTop + rect.height / 2;
      const page4Top = document.getElementById('page4').offsetTop;

      const redLineHeight = Math.min(heightToBottom - page4Top, window.innerHeight + scrollTop - page4Top);
      scrollLine.style.height = redLineHeight + 'px';

      // Position all dots vertically on the red line
      document.querySelectorAll('.project-group').forEach(group => {
        const dot = group.querySelector('.dot');
        const groupRect = group.getBoundingClientRect();
        const dotTop = group.offsetTop + group.offsetHeight;
        dot.style.top = `${group.offsetTop + group.offsetHeight / 2}px`;
      });
    });

    // Trigger dot position on page load too
    window.dispatchEvent(new Event('scroll'));

      window.addEventListener("load", () => {
      const line = document.getElementById("line");
      line.classList.add("line-animate");
    });

        const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star particles
    const stars = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 15 + 5,
        speed: Math.random() * 4 + 2,
        opacity: Math.random()
      });
    }

    // Draw stars (falling lines)
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 5;

      stars.forEach(star => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x, star.y + star.length);
        ctx.strokeStyle = `rgb(65, 228, 80, ${star.opacity})`;
        ctx.stroke();
      });
    }

    // Update positions
    function updateStars() {
      stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -star.length;
          star.x = Math.random() * canvas.width;
          star.speed = Math.random() * 4 - 2 ;
          star.opacity = Math.random();
        }
      });
    }

    // Animation loop
    function animate() {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    }
    animate();

    // Resize handler
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });