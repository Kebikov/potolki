(()=>{"use strict";function e(e,t,o,{classOne:l,classTwo:n}){try{function c(t,o){e.value.length===t&&(e.value=e.value.slice(0,t-1)+o+e.value[t-1])}e.value="+375",e.addEventListener("input",(()=>{"("===e.value[e.value.length-1]||")"===e.value[e.value.length-1]||"-"===e.value[e.value.length-1]?e.value=e.value.slice(0,e.value.length-1):(e.value.length<4&&(e.value="+375"),c(5,"("),c(8,")"),c(12,"-"),c(15,"-"),e.value.length>16&&(e.value=e.value.slice(0,17)),/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(e.value)?(0===o&&(t.style.boxShadow="0px 0px 2px 2px rgba(22, 255, 138, 0.663) inset"),1===o&&(e.style.border="#28b352 2px solid")):(0===o&&(t.style.boxShadow="0px 0px 3px 3px rgba(255, 22, 22, 0.9) inset"),1===o&&(e.style.border="#ec3c3c 2px solid"))),17===e.value.length&&/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(e.value)?t.classList.contains(l)&&(t.classList.remove(l),t.classList.add(n)):t.classList.contains(n)&&(t.classList.remove(n),t.classList.add(l))}))}catch(r){console.log("",r)}}window.addEventListener("DOMContentLoaded",(()=>{(function({cursUsd:e,workPrace:t,lightPrace:o,perimeterPrace:l}){try{!function(){const e=document.querySelector(".menu"),t=document.querySelector(".burger__square"),o=document.querySelector(".menu__list"),l=o.querySelectorAll(".menu__line"),n=(o.querySelector(".menu__line"),document.querySelector(".burger__span"));t.addEventListener("click",(()=>{let e=.3;l.forEach((t=>{t.style.transition=`all ${e}s ease`,t.classList.toggle("active"),e+=.1})),n.classList.toggle("active-burger")}));let c=e.getBoundingClientRect().top;window.addEventListener("scroll",(t=>{window.scrollY>=c?e.classList.add("menu__fix"):e.classList.remove("menu__fix")}))}(),function(){const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){let o=e.target;o.classList.add("rotate-scale-up"),t.unobserve(o)}}))}),{threshold:[1],rootMargin:"10px 0px 0px 0px"});document.querySelector(".footer__icons").querySelectorAll("img").forEach((t=>{e.observe(t)}))}(),function(e,t,o,l){try{!function(){const n=document.body,c=document.querySelector(".top-heder__call-calc"),r=document.querySelector(".popup-calc__type-select"),s=r.querySelector("span"),i=r.querySelectorAll(".popup-calc__type-line"),a=document.querySelector(".popup-calc__button"),u=document.querySelector(".popup-calc"),d=document.querySelector(".popup-calc__x"),y=document.querySelector(".top-line__calc");c.addEventListener("click",(()=>{u.style.display="flex",n.style.overflow="hidden"})),y.addEventListener("click",(()=>{u.style.display="flex",n.style.overflow="hidden"})),d.addEventListener("click",(()=>{u.style.display="none",n.style.overflow="auto"})),r.addEventListener("click",(e=>{r.classList.toggle("active-select"),i.forEach((e=>{e.classList.toggle("active")})),e.target.classList.contains("popup-calc__type-line")&&(s.textContent=e.target.innerHTML)})),a.addEventListener("click",(()=>{let n,c,r=[],s=0,i=document.querySelectorAll(".text-input"),a=document.querySelector(".popup-calc__type-select span");document.querySelectorAll(".popup-calc__sale-input").forEach((e=>{e.checked&&(s=e.value)})),n=a.textContent,i.forEach((e=>{let t=`${e.value}`;t=t.includes(",",0)?+t.replace(",","."):+t,t&&r.push(t)})),r[0]>3.5&&r[1]>3.5?("Цветной"===n&&(c=4.1),"Белый"===n&&(c=3.1)):("Цветной"===n&&(c=3.1),"Белый"===n&&(c=1.9));let u=document.querySelector(".popup-calc__cash");if("Цветной"===n||"Белый"===n&&3===r.length){let n=Math.round((r[0]*r[1]*c+2*(r[0]+r[1])*l+r[2]*o)*e+r[0]*r[1]*t*s);u.textContent="стоимость: "+n+" руб.",u.style.display="block"}else u.textContent="введите все данные !",u.style.display="block"}))}()}catch(e){console.log("",e)}}(e,t,o,l)}catch(e){console.log("",e)}})({cursUsd:2.6,workPrace:15,lightPrace:1,perimeterPrace:1}),function(){try{const e=document.querySelector(".gallery");!function(){const t=document.body,o=document.querySelector(".gallery-pop"),l=document.querySelector(".gallery__body"),n=document.querySelector(".gallery-pop__body"),c=document.querySelector(".gallery-pop__img-box"),r=document.querySelector(".gallery-pop__right"),s=document.querySelector(".gallery-pop__left"),i=document.querySelector(".gallery-pop__x"),a=document.querySelector(".gallery-pop__dots"),u=document.querySelectorAll(".pic-item__body"),d=document.querySelector("style"),y=[],p=l.querySelectorAll("img"),m=["gallery-pop__img","_gap-img"];let _;const f=o.getAttribute("data-gap"),g=o.getAttribute("data-transition");function h(e,t){return(e+=t)<0&&(e=y.length-1),e>y.length-1&&(e=0),e}function v(e){e<0&&(_=y.length-1),e>y.length-1&&(_=0)}function q(){let e=a.querySelectorAll(".gallery-pop__dot");e.forEach((e=>{e.matches('[class="gallery-pop__dot dot-white"]')&&e.classList.remove("dot-white")})),e[_].classList.add("dot-white")}p.forEach((e=>{y.push(e.getAttribute("src"))})),l.addEventListener("click",(e=>{var l;!function(){let e=g/1e3;if(window.matchMedia("(min-width: 1021px)").matches&&(d.innerHTML=`._gap-img {padding-left: ${f}px; padding-right: ${f}px; transition:all ${e}s ease;}`),window.matchMedia("(max-width: 1020px)").matches&&window.matchMedia("(min-width: 768px)").matches){let t=.8*f;d.innerHTML=`._gap-img {padding-left: ${t}px; padding-right: ${t}px; transition:all ${e}s ease;}`}if(window.matchMedia("(max-width: 767px)").matches){let t=.7*f;d.innerHTML=`._gap-img {padding-left: ${t}px; padding-right: ${t}px; transition:all ${e}s ease;}`}}(),l=e.target.getAttribute("src"),_=y.indexOf(l,0);let n=document.createElement("img"),r=document.createElement("img"),s=document.createElement("img");n.classList.add(...m),r.classList.add(...m),s.classList.add(...m),n.setAttribute("src",y[h(_,-1)]),r.setAttribute("src",y[_]),s.setAttribute("src",y[h(_,1)]),n.style.left="-100%",r.style.left="0%",s.style.left="100%",o.style.display="flex",c.append(n),c.append(r),c.append(s),p.forEach((e=>{let t=document.createElement("div");t.classList.add("gallery-pop__dot"),a.append(t)})),a.querySelectorAll(".gallery-pop__dot")[_].classList.add("dot-white"),t.style.overflow="hidden"})),i.addEventListener("click",(()=>{o.style.display="none",n.querySelectorAll(".gallery-pop__img").forEach((e=>{e.remove()})),a.innerHTML="",t.style.overflow="auto"})),r.addEventListener("click",(function e(){_++,v(_);let t=document.createElement("img");t.classList.add(...m),t.setAttribute("src",y[h(_,1)]),t.style.left="200%",c.append(t),setTimeout((function(){let t=c.querySelectorAll(".gallery-pop__img"),o=-200;t.forEach((e=>{e.style.left=o+"%",o+=100})),q(),r.removeEventListener("click",e),setTimeout((function(){c.querySelector(".gallery-pop__img").remove(),r.addEventListener("click",e)}),g)}),10)})),s.addEventListener("click",(function e(){_--,v(_);let t=document.createElement("img");t.classList.add(...m),t.setAttribute("src",y[h(_,-1)]),t.style.left="-200%",c.prepend(t),setTimeout((function(){let t=c.querySelectorAll(".gallery-pop__img"),o=-100;t.forEach((e=>{console.log("",e),e.style.left=o+"%",o+=100})),q();let l=c.lastElementChild;s.removeEventListener("click",e),setTimeout((function(){l.remove(),s.addEventListener("click",e)}),g)}),10)})),function(){let t=e.getAttribute("data-height");u.forEach((e=>{e.style.paddingBottom=t}))}()}()}catch(e){console.log("",e)}}(),function(){try{document.querySelector(".order-call"),function(){const e=document.querySelector(".order-call"),t=document.querySelectorAll('[data-popup="open"]'),o=e.querySelector(".order-call__title"),l=document.body;t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="flex",l.style.overflow="hidden",t.hasAttribute("data-name-button")&&(o.textContent=t.getAttribute("data-name-button"))}))})),e.addEventListener("click",(t=>{l.style.overflow="auto",t.target.closest(".order-call__x")&&(e.style.display="none")}))}(),function(){const t=document.querySelector(".order-call__tel"),o=document.querySelector(".order-call__tel-div");t.addEventListener("click",(()=>e(t,o,1,{classOne:"_grey",classTwo:"_green"})))}();const t=document.querySelector(".order-call__name");!function(){const e=document.querySelector(".order-call__button"),o=document.querySelector(".order-call__tel"),l=document.body,n=document.querySelector(".anime-meil");let c=document.querySelector(".order-call__title").textContent;e.addEventListener("click",(function(r){r.preventDefault,t.value.length<3&&(t.value="",t.setAttribute("placeholder","Минимум 3 символа."));const s=document.forms.popup;if(17===o.value.length&&/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(o.value)&&t.value){let r=new FormData(s);r.set("title",c),l.style.overflow="hidden",n.style.display="block",fetch("popup.php",{method:"POST",body:r}).then((c=>{200===c.status&&(l.style.overflow="auto",n.style.display="none",e.textContent="заявка отправлена",t.value="",o.value="Cпасибо за заказ !")}))}else e.textContent="проверьте данные",setTimeout((()=>{e.textContent="заказать по акции"}),2e3)}))}()}catch(e){console.log("",e)}}(),function({cursUsd:e,workPrace:t,lightPrace:o,perimeterPrace:l}){try{!function(){let e,t;function o(o){let n=o.target.closest(".select-soffit-type__select").nextElementSibling,c=o.target.closest(".select-soffit-type__select");t=c.querySelector(".select-soffit-type__select-text"),e=n.querySelectorAll(".select-soffit-type__line"),e.forEach((e=>{e.addEventListener("click",l),e.classList.remove("line-none")}))}function l(o){t.textContent=o.target.textContent,e.forEach((e=>{e.classList.add("line-none"),e.removeEventListener("click",l)}))}document.querySelector(".calculation-index"),document.querySelectorAll(".select-soffit-type__select").forEach((e=>{e.addEventListener("click",o)}))}();const n=document.querySelector(".money-calc__button-body"),c=document.querySelector(".select-promotion__body").querySelectorAll(".select-promotion__radio"),r=document.querySelector(".select-soffit-type__body"),s=document.querySelector(".select-parameters__body"),i=document.querySelector(".money-calc__cash"),a=document.querySelector(".money-calc__body"),u=document.querySelector(".money-calc__error");n.addEventListener("click",(()=>{let n,d=[],y=[],p=0,m=s.querySelectorAll(".select-parameters__size-input"),_=r.querySelectorAll(".select-soffit-type__select-text");if(c.forEach((e=>{e.checked&&(p=e.value)})),m.forEach((e=>{let t=`${e.value}`;t=t.includes(",",0)?+t.replace(",","."):+t,t&&y.push(t)})),_.forEach((e=>{d.push(e.textContent)})),y[0]>3.5&&y[1]>3.5?("Цветной"===d[1]&&(n=4.1),"Белый"===d[1]&&(n=3.1)):("Цветной"===d[1]&&(n=3.1),"Белый"===d[1]&&(n=1.9)),2===d.length&&3===y.length){let c=Math.round((y[0]*y[1]*n+2*(y[0]+y[1])*l+y[2]*o)*e+y[0]*y[1]*t*p);i.textContent=c+" руб.",u.style.display="none",a.style.display="flex"}else u.style.display="block",a.style.display="none"}))}catch(e){console.log("",e)}}({cursUsd:2.6,workPrace:15,lightPrace:1,perimeterPrace:1}),function({cursUsd:e,works:t,pracePerimetr:o}){try{const l=document.querySelector(".prace-mondey__input");!function(){const n=document.querySelector(".prace-mondey__byn");let c,r;function s(){r=l.value,r.length>3&&(l.value=r.slice(0,3)),c=r<18?1.9:3.1,n.innerHTML=`${Math.floor(r*c*e+o*e*r*.8+r*t)}<span> РУБ.</span>`}s(),l.addEventListener("input",(()=>{s()}))}()}catch(e){console.log("",e)}}({cursUsd:2.6,works:15,pracePerimetr:1}),function(){try{const e=document.querySelector(".rules-body"),t=document.querySelector(".wrapper");let o;function l(){n>1100&&(o=20),n<1100&&n>900&&(o=17),n<900&&n>600&&(o=14),n<600&&(o=10)}let n=document.querySelector(".one-step").getBoundingClientRect().width-80;l(),e.style.animation=`draive infinite ${o}s`;const c=document.createElement("style");c.innerHTML=`\n        @keyframes draive {\n            0% {\n                transform: translate(0, 0);\n            }\n            15% {\n                transform: translate( ${n}px, 0);\n            }\n            30% {\n                transform: translate( ${n}px, 0);\n            }\n            40% {\n                transform: translate(0, 0);\n            }\n        }`,t.append(c)}catch(r){console.log("",r)}}(),function(){try{const t=document.querySelector(".prace-mondey__tel");!function(){const o=document.querySelector(".prace-mondey__tel-input");o.addEventListener("click",(()=>e(o,t,0,{classOne:"grey",classTwo:"green"})))}()}catch(e){console.log("",e)}}(),function(){try{const e=document.querySelector(".prace-mondey__tel-input");!function(){const t=document.forms.actionCall,o=document.querySelector(".prace-mondey__button"),l=document.querySelector(".anime-meil"),n=document.body;o.addEventListener("click",(c=>{if(c.preventDefault,17===e.value.length&&/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(e.value)){let c=new FormData(t);n.style.overflow="hidden",l.style.display="block",fetch("mail.php",{method:"POST",body:c}).then((t=>{200===t.status&&(n.style.overflow="auto",l.style.display="none",o.textContent="заявка отправлена",e.value="Cпасибо за заказ !")}))}else o.textContent="проверьте номер",setTimeout((()=>{o.textContent="заказать по акции"}),2e3)}))}()}catch(e){console.log("",e)}}(),function(){try{let e=document.querySelectorAll(".video");function t(){for(let t=0;t<e.length;t++)o(e[t])}function o(e){let t=e.querySelector(".video__link"),o=e.querySelector(".video__media"),c=e.querySelector(".video__button"),r=l(o);e.addEventListener("click",(()=>{let o=n(r);t.remove(),c.remove(),e.appendChild(o)})),t.removeAttribute("href"),e.classList.add("video--enabled")}function l(e){return e.src.match(/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i)[1]}function n(e){let t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",c(e)),t.classList.add("video__media"),t}function c(e){return"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"}t()}catch(r){console.log("",r)}}(),function(){try{const e=document.querySelector(".all-contacts__icons");let t=0;const o=new IntersectionObserver(((e,o)=>{e.forEach((e=>{if(e.isIntersecting){let l=e.target;t+=350,setTimeout((function(){l.classList.add("roll-in-right"),o.unobserve(l)}),t)}}))}),{threshold:[1],rootMargin:"-40px 0px -10% 0px"});e.querySelectorAll("img").forEach((e=>o.observe(e)))}catch(e){console.log("",e)}}(),function(){try{!function(){const e=document.querySelectorAll(".build-prace__pic");let t=0;const o=new IntersectionObserver(((e,o)=>{e.forEach((e=>{if(e.isIntersecting){let l=e.target;t+=100,setTimeout((function(){l.classList.add("anime-pic")}),t),o.unobserve(l)}}))}),{rootMargin:"-40px 0px -10% 0px",threshold:[1]});e.forEach((e=>{o.observe(e)}))}(),function(){const e=document.querySelectorAll(".cap-type__img"),t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("scale-in-ver-center"),t.unobserve(e.target))}))}),{rootMargin:"0px 0px -15% 0px",threshold:[1]});e.forEach((e=>{t.observe(e)}))}()}catch(e){console.log("",e)}}(),function(){try{!function(){const e=document.querySelector(".box-questions");[{question:"Как заказать натяжной потолок?",answer:"Оставить заявку на сайте или позвонить по номеру +375 (29) 522-22-82."},{question:"Что необходимо для расчета стоимости монтажа натяжного потолка?",answer:"Необходимо знать площадь помещения,  его длину и ширину (хотя бы примерно), а так же количество светильников."},{question:"Как осуществляется расчет за выполненную работу по монтажу натяжного потолка?",answer:"Расчет осуществляется после монтажа натяжного потолка и полной приемки заказчиком."},{question:"На какую высоту опустится натяжной потолок?",answer:"Минимальный отпуск натяжного потолка относительно чернового составляет 5 см. Также следует учитывать высоту конструкций для монтажа люстры и светильников, а также тип и состояние стен. Окончательный вердикт сможет дать мастер, выполняющий замер."},{question:"Как ухаживать за натяжным потолком?",answer:"Для ухода за натяжным потолком подходят жидкие моющие средства без красителей на спиртовой основе, например средства для мытья окон. Протирать рекомендуется мягкой салфеткой из микрофибры."},{question:"Что устанавливать раньше: шкаф-купе или натяжной потолок?",answer:"Технологически желательно сразу установить шкаф-купе, предусмотрев в нем сверху фальш-панель, к которой впоследствии будет прикреплен профиль натяжного потолка.<br>Однако возможна установка шкафа-купе и после монтажа натяжного потолка. В данном случае необходимо сообщить мастеру о планируемом месте будущего шкафа-купе и тогда над натяжным потолком будет установлена закладная к которой и будет произведен монтаж шкафа."},{question:"На каком этапе ремонта установить натяжной потолок?",answer:"В идеале натяжной потолок следует устанавливать, когда закончены все работы, связанные с пылью, и стены подготовлены под покраску или оклейку обоями."},{question:"Имеет ли потолок запах и как долго он выветривается?",answer:"Как любой новый предмет, находящийся в помещении, натяжной потолок непосредственно после монтажа может иметь запах, который, как правило, выветривается в течение нескольких дней."},{question:"Будут ли на натяжном потолке швы?",answer:"На сегодняшний день без швов возможно установить натяжной потолок шириной до шести метров. Отличным выходом в случае ширины помещения более 6 метров станет двухуровневый потолок."},{question:"Что делать, если затопили сверху?",answer:"В критических случаях основной объем воды можно удалить самостоятельно. Но лучше сразу обратиться к специалистам, в любом случае после удаления воды потолок рекомендуется просушить тепловой пушкой."},{question:"Какие светильники подойдут для натяжного потолка?",answer:"Для установки с натяжным потолком не существует каких-либо ограничений для встраиваемых светильников - подойдет большинство."},{question:"В какие сроки может быть установлен натяжной потолок и сколько времени займет его монтаж?",answer:"По желанию заказчика потолок может быть установлен на следующий после замера день. Время монтажа зависит от специфических особенностей заказа: количества светильников, труб, углов, материала стен, наличия в помещении мебели. Как правило, монтаж натяжного потолка в комнате 10 м.кв. с одной люстрой (светильником) занимает порядка четырех часов."},{question:"Чего боятся натяжные потолки?",answer:"Не следует касаться полотна натяжного потолка острыми предметами, существует опасность его проколоть. В случае воздействия высоких температур(от +70 <sup>о</sup>С) потолок может расплавиться (даже от неправильно подобранной лампочки накаливания). В случае отрицательных температур(ниже -10 <sup>о</sup>С) полотно натяжного потолка становится хрупким и подверженным растрескиванию при механическом воздействии."},{question:"Какой срок эксплуатации натяжного потолка?",answer:"Гарантия на монтажные работы составляет один год, на применяемые полотна производитель дает гарантию 25 лет. На практике большую роль играет именно профессионализм монтажа и качество комплектующих, что соответственно влияет и на цену работ."},{question:"Может ли осесть пыль на потолке?",answer:"Натяжной потолок обладает антистатичным покрытием, поэтому пыль на нем не оседает."},{question:"Можно ли установить на потолок какие-либо навесные спортивные снаряды?",answer:"В натяжной потолок можно монтировать любые тяжёлые конструкции, путем предварительного монтажа соответствующих закладных."},{question:"Может ли появляться конденсат между натяжным и обычным потолком?",answer:"Все это исключено, так как температура полотна точно такая же, как и в комнате. Нет резких перепадов, поэтому конденсат отсутствует."},{question:"Как необходимо подготовить помещение перед приездом монтажников?",answer:"Комнату, где будет производиться монтаж натяжного потолка, рекомендуется максимально освободить от мебели, полы желательно закрыть картоном. Если такой возможности нет, то как минимум изолировать (накрыть) предметы, у которых существует вероятность повреждения высокой температурой, и создать доступ к стенам помещения."}].forEach((t=>{e.insertAdjacentHTML("beforeend",`\n                    <div class="questions">\n                        <div class="questions__body">\n                            <div class="questions__title"><span>${t.question}</span></div>\n                            <div class="questions__info">\n                                <div class="questions__text">${t.answer}</div>\n                            </div>\n                        </div>\n                    </div>\n                    `)})),e.lastElementChild.querySelector(".questions__title").classList.add("_after-not"),e.querySelectorAll(".questions__title").forEach((e=>{e.addEventListener("click",(e=>{document.querySelectorAll(".questions__body").forEach((e=>{const t=e.querySelector(".questions__info"),o=e.querySelector(".questions__text"),l=e.querySelector(".questions__title");t.style.height="0px",o.style.opacity=0,e.classList.remove("_questions-white"),l.classList.remove("_questions-text")}));const t=e.target.closest(".questions__body"),o=t.querySelector(".questions__title"),l=t.querySelector(".questions__info"),n=t.querySelector(".questions__text");if("0px"===getComputedStyle(l).height){let e=n.offsetHeight;l.style.height=e+"px",setTimeout((()=>{n.style.opacity=1}),100),t.classList.add("_questions-white"),o.classList.add("_questions-text")}else l.style.height="0px",n.style.opacity=0,t.classList.remove("_questions-white"),o.classList.remove("_questions-text")}))}))}()}catch(e){console.log("",e)}}()}))})();
//# sourceMappingURL=bundle.js.map