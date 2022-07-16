window.addEventListener('DOMContentLoaded', () => {

//=   меню   
(function menu () {

    //variables
    const menu = document.querySelector('.menu');
    const burgerSquare = document.querySelector('.burger__square');
    const  menuList = document.querySelector('.menu__list');
    const  menuLineAll = menuList.querySelectorAll('.menu__line');
    const  menuLine = menuList.querySelector('.menu__line');
    const  burgerSpan = document.querySelector('.burger__span');
    
    //body-open menu
    burgerSquare.addEventListener('click', () => {
        let time = 0.3;
        menuLineAll.forEach(item => {
            item.style.transition = `all ${time}s ease`;
            item.classList.toggle('active');
            time += 0.1;
        });
        burgerSpan.classList.toggle('active-burger');
    });

    //body-fix menu
    let positionMenu = menu.getBoundingClientRect().top;
    window.addEventListener('scroll', (e) => {
        if(window.scrollY  >= positionMenu) {
            menu.classList.add('menu__fix');
        }else{
            menu.classList.remove('menu__fix');``
        }
    });
    
}());


//=   счёт м2   
const 
    praceMondeyInput = document.querySelector('.prace-mondey__input'),
    praceMondeyByn = document.querySelector('.prace-mondey__byn');
praceMondeyInput.addEventListener('input', () => {
    let num = +praceMondeyInput.value;
    praceMondeyByn.innerHTML = `${num * 15}<span> РУБ.</span>`;
});

//=   ввод телефона   
const 
    praceMondeyTelInput = document.querySelector('.prace-mondey__tel-input'),
    praceMondeyTel = document.querySelector('.prace-mondey__tel');
function symbolPlus (number, symbol) {
    if(praceMondeyTelInput.value.length === number) {
        praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0,number - 1) + symbol + praceMondeyTelInput.value[number - 1];
    }
}
praceMondeyTelInput.addEventListener('click', () => {
    praceMondeyTelInput.value = '+375';
    praceMondeyTelInput.addEventListener('input', () => {
        if(praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === '(' || praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === ')' || praceMondeyTelInput.value[praceMondeyTelInput.value.length - 1] === '-') {
            praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0, praceMondeyTelInput.value.length - 1);
        }else {
            if(praceMondeyTelInput.value.length < 4) {
                praceMondeyTelInput.value = '+375';
            }
            symbolPlus(5, '(');
            symbolPlus(8, ')');
            symbolPlus(12, '-');
            symbolPlus(15, '-');
            if(praceMondeyTelInput.value.length > 16) {
                praceMondeyTelInput.value = praceMondeyTelInput.value.slice(0,17);
            }
            if(/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)){
                praceMondeyTel.style.boxShadow = '0px 0px 2px 2px rgba(22, 255, 138, 0.663) inset';
            }else {
                praceMondeyTel.style.boxShadow = '0px 0px 3px 3px rgba(255, 22, 22, 0.9) inset';
            }
        }
        // проверка телефона в конце
        if(praceMondeyTelInput.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)) {
            if(praceMondeyTel.classList.contains('grey')) {
                praceMondeyTel.classList.remove('grey');
                praceMondeyTel.classList.add('green');
            }
        }else {
            if(praceMondeyTel.classList.contains('green')) {
                praceMondeyTel.classList.remove('green');
                praceMondeyTel.classList.add('grey');
            }
        }
    });
});

//= отправка на почту   
let form = document.forms[0];
let praceMondeyButton = document.querySelector('.prace-mondey__button');
praceMondeyButton.addEventListener('click', (e) => {
    e.preventDefault;
    if(praceMondeyTelInput.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(praceMondeyTelInput.value)) {
        let formData = new FormData(form);
        fetch('tel.php', {
            method: 'POST',
            body: formData
        })
        .then(data => {
            if(data.status === 200) {
                praceMondeyButton.textContent = 'заявка отправлена';
                praceMondeyTelInput.value = 'Cпасибо за заказ !';
            }
        });
    }else {
        praceMondeyButton.textContent = 'проверьте номер';
        setTimeout(()=>{
            praceMondeyButton.textContent = 'заказать по акции';
        },2000);
    }
    
});

//= загрузка фото потолков 
const fotoWorksBody = document.querySelector('.foto-works__body');
fetch('../ajax/foto_potolkov.json')
.then(data => data.json())
.then(json => {
    json.forEach(item => {
        fotoWorksBody.insertAdjacentHTML('beforeend',
        `<div class="foto-works__img">
            <img src="${item.img}" data-img = "${item.data}" alt="натяжной потолок">
        </div>`
        );
    });
});

//= калькулятор index   
(function calcIndex () {
    const selectSoffitTypeSelectAll = document.querySelectorAll('.select-soffit-type__select');

    selectSoffitTypeSelectAll.forEach(select => {
        select.addEventListener('click', selectClick);
    });

    let lineAll;
    let selectText;
    function selectClick (e) {
        let selectTarget = e.target.closest('.select-soffit-type__select').nextElementSibling;
        let typeSelect = e.target.closest('.select-soffit-type__select');
        selectText = typeSelect.querySelector('.select-soffit-type__select-text');
        lineAll = selectTarget.querySelectorAll('.select-soffit-type__line');
        lineAll.forEach(line => {
            line.addEventListener('click', lineClick);
            line.classList.remove('line-none');
        });
    }
    function lineClick (e) {
        selectText.textContent = e.target.textContent;
        lineAll.forEach(line => {
            line.classList.add('line-none');
            line.removeEventListener('click', lineClick);
        });
    }
}());

//конец страницы
});


