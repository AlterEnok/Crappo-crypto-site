document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navList = document.querySelector('.nav');

    burger.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.stat-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Удаляем наблюдателя после того, как элемент стал видимым
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Настройка порога видимости
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const whyImg = document.querySelector('.why-img');
    const whyRight = document.querySelector('.why-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('why-img')) {
                    entry.target.classList.add('visible', 'bounce');
                } else if (entry.target.classList.contains('why-right')) {
                    entry.target.classList.add('visible');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Настройка порога видимости
    });

    observer.observe(whyImg);
    observer.observe(whyRight);
});

document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.roadmap-title');
    const items = document.querySelectorAll('.roadmap__item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('roadmap-title')) {
                    entry.target.classList.add('visible');
                } else if (entry.target.classList.contains('roadmap__item')) {
                    entry.target.classList.add('visible');
                    const picture = entry.target.querySelector('.roadmap__picture');
                    if (picture) {
                        picture.classList.add('visible');
                    }
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Настройка порога видимости
    });

    observer.observe(title);
    items.forEach(item => {
        observer.observe(item);
    });
});