const loichuc = [
  "Chúc bạn luôn xinh đẹp, rạng rỡ và tràn đầy niềm vui!",
  "Chúc bạn một ngày 20/10 thật ngọt ngào và đáng nhớ 💖",
  "Chúc cho nụ cười luôn nở trên môi bạn 🌸",
  "Mong mọi điều tốt đẹp nhất sẽ đến với bạn hôm nay!",
  "Bạn là bông hoa đẹp nhất giữa khu vườn cuộc sống 🌷"
];

const p = document.getElementById("loichuc");
const nut = document.getElementById("nut");
const canvas = document.getElementById("hoa");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function hienthichuc() {
  const i = Math.floor(Math.random() * loichuc.length);
  p.textContent = loichuc[i];
}
nut.onclick = hienthichuc;
hienthichuc();

// Hiệu ứng hoa bay
let hoa = [];
function themHoa() {
  hoa.push({
    x: Math.random() * canvas.width,
    y: -10,
    size: 8 + Math.random() * 6,
    speed: 1 + Math.random() * 2,
    goc: Math.random() * 2 * Math.PI
  });
}
function veHoa() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hoa.forEach((f, i) => {
    f.y += f.speed;
    f.x += Math.sin(f.goc) * 0.5;
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,192,203,0.7)";
    ctx.arc(f.x, f.y, f.size, 0, 2 * Math.PI);
    ctx.fill();
    if (f.y > canvas.height) hoa.splice(i, 1);
  });
}
function capnhat() {
  if (Math.random() < 0.1) themHoa();
  veHoa();
  requestAnimationFrame(capnhat);
}
capnhat();
