export const questions = [
    {
        id: 0,
        question: 'Ваш пол:',
        variants: ['мужской', 'женский'],
        type: 'text'
    },
    {
        id: 1,
        question: 'укажите ваш возраст:',
        variants: ['До 18', 'От 18 до 28', 'от 29 до 35', 'От 36'],
        type: 'text'
    },
    {
        id: 2,
        question: 'Выберите лишнее:',
        variants: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
        type: 'text'
    },
    {
        id: 3,
        question: 'Продолжите числовой ряд:<br/>18  20  24  32  ',
        variants: ['62', '48', '74', '57', '60', '77'],
        type: 'text'
    },
    {
        id: 4,
        question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
        variants: [{name: 'gray', color: 'rgba(168, 168, 168, 1)'}, {name: 'blue', color: 'rgba(0, 0, 169, 1)'}, {name: 'green', color: 'rgba(0, 167, 1, 1)'}, {name: 'red', color: 'rgba(246, 1, 0, 1)'}, {name: 'yellow', color: 'rgba(253, 255, 25, 1)'}, {name: 'brown', color: 'rgba(169, 84, 3, 1)'}, {name: 'black', color: 'rgba(0, 0, 0, 1)'}, {name: 'purple', color: 'rgba(133, 0, 104, 1)'}, {name: 'Aquamarine', color: 'rgba(70, 178, 172, 1)'}],
        type: 'color'
    },
    {
        id: 5,
        question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
        variants: [{name: 'gray', color: 'rgba(168, 168, 168, 1)'}, {name: 'blue', color: 'rgba(0, 0, 169, 1)'}, {name: 'green', color: 'rgba(0, 167, 1, 1)'}, {name: 'red', color: 'rgba(246, 1, 0, 1)'}, {name: 'yellow', color: 'rgba(253, 255, 25, 1)'}, {name: 'brown', color: 'rgba(169, 84, 3, 1)'}, {name: 'black', color: 'rgba(0, 0, 0, 1)'}, {name: 'purple', color: 'rgba(133, 0, 104, 1)'}, {name: 'Aquamarine', color: 'rgba(70, 178, 172, 1)'}],
        type: 'color'
    },
    {
        id: 6,
        question: 'Какой из городов лишний?',
        variants: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава'],
        type: 'text'
    },
    {
        id: 7,
        question: 'Выберите правильную фигуру из четырёх пронумерованных.',
        variants: ['1', '2', '3', '4'],
        type: 'picture'
    },
    {
        id: 8,
        question: 'Вам привычнее и важнее:',
        variants: ['Наслаждаться каждой минутой проведенного времени', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт'],
        type: 'text'
    },
    {
        id: 9,
        question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
        variants: ['оно остроконечное', 'оно устойчиво', 'оно-находится в состоянии равновесия'],
        type: 'picture-text'
    },
    {
        id: 10,
        question: 'Вставьте подходящее число',
        variants: ['32', '36', '53', '44', '66', '42'],
        type: 'picture'
    },
]