/* ==========================================================================
   JS_INTERACTIONS.js - AVIS Frosinone Restyling
   Logica per slider, FAQ, quiz, GA4 e componenti custom
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
    initFAQ();
    initQuiz();
    initImpactCounter();
    initGA4Tracking();
    initStickyWhatsApp();
    initTestimonialSlider();
});

/* 1. SLIDER LOGIC (Evoluzione dell'attuale) */
function initSlider() {
    const slides = document.querySelectorAll('.full-row');
    const dots = document.querySelectorAll('.nav-dot');
    const progressBar = document.getElementById('progress-bar');
    const counter = document.getElementById('slide-counter');
    let currentIndex = 0;
    let isTransitioning = false;

    const updateSlider = (index) => {
        if (isTransitioning) return;
        isTransitioning = true;

        const currentSlide = document.querySelector('.full-row.active');
        currentSlide.classList.remove('active');
        currentSlide.classList.add('exiting');

        setTimeout(() => {
            currentSlide.classList.remove('exiting');
            slides[index].classList.add('active');

            dots.forEach(d => d.classList.remove('active'));
            dots[index].classList.add('active');

            if (progressBar) progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
            if (counter) counter.innerText = `${index + 1} / ${slides.length}`;

            currentIndex = index;
            isTransitioning = false;
        }, 600);
    };

    // Wheel Event
    window.addEventListener('wheel', (e) => {
        if (isTransitioning) return;
        if (e.deltaY > 0 && currentIndex < slides.length - 1) updateSlider(currentIndex + 1);
        if (e.deltaY < 0 && currentIndex > 0) updateSlider(currentIndex - 1);
    }, { passive: true });

    // Click Dots
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => updateSlider(idx));
    });

    // Touch Support
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => { touchStartY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 50 && currentIndex < slides.length - 1) updateSlider(currentIndex + 1);
        if (touchStartY - touchEndY < -50 && currentIndex > 0) updateSlider(currentIndex - 1);
    }, { passive: true });
}

/* 2. FAQ ACCORDION + FILTER */
function initFAQ() {
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            // Close others
            document.querySelectorAll('.faq-item.open').forEach(el => {
                el.classList.remove('open');
                el.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
            });

            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // Search Filter
    const searchInput = document.getElementById('faq-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.faq-item').forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(term) ? 'block' : 'none';
            });
        });
    }
}

/* 3. ELIGIBILITY QUIZ LOGIC */
function initQuiz() {
    const quiz = document.getElementById('eligibility-quiz');
    if (!quiz) return;

    const steps = quiz.querySelectorAll('.quiz-step');
    const nextBtns = quiz.querySelectorAll('.btn-next');
    let answers = [];

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentStep = quiz.querySelector('.quiz-step.active');
            const nextStepId = btn.dataset.next;
            answers.push(btn.dataset.value);

            currentStep.classList.remove('active');
            const nextStep = quiz.querySelector(`[data-step="${nextStepId}"]`);
            if (nextStep) {
                nextStep.classList.add('active');
            } else {
                showQuizResult(answers);
            }

            // GA4 tracking
            trackEvent('quiz_step_complete', { step: currentStep.dataset.step });
        });
    });

    function showQuizResult(ans) {
        const resultContainer = quiz.querySelector('.quiz-result');
        let isEligible = !ans.includes('no'); // Esempio logica semplificata

        quiz.querySelector('.quiz-steps-container').style.display = 'none';
        resultContainer.style.display = 'block';

        const statusEl = resultContainer.querySelector('.status-text');
        const waLink = resultContainer.querySelector('.wa-link');

        if (isEligible) {
            statusEl.innerText = "Sembra che tu sia idoneo! 🎉";
            waLink.href = `https://wa.me/393774901081?text=Ciao, ho completato il quiz sul sito e sembro idoneo alla donazione. Vorrei prenotare!`;
        } else {
            statusEl.innerText = "Potrebbero esserci dei vincoli temporanei. Verifichiamo insieme?";
            waLink.href = `https://wa.me/393774901081?text=Ciao, ho fatto il quiz e vorrei chiarire alcuni dubbi sulla mia idoneità.`;
        }

        trackEvent('quiz_complete', { result: isEligible ? 'eligible' : 'not_eligible' });
    }
}

/* 4. IMPACT COUNTER (Animation on scroll) */
function initImpactCounter() {
    const counters = document.querySelectorAll('.counter-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1.0 });

    counters.forEach(c => observer.observe(c));

    function animateCounter(el) {
        const target = parseInt(el.dataset.target);
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const update = () => {
            count += increment;
            if (count < target) {
                el.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                el.innerText = target;
            }
        };
        update();
    }
}

/* 5. GA4 TRACKING WRAPPER */
function initGA4Tracking() {
    // WhatsApp Clicks
    document.querySelectorAll('[href*="wa.me"], [href*="whatsapp"]').forEach(el => {
        el.addEventListener('click', () => {
            trackEvent('whatsapp_click', {
                location: el.dataset.location || 'unknown',
                urgency: el.classList.contains('urgency')
            });
        });
    });

    // Phone Clicks
    document.querySelectorAll('[href^="tel:"]').forEach(el => {
        el.addEventListener('click', () => {
            trackEvent('phone_click', { location: el.dataset.location || 'unknown' });
        });
    });

    // Scroll Depth
    let scrollMarkers = [25, 50, 75, 90];
    let markersReached = [];
    window.addEventListener('scroll', () => {
        let percent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        scrollMarkers.forEach(m => {
            if (percent >= m && !markersReached.includes(m)) {
                markersReached.push(m);
                trackEvent('scroll_depth', { depth_percent: m });
            }
        });
    }, { passive: true });
}

function trackEvent(name, params = {}) {
    if (typeof gtag === 'function') {
        gtag('event', name, params);
    } else {
        console.log(`GA4 Event: ${name}`, params);
    }
}

/* 6. TESTIMONIAL SLIDER */
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    if (!track || cards.length === 0) return;

    let index = 0;
    setInterval(() => {
        index = (index + 1) % cards.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }, 5000);
}

/* 7. STICKY WHATSAPP BEHAVIOR */
function initStickyWhatsApp() {
    const sticky = document.querySelector('.whatsapp-sticky');
    if (!sticky) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 200) {
            sticky.style.transform = 'scale(0)';
            sticky.style.opacity = '0';
        } else {
            sticky.style.transform = 'scale(1)';
            sticky.style.opacity = '1';
        }
        lastScroll = currentScroll;
    }, { passive: true });
}
