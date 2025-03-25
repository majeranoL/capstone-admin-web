document.addEventListener('DOMContentLoaded', () => {
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xd23e3e,
    backgroundColor: 0xffffff,
    points: 20,
    maxDistance: 20.00,
    spacing: 16.00,
    showDots: true,
    speed: 1.5,
    connectionDistance: 80,
    dynamicConnectionDistance: true
  });
});
