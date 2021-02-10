import {imgMobile} from './images.js';

export const scene_031 = {

  'k1.1':{
    IBSource:imgMobile[3],
    messageAuthor:'Кевин',
    message:'Привет! Похоже ты тоже любишь путешествия?',
    textAuthor:'Клер',
    buttoms:[
      {sceneId:'k1.1.1', text:'Люблю! Мечтаю побывать на островах'},
      {sceneId:'k1.1.1', text:'Да! Мечтаю побывать на островах! А впрочем, главное с кем ,а не где!', skillsValues:{care:1} },
      {sceneId:'k1.1.1', text:'Путешествия? Я очень давно не путешествовала!'},
    ],
  }, 

    'k1.1.1':{
      IBSource:imgMobile[3],
      messageAuthor:'Кевин',
      message:'Через две недели я читаю лекцию на Бали о залогах успешного стартап-проекта.Тебя интересует данная тема?',
      textAuthor:'Клер',
      buttoms:[
        {sceneId:'k1.1.1.1', text:'Н-н-н..если честно, то -нет.'},
        {sceneId:'k1.1.1.2', text:'Если честно, меня гораздо больше привлекают пляжи Бали. Ты ведь любишь сёрфить?' },
        {sceneId:'k1.1.1.3', text:'Это приглашение?', skillsValues:{excit:1} },
      ],
    }, 

      'k1.1.1.1':{
        IBSource:imgMobile[3],
        messageAuthor:'Кевин',
        message:'Понимаю. На Бали едут за другим!',
        textAuthor:'Клер',
        buttoms:[
          {sceneId:'k1.1.1.1.1', text:'Океан! Умопомрачительные закаты и рассветы! Что еще нужно для счастливой жизни'},
          {sceneId:'k1.1.1.1.2', text:'Именно! Научишь сёрфить?', skillsValues:{excit:1} },
        ],
      },  

        'k1.1.1.1.1':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Красивой девушки и вкусного ужина!',
          textAuthor:'Клер',
          onTouch: {sceneId:'k1.end.1'},
        },  

        'k1.1.1.1.2':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Конечно! Но давай приступим к нашим тренировкам после более близкого знакомства!',
          onTouch: {sceneId:'k1.end.1'},
        },

      'k1.1.1.2':{
        IBSource:imgMobile[3],
        messageAuthor:'Кевин',
        message:'В Сёрфинге я профи! Могу научить!',
        textAuthor:'Клер',
        buttoms:[
          {sceneId:'k1.1.1.2.1', text:'Правда? Ты так любезен! У нас в городе есть бассейн с искусственными волнами!'},
          {sceneId:'k1.1.1.2.2', text:'Так уж и профи?Я требую доказательств!', skillsValues:{excit:1} },
        ],
      },  

        'k1.1.1.2.1':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Бассейн? Нет уж! Всё должно быть по настоящему!',
          textAuthor:'Клер',
          onTouch: {sceneId:'k1.1.1.2.x.1'},
        },  

        'k1.1.1.2.2':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Ха-ха!Да это вызов!',
          textAuthor:'Клер',
          onTouch: {sceneId:'k1.1.1.2.x.1'},
        },  
          'k1.1.1.2.x.1':{
            IBSource:imgMobile[3],
            messageAuthor:'Кевин',
            message:'Вылетаем сегодня же!',
            textAuthor:'Клер',
            buttoms:[
              {sceneId:'k1.1.1.2.x.1.1', text:'Кевин, вообще-то я серьёзная девушка! Мы должны познакомиться поближе', skillsValues:{resp:1}},
              {sceneId:'k1.end.1', text:'Я готова на всё!', skillsValues:{flirt:1} },
            ],
          },  
            'k1.1.1.2.x.1.1':{
              IBSource:imgMobile[3],
              messageAuthor:'Кевин',
              message:'Ты права!',
              onTouch: {sceneId:'k1.end.1'},
            },

      'k1.1.1.3':{
        IBSource:imgMobile[3],
        messageAuthor:'Кевин',
        message:'"Я был бы не против такой компании, но вначале расскажи о себе.',
        textAuthor:'Клер',
        buttoms:[
          {sceneId:'k1.1.1.3.1', text:'Всё написано в профиле!', skillsValues:{excit:1} },
          {sceneId:'k1.1.1.3.2', text:'Что-ж, я - начинающий журналист. Люблю спорт, животных, путешествия ...интересных собеседников!'},
        ],
      },
        'k1.1.1.3.1':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Не обижайся, Клэр! Мне нравится, что ты такая дерзкая!',
          onTouch: {sceneId:'k1.end.1'},
        },
        'k1.1.1.3.2':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Клэр, а ты мне нравишься.',
          onTouch: {sceneId:'k1.end.1'},
        },
}