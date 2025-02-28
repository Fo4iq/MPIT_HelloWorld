
// Поиск всех кнопок для работы с пользователем
const authbtn = document.querySelectorAll('.athbtn')

// Анимация изменения радиуса обводки

authbtn.forEach(box => {
    box.addEventListener('mouseover', function() {
        this.style.borderRadius = '5px'
    });
    box.addEventListener('mouseout', function() {
        this.style.borderRadius = '20px'
    })
})

// Поиск всех навигационных кнопок
const navbtn = document.querySelectorAll('.navbtn')

// Добавляем анимации подчеркивания и изменения цвета фона

navbtn.forEach(box => {
    box.addEventListener('mouseover', function() {
        this.style.textDecoration = 'underline orange'
        this.style.backgroundColor = 'rgb(233, 233, 233)'
    });
    box.addEventListener('mouseout', function() {
        this.style.textDecoration = 'none orange'
        this.style.backgroundColor = 'white'
    })
})