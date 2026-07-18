export function initFlagEffect() {
  const flags = ['/images/icons/vn_small.png', '/images/icons/it_small.png'];
  
  // 1. Tạo hiệu ứng rơi
  const intervalId = setInterval(() => {
    const flag = document.createElement('img');
    flag.src = flags[Math.floor(Math.random() * flags.length)];
    flag.className = 'flag-falling';
    flag.style.left = Math.random() * 100 + 'vw';
    flag.style.animationDuration = '5s'; // Rơi trong đúng 5s
    flag.style.width = '30px'; 
    flag.style.height = '30px';
    document.body.appendChild(flag);

    // Xóa cờ sau khi rơi xong
    setTimeout(() => { flag.remove(); }, 5000);
  }, 300); 

  // dừng sau 5s
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}