const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

// Check if device is mobile
function isMobile() {
    return window.innerWidth <= 768;
}

window.addEventListener("scroll", function()
{
    // Disable parallax on mobile devices
    if (isMobile()) return;
    
    let offset = window.pageYOffset;
    // Start showing left 2/3 of image, then gradually reveal the rest
    let xPosition = Math.max(-150, offset*(-0.2) + 100);
    if (parallax) {
        parallax.style.backgroundPositionX = xPosition + "px";
    }
})

window.addEventListener("scroll", function()
{
    // Disable parallax on mobile devices
    if (isMobile()) return;
    
    let offset = window.pageYOffset;
    offset-=3100;
    if (parallax1) {
        parallax1.style.backgroundPositionY = offset*(0.1) + "px";
    }
})

window.addEventListener("scroll", function()
{
    // Disable parallax on mobile devices
    if (isMobile()) return;
    
    let offset = window.pageYOffset;
    offset-=4800;
    if (parallax2) {
        parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
    }
})

function myFunction() {
    document.getElementById("check").checked = false;
}

function scrollToSection() {
    // Close mobile menu if open
    document.getElementById("check").checked = false;
    
    // Find the venues section
    const venuesSection = document.getElementById("stay");
    
    if (venuesSection) {
        // Scroll to the section
        venuesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}


  
function reveal() {
var reveals = document.querySelectorAll(".reveal");
  
for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100; // Reduced threshold for better visibility
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

// Initialize reveal on page load
document.addEventListener('DOMContentLoaded', function() {
    reveal();
});
  
window.addEventListener("scroll", reveal);

// Multi-stage Countdown Timer: Nhà Nữ → Nhà Nam → Báo Hỷ
function updateCountdown() {
    // Wedding events in chronological order
    const events = [
        {
            name: 'Tiệc Cưới Nhà Nữ',
            date: new Date('2025-10-11T10:00:00').getTime(),
            emoji: '💒',
            color: '#E91E63'
        },
        {
            name: 'Tiệc Cưới Nhà Nam',
            date: new Date('2025-10-12T10:00:00').getTime(),
            emoji: '💍',
            color: '#8B4A8C'
        },
        {
            name: 'Tiệc Báo Hỷ',
            date: new Date('2025-10-25T18:00:00').getTime(),
            emoji: '🎉',
            color: '#667eea'
        }
    ];

    const now = new Date().getTime();
    const countdownElement = document.getElementById('countdown');
    
    // Find the next upcoming event
    let currentEvent = null;
    for (let event of events) {
        if (now < event.date) {
            currentEvent = event;
            break;
        }
    }
    
    if (currentEvent) {
        const distance = currentEvent.date - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display countdown without event info
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <div class="countdown-number">${days}</div>
                <div class="countdown-label">Ngày</div>
            </div>
            <div class="countdown-item">
                <div class="countdown-number">${hours}</div>
                <div class="countdown-label">Giờ</div>
            </div>
            <div class="countdown-item">
                <div class="countdown-number">${minutes}</div>
                <div class="countdown-label">Phút</div>
            </div>
            <div class="countdown-item">
                <div class="countdown-number">${seconds}</div>
                <div class="countdown-label">Giây</div>
            </div>
        `;
    } else {
        // All events have passed
        countdownElement.innerHTML = `
            <div class="countdown-completed">
                <div style="font-size: 2rem; color: #212121; margin-bottom: 10px;">
                    🎊 Tất Cả Sự Kiện Đã Hoàn Thành! 🎊
                </div>
                <div style="font-size: 1.2rem; color: #666;">
                    Cảm ơn tất cả mọi người đã tham dự!
                </div>
            </div>
        `;
    }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// QR Code download functionality
function downloadQRCode(imageUrl, filename) {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add click event listeners to QR code images when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find all QR code images
    const qrImages = document.querySelectorAll('.qr-item img');
    
    qrImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            const imageUrl = this.src;
            let filename;
            
            // Determine filename based on the QR code
            if (index === 0) {
                filename = 'QR_Co_Dau_Thu_Hang.png';
            } else if (index === 1) {
                filename = 'QR_Chu_Re_Ngoc_Tien.png';
            } else {
                filename = `QR_Code_${index + 1}.png`;
            }
            
            // Download the image
            downloadQRCode(imageUrl, filename);
        });
        
        // Add title attribute for better UX
        if (index === 0) {
            img.title = 'Click để tải xuống QR Code Cô Dâu';
        } else if (index === 1) {
            img.title = 'Click để tải xuống QR Code Chú Rể';
        }
    });
});

// Background Music Control
let isPlaying = true;
const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.className = 'fas fa-volume-mute';
        musicToggle.classList.add('muted');
        musicToggle.title = 'Bật nhạc nền';
        isPlaying = false;
    } else {
        music.play().catch(e => {
            console.log('Auto-play was prevented:', e);
        });
        musicIcon.className = 'fas fa-volume-up';
        musicToggle.classList.remove('muted');
        musicToggle.title = 'Tắt nhạc nền';
        isPlaying = true;
    }
}

// Auto-play music when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Try to play music immediately
    music.play().catch(e => {
        console.log('Auto-play was prevented, will play on first user interaction:', e);
        // If auto-play is blocked, play on first user interaction
        document.addEventListener('click', function() {
            if (isPlaying) {
                music.play().catch(e => {
                    console.log('Auto-play was prevented:', e);
                });
            }
        }, { once: true });
    });
    
    // Set initial UI state for music playing
    musicIcon.className = 'fas fa-volume-up';
    musicToggle.classList.remove('muted');
    musicToggle.title = 'Tắt nhạc nền';
});

// Set initial volume
music.volume = 0.3;