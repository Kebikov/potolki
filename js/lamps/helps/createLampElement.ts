//: создание элементов ламп на странице 
import { Led } from "../../../ajax/panels";
import caunter from "./caunter";
import deleteButtonStillLamps from "../lampModules/deleteButtonStillLamps";

const createLampElement = (currentArrLamps: Array<Led>, startNumberElement: number, finishNumberElement: number) => {

    const priceUP = 1.1;

    const lampsBlock = document.querySelector('#box-for-lamp') as HTMLDivElement;
    const path = window.location.pathname;

    if(currentArrLamps.length < 13) {
        deleteButtonStillLamps();
    }
    
    for(let i = startNumberElement; i < finishNumberElement; i++) {
        let obj = currentArrLamps[i];
        if(obj) {
            pathLamps(path, lampsBlock, priceUP, obj);
        }else{
            deleteButtonStillLamps();
            caunter('zero');
            break;
        }
    }

}

export default createLampElement;


//: добавление карточки товара в зависимости от страницы на которой находится клиент 
function pathLamps(path: string, body: HTMLDivElement, priceUP: number,obj: Led) {
    //* /lamps-panel.html
    if(path === '/lamps-panel.html') {
        body.insertAdjacentHTML('beforeend',`
            <div class="cart-lamp" >
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>

                        <div class="text-lamp">Мощность: ${obj.wats}W</div>
                        <div class="text-lamp">Размер: ${obj.diameter}mm</div>
                        <div class="text-lamp">Врезное отверстие: ${obj.diameterCut}mm</div>
                        <div class="text-lamp">Цвет свечения: ${obj.colorLightK}K</div>
                        <div class="text-lamp">Световой поток: ${obj.lightStream}Lm</div>

                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            </div>
        `);
    }
    
    //* /lamps-panel.html
    if(path === '/lamps-trek.html') {
        body.insertAdjacentHTML('beforeend',`
            <div class="cart-lamp" >
                <div class="cart-lamp__body">
                    <div class="cart-lamp__img">
                        <img src="${obj.img}" alt="lamps">
                    </div>
                    <div class="cart-lamp__info">
                        <div class="cart-lamp__title">${obj.title}</div>
                        <div class="cart-lamp__article">Артикул: ${obj.article}</div>

                        <div class="text-lamp">Мощность: ${obj.wats}</div>
                        <div class="text-lamp">Размер: ${obj.diameter}</div>
                        <div class="text-lamp">Вращение: ${obj.rotation}</div>
                        <div class="text-lamp">Патрон: ${obj.patron}</div>
                        <div class="text-lamp">Материал: ${obj.material}</div>

                        <div class="cart-lamp__price"><span>${(+obj.price * priceUP).toFixed(2)} BYN</span></div>
                    </div>
                </div>
            </div>
        `);
    }

}