import { questions } from './questions.js';


let page = 'home';

const homeContent = `
<section class="takeTest" id="main">
            <div class="container">
                <h2 class="takeTest__topTitle">Пройдите точный и быстрый</h2>
                <h1 class="takeTest__title">Тест на определение <br/>IQ</h1>
                <img src="./images/brain.png" alt="brain image" class="takeTest__image">
                <button class="takeTest__btn">Пройти тест</button>
                <p class="takeTest__description">
                    И получите рекомендации 
                    по развитию своего интеллекта 
                    <br/><span>и улучшению финансового благосостояния и личной жизни</span>
                </p>
                <div class="moreDetails">
                    <img src="./images/arrow_up.svg" alt="arrow icon" class="moreDetails__image">
                    <p class="moreDetails__text">Подробнее</p>
                </div>
            </div>
        </section>
        <section class="prof">
            <div class="container">
                <div class="prof__top">
                    <img src="./images/prof__top.svg" alt="">
                </div>
                <p class="prof__text">Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, 
                    но и выработать список рекомендаций для повышения этого показателя. </p>
                <div class="prof__bottom">
                    <img src="./images/prof__bottom.svg" alt="">
                </div>
            </div>
        </section>
        <section class="advice">
            <div class="container">
                <p class="advice__text">Также по результатам теста
                    <span>вы получите</span> подробные <span>советы</span> по определению наиболее перспективной <span>для вашего типа</span> интеллекта <span>сферы деятельности, </span>
                    которая принесет вам скорейший финансовый результат.
                </p>
                <img src="./images/advice__image.png" alt="image brain section" class="advice__image">
                <button class="advice__btn takeTest__btn" onclick="takeTest()">Пройти тест</button>
            </div>
        </section>
        <section class="info" id="info">
            <div class="container">
                <p class="info__desc-top">Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы сможете <span>использовать всю жизнь.</span>
                </p>
                <p class="info__desc">Профессиональная интерпретация и детально <span>проработанные рекомендации</span> позволят вам качественно <span>изменить все аспекты своей жизни:</span> от финансового до любовного.
                <img src="./images/lightning_left.svg" alt="lightning image" class="info__lighting info__lighting_left">
                <img src="./images/lightning_right.svg" alt="lightning image" class="info__lighting info__lighting_right">
                </p>
                <button class="info__btn takeTest__btn">Пройти тест</button>
                <div class="info__corp">
                    <img src="./images/corp.svg" alt="logo corporation">
                    2019
                </div>
            </div>
        </section>
`


const  main = document.querySelector('.main');

function takeTest(){
    page = 'test';
    numberQuestion = 0;
    answer = [];
    render()
}
function testRender(numberQuestion){
    let question = questions[numberQuestion];
    return `
        <section class="test">
            <div class="progress">
                <div class="progress__line" style="width: ${(numberQuestion+1)*100/(questions.length+1)}%"></div>
            </div>
            <div class="test__box">
                <h2 class="test__question">${question.question}</h2>
                ${question.type=='text' && 
                    `<div class="test__variants">
                        ${question.variants.map(variant => {
                            return `
                                <div class="test__variant">
                                    <div class="test__circle"></div>
                                    <p class="test__text">${variant}</p>
                                </div>
                            `
                        }).join('')}
                    </div>`
                }
                ${question.type=='color' ? 
                    `<div class="test__colors">
                        ${question.variants.map(variant => {
                            return `
                                <div class="test__color" style="background-color: ${variant.color}" data-color="${variant.name}"></div>
                            `
                        }).join('')}
                    </div>`:''
                }
                ${question.type=='picture' ? 
                    `<div class="test__picture">
                        <img src="../images/image_id_${question.id}.png" alt="image">
                        <div class="test__picture-variants">
                            ${question.variants.map(variant => {
                                return `
                                    <div class="test__picture-variant">${variant}</div>
                                `
                            }).join('')}
                        </div>
                    </div>`:''
                }
                ${question.type=='picture-text' ?
                    `<div class="test__picture">
                        <img src="../images/image_id_${question.id}.png" alt="image">
                        <div class="test__variants">
                            ${question.variants.map(variant => {
                                return `
                                    <div class="test__variant">
                                        <div class="test__circle"></div>
                                        <p class="test__text">${variant}</p>
                                    </div>
                                `
                            }).join('')}
                    </div>
                    </div>`:''
                }
            </div>
            <button class="test__btn">далее</button>
        </section>
    `
}

function resultRender(type){
    if(type=='processing'){
        return `
        <section class="result">
            <div class="progress result__progress">
                <div class="progress__line" style="width: 100%"></div>
            </div>
            <div class="processing">
                <h2 class="processing__title">Обработка результатов</h2>
                <img src="../images/loader.svg" alt="loader" class="processing__loader">
                <p class="processing__text">Определение стиля мышления </p>
            </div>
            <div></div>
        </section>
        `
    }else{
        return `
        <section class="result">
            <div class="container">
                <h2 class="result__title">Ваш результат рассчитан: </h2>
                <p class="result__text"><span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на 
                15 пунктов отличается от среднего в большую или меньшую сторону! 
                </p>
                <h2 class="result__subtitle">Скорее получите свой результат!</h2>
                <p class="result__personal">В целях защиты персональных 
                данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
                </p>
                <div class="result__call">Звоните скорее, запись доступна всего <p><span class="result__time">10:00</span> МИНУТ</p></div>
                <button class="result__btn">
                    <img src="../images/call.svg" alt="call">
                    позвонить и прослушать результат 
                </button>
                <div class="result__answer"></div>
            </div>
            <div class="result__footer">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU<br/> DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, </div>
        </section>
        `
    }

}

