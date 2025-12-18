// Основной скрипт для сайта

// Обработка формы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Получаем данные формы
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Простая валидация
            if (name && email && message) {
                // В реальном проекте здесь был бы AJAX-запрос
                alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим вам на email: ${email}`);
                contactForm.reset();
            } else {
                alert('Пожалуйста, заполните все поля формы.');
            }
        });
    }
    
    // Добавляем интерактивность карточкам котиков
    const catCards = document.querySelectorAll('.cat-card');
    catCards.forEach(card => {
        card.addEventListener('click', function() {
            const catName = this.querySelector('h3').textContent;
            alert(`Вы выбрали котика: ${catName}! 🐱`);
        });
    });
    
    // Меняем цвет логотипа при наведении
    const logoIcon = document.querySelector('.logo i');
    if (logoIcon) {
        logoIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(15deg) scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logoIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0) scale(1)';
        });
    }
    
    // Показываем текущую дату в консоли (для демонстрации)
    const now = new Date();
    console.log(`Добро пожаловать в Кошачий уголок! Сегодня: ${now.toLocaleDateString('ru-RU')}`);
});