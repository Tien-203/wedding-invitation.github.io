const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    // Start showing left 2/3 of image, then gradually reveal the rest
    let xPosition = Math.max(-150, offset*(-0.2) + 100);
    parallax.style.backgroundPositionX = xPosition + "px";
})


window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=3100;
    parallax1.style.backgroundPositionY = offset*(0.1) + "px";
})

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    offset-=4800;
    parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
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
            date: new Date('2025-10-26T18:00:00').getTime(),
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