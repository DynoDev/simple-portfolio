document.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateText, 795);
});

function typeWriterEffect(element, text, speed) {
    element.textContent = "";
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function updateText() {
    let welcome = "Welcome to my Portfolio!";

    const text = document.getElementById("welcome");
    if (text) {
        typeWriterEffect(text, welcome, 50);
    }
}

function goTo(n) {
    const urls = {
        'github': 'https://github.com/DynoDev',
        'linkedin': 'https://www.linkedin.com/in/najwan-aji-a97284300',
        'instagram': 'https://www.instagram.com/',
        'mail': 'mailto:najwansudarma16@gmail.com',

        'projLink1': '',
        'projLink2': '',
    }
    if (n == 'mail') {
        window.location.href = urls[n];
    } else if (urls) {
        window.open(urls[n], '_blank');
    }
}

function showModal(n) {
    const modal = document.getElementById(n);
    const overlay = document.getElementById('overlay');

    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function hideModal(n) {
    const modal = document.getElementById(n);
    const overlay = document.getElementById('overlay');

    modal.classList.add('closing');
    overlay.style.display = 'none';

    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('closing');
    }, 300);
}

function showSkillContent(type) {
    document.querySelectorAll('.mTab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
    
    document.querySelector(`button[onclick*="${type}"]`).classList.add('active');
    document.getElementById(`${type}-skills`).classList.add('active');
}

let currentSlideIndex = 1;

function changeSlide(n) {
    showSlides(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlides(currentSlideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("preview-slide");
    const dots = document.getElementsByClassName("dot");
    const info = document.getElementsByClassName("project-info");
    
    if (n > slides.length) currentSlideIndex = 1;
    if (n < 1) currentSlideIndex = slides.length;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
        info[i].classList.remove("active");
    }
    
    slides[currentSlideIndex-1].classList.add("active");
    dots[currentSlideIndex-1].classList.add("active");
    info[currentSlideIndex-1].classList.add("active");
}

let currentContent = 'home';

function switchContent(n) {
    if (n === currentContent) return;

    const text = n.charAt(0).toUpperCase() + n.slice(1);
    const currentPage = document.getElementById('currentPage')
    currentPage.innerHTML = `${text} <i class="fas fa-caret-down"></i>`;

    document.getElementById(currentContent).style.display = 'none';
    document.getElementById(n).style.display = 'block';

    currentContent = n;
}