let numberQuestion = 0;
function render(){
    if (page === 'home') {
        main.innerHTML = homeContent;
        const testBtns = document.querySelectorAll('.takeTest__btn');
        testBtns.forEach(btn => btn.addEventListener('click', takeTest));
        document.querySelector('#test').addEventListener('click', takeTest)
        document.querySelector('.header__testBox').style.display='none';
        document.querySelector('.header__resultBox').style.display='none';
    }else if(page === 'test'){
        main.innerHTML = testRender(numberQuestion);
        let variantsNode = document.querySelectorAll('.test__variant');
        let variantsColors = document.querySelectorAll('.test__color');
        let variantsPictures = document.querySelectorAll('.test__picture-variant');
        let nextBtn = document.querySelector('.test__btn');
        let progress = document.querySelector('.progress');
        document.querySelector('.header__testBox').style.display = 'flex';
        variantsNode.forEach(variant => {
            variant.addEventListener('click', () => {
                variantsNode.forEach(variant => {
                    variant.classList.remove('active');
                    nextBtn.classList.add('active');
                })
                variant.classList.add('active');
            })
        })
        variantsColors.forEach(variant => {
            variant.addEventListener('click', () => {
                variantsColors.forEach(variant => {
                    variant.classList.remove('active');
                    nextBtn.classList.add('active');
                })
                variant.classList.add('active');
            })
        })
        variantsPictures.forEach(variant => {
            variant.addEventListener('click', () => {
                variantsPictures.forEach(variant => {
                    variant.classList.remove('active');
                    nextBtn.classList.add('active');
                })
                variant.classList.add('active');
            })
        })
        nextBtn.addEventListener('click', () => {
            if(nextBtn.classList.contains('active')){
                if(questions[numberQuestion].type == 'text' || questions[numberQuestion].type == 'picture-text'){
                    answer.push({
                        question: questions[numberQuestion].question,
                        answer: Array.from(variantsNode).find(variant => variant.classList.contains('active')).children[1].textContent
                    })
                }else if(questions[numberQuestion].type == 'color'){
                    answer.push({
                        question: questions[numberQuestion].question,
                        answer: Array.from(variantsColors).find(variant => variant.classList.contains('active')).dataset.color
                    })
                }else if(questions[numberQuestion].type == 'picture'){
                    answer.push({
                        question: questions[numberQuestion].question,
                        answer: Array.from(variantsPictures).find(variant => variant.classList.contains('active')).textContent
                    })
                }
                console.log('a', answer);
                if(numberQuestion == questions.length-1){
                    numberQuestion++;
                    page = 'result';
                    render()
                }else{
                    numberQuestion++;
                    render()
                }
            }
        })
    }else if(page === 'result'){
        main.innerHTML = resultRender('processing');
        document.querySelector('.header__testBox').style.display = 'none';
        document.querySelector('.header__resultBox').style.display = 'flex';

        let processingText = document.querySelector('.processing__text');
        
        
        let interval = setInterval(() => {
            processingText.textContent+='.';
            
        }, 50)
        
        
        setTimeout(() => {
            clearInterval(interval);
            main.innerHTML = resultRender('result');
            let time = document.querySelector('.result__time');
            let timer = setInterval(() => {
                let timeArr = time.textContent.split(':');
                if(timeArr[1] == '00'){
                    timeArr[1] = '59';
                    timeArr[0] = `0${+timeArr[0] - 1}`;
                }else{
                    if(+timeArr[1]<=10){
                        timeArr[1] = `0${+timeArr[1] - 1}`;
                    }else{
                        timeArr[1] = `${+timeArr[1] - 1}`
                    }
                }
                time.textContent = `${timeArr[0]}:${timeArr[1]}`
            },1000)
            let callBtn = document.querySelector('.result__btn');
            callBtn.addEventListener('click', () => {
                clearInterval(timer);
                fetch('https://swapi.dev/api/people/1/')
                .then(response => {
                    if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    document.querySelector('.result__answer').innerHTML = `
                    <h3>${data.name}</h3>
                    <p>Height: ${data.hight}</p>
                    <p>Mass: ${data.mass}</p>
                    <p>Hair Color: ${data.hair_color}</p>
                    <p>Skin Color: ${data.skin_color}</p>
                    <p>Eye Color: ${data.eye_color}</p>
                    <p>Birth Year: ${data.birth_year}</p>
                    <p>Gender: ${data.gender}</p>`;
                })
                .catch(error => {
                    // Обрабатываем ошибку
                    console.error('There has been a problem with your fetch operation:', error);
                    document.querySelector('.result__answer').textContent = 'Error loading character';
                });
            })
            setTimeout(() => {
                clearInterval(timer);
            }, 600000)
        }, 4000)
    }
}
render()

let answer = [];



let burgerBtn = document.querySelector('.header__button');
let closeBtn = document.querySelector('.wrapper__close');
let wrapperLink = document.querySelectorAll('.wrapper__link');
let wrapperLinkHome = document.querySelectorAll('.wrapper__link_home');
let wrapper = document.querySelector('.wrapper');
wrapperLinkHome.forEach(link=>{
    link.addEventListener('click', () => {
        wrapper.classList.remove('active');
        page = 'home';
        render()
    })
})
burgerBtn.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})
closeBtn.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})
wrapperLink.forEach(link=>{
    link.addEventListener('click', () => {
        wrapper.classList.remove('active');
    })
})