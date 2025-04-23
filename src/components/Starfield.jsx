// src/components/Starfield.jsx
import { useRef, useEffect } from "react";

export default function Starfield() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth / 2);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#a78bfa", "#f472b6", "#38bdf8", "#facc15", "#f9a8d4"];

    const stars = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.2,
      speed: Math.random() * 0.3 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random(),
      alphaChange: Math.random() * 0.01 + 0.005,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) star.y = height;
        star.alpha += star.alphaChange;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.alphaChange *= -1;
        }

        ctx.beginPath();
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth / 2;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
