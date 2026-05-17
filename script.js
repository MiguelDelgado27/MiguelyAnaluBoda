function mostrarRSVP() {
    const section = document.getElementById('rsvp');
    section.classList.remove('hidden');
  
    setTimeout(() => {
        section.classList.remove('opacity-0', 'translate-y-6');
        section.classList.add('opacity-100', 'translate-y-0');
    }, 50);
  
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
// Music Player
document.addEventListener('DOMContentLoaded', () => {
const playBtn = document.querySelector('.w-10.h-10.rounded-full.bg-primary');
const playIcon = playBtn?.querySelector('.material-symbols-outlined');
const audioPlayer = document.getElementById('audioPlayer');

if (playBtn && playIcon) {
    playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.textContent = 'pause';
        playIcon.setAttribute('data-icon', 'pause');
        } else {
        audioPlayer.pause();
        playIcon.textContent = 'play_arrow';
        playIcon.setAttribute('data-icon', 'play_arrow');
        }
    });
}

audioPlayer.addEventListener('ended', () => {
    playIcon.textContent = 'play_arrow';
    playIcon.setAttribute('data-icon', 'play_arrow');
});
});

//contador
const targetDate = new Date('Julio 11, 2026 16:00:00').getTime();
            
function updateCountdown() {
const now = new Date().getTime();
const distance = targetDate - now;

if (distance < 0) return;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById('days').innerText = days.toString().padStart(2, '0');
document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();