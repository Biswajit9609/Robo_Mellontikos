import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating orbs
    const orbs = [];
    const orbCount = 8;

    class Orb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 150 + 50;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.hue = Math.random() * 360;
        this.saturation = 70 + Math.random() * 30;
        this.lightness = 50 + Math.random() * 20;
        this.alpha = 0.1 + Math.random() * 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.hue += 0.5;

        if (this.x < -this.radius) this.x = canvas.width + this.radius;
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = canvas.height + this.radius;
        if (this.y > canvas.height + this.radius) this.y = -this.radius;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        
        gradient.addColorStop(0, `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`);
        gradient.addColorStop(0.5, `hsla(${this.hue + 30}, ${this.saturation}%, ${this.lightness - 10}%, ${this.alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize orbs
    for (let i = 0; i < orbCount; i++) {
      orbs.push(new Orb());
    }

    // Geometric patterns
    const drawGeometricPattern = () => {
      const gridSize = 100;
      const offsetX = (time * 0.5) % gridSize;
      const offsetY = (time * 0.3) % gridSize;

      ctx.strokeStyle = 'rgba(249, 115, 22, 0.05)';
      ctx.lineWidth = 1;

      // Diagonal lines
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
          const adjustedX = x + offsetX;
          const adjustedY = y + offsetY;
          
          ctx.beginPath();
          ctx.moveTo(adjustedX, adjustedY);
          ctx.lineTo(adjustedX + gridSize * 0.7, adjustedY + gridSize * 0.7);
          ctx.stroke();
        }
      }

      // Hexagonal pattern
      ctx.strokeStyle = 'rgba(217, 70, 239, 0.03)';
      const hexSize = 80;
      for (let x = 0; x < canvas.width + hexSize; x += hexSize * 1.5) {
        for (let y = 0; y < canvas.height + hexSize; y += hexSize * Math.sqrt(3)) {
          const hexX = x + (y % (hexSize * Math.sqrt(3) * 2) < hexSize * Math.sqrt(3) ? 0 : hexSize * 0.75);
          const hexY = y + Math.sin(time * 0.001 + x * 0.01) * 10;
          drawHexagon(hexX, hexY, hexSize * 0.3);
        }
      }
    };

    const drawHexagon = (x, y, size) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const hexX = x + size * Math.cos(angle);
        const hexY = y + size * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(hexX, hexY);
        } else {
          ctx.lineTo(hexX, hexY);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };

    // Flowing waves
    const drawWaves = () => {
      const waveHeight = 100;
      const waveLength = 200;
      
      // Top wave
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let x = 0; x <= canvas.width; x += 10) {
        const y = Math.sin((x / waveLength + time * 0.002) * Math.PI * 2) * waveHeight + waveHeight;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, 0);
      ctx.closePath();
      
      const topGradient = ctx.createLinearGradient(0, 0, 0, waveHeight * 2);
      topGradient.addColorStop(0, 'rgba(249, 115, 22, 0.1)');
      topGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = topGradient;
      ctx.fill();

      // Bottom wave
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x += 10) {
        const y = canvas.height - (Math.sin((x / waveLength + time * 0.003) * Math.PI * 2) * waveHeight + waveHeight);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      
      const bottomGradient = ctx.createLinearGradient(0, canvas.height - waveHeight * 2, 0, canvas.height);
      bottomGradient.addColorStop(0, 'transparent');
      bottomGradient.addColorStop(1, 'rgba(217, 70, 239, 0.1)');
      ctx.fillStyle = bottomGradient;
      ctx.fill();
    };

    // Particle system
    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.life = Math.random();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 10;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = -Math.random() * 3 - 1;
        this.size = Math.random() * 3 + 1;
        this.life = 1;
        this.decay = Math.random() * 0.01 + 0.005;
        this.color = this.getRandomColor();
      }

      getRandomColor() {
        const colors = [
          { r: 249, g: 115, b: 22 },  // Orange
          { r: 217, g: 70, b: 239 },  // Purple
          { r: 14, g: 165, b: 233 },  // Blue
          { r: 34, g: 197, b: 94 }    // Green
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.vy += 0.02; // gravity

        if (this.life <= 0 || this.y > canvas.height + 10) {
          this.reset();
        }
      }

      draw() {
        const alpha = this.life * 0.6;
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${alpha})`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Neural network effect
    const nodes = [];
    const nodeCount = 30;

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.connections = [];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249, 115, 22, 0.6)';
        ctx.fill();

        // Draw connections
        this.connections.forEach(connection => {
          const distance = Math.sqrt(
            Math.pow(this.x - connection.x, 2) + Math.pow(this.y - connection.y, 2)
          );
          
          if (distance < 150) {
            const alpha = (1 - distance / 150) * 0.3;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.strokeStyle = `rgba(217, 70, 239, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }
    }

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    // Connect nodes
    nodes.forEach(node => {
      const nearbyNodes = nodes.filter(otherNode => {
        if (otherNode === node) return false;
        const distance = Math.sqrt(
          Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
        );
        return distance < 200;
      });
      node.connections = nearbyNodes.slice(0, 3);
    });

    const animate = () => {
      time += 1;
      
      // Clear canvas with subtle gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, 'rgba(15, 15, 35, 0.1)');
      bgGradient.addColorStop(0.5, 'rgba(26, 26, 46, 0.1)');
      bgGradient.addColorStop(1, 'rgba(22, 33, 62, 0.1)');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all effects
      drawGeometricPattern();
      drawWaves();

      // Update and draw orbs
      orbs.forEach(orb => {
        orb.update();
        orb.draw();
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Update and draw neural network
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f172a 75%, #1e1b4b 100%)',
        opacity: 0.8
      }}
    />
  );
};

export default AnimatedBackground;