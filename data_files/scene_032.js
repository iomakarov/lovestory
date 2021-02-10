import {imgMobile} from './images.js';

export const scene_032 = {
    'k1.2':{
      IBSource:imgMobile[3],
      messageAuthor:'Кевин',
      message:'Привет! Я не против, но сначала расскажи о себе!',
      textAuthor:'Клер',
      buttoms:[
        {sceneId:'k1.2.1', text:'Всё написано в профиле!', skillsValues:{excit:1} },
        {sceneId:'k1.2.2', text:'Что-ж, я - начинающий журналист. Люблю спорт, животных, путешествия ...интересных собеседников!'},
      ],
    }, 

      'k1.2.1':{
        IBSource:imgMobile[3],
        messageAuthor:'Кевин',
        message:'Не обижайся, Клэр! Мне нравится, что ты такая дерзкая! С радостью дам тебе урок! В сёрфинге я профи!',
        textAuthor:'Клер',
        buttoms:[
          {sceneId:'k1.2.1.1', text:'Правда? Здорово! У нас в городе есть бассейн с искусственными волнами!', skillsValues:{excit:1} },
          {sceneId:'k1.2.1.2', text:'Так уж и профи? Я требую доказательств!', skillsValues:{excit:1} },
        ],
      }, 
        'k1.2.1.1':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Бассейн? Нет уж! Всё должно быть по настоящему! Вылетаем сегодня же!',
          textAuthor:'Клер',
          onTouch: {sceneId:'k1.2.1.x'},
        }, 
        'k1.2.1.2':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Ха-ха! Да это вызов! Вылетаем!',
          textAuthor:'Клер',
          onTouch: {sceneId:'k1.2.1.x'},
        }, 
          'k1.2.1.x':{
            IBSource:imgMobile[3],
            textAuthor:'Клер',
            onTouch: {sceneId:'k1.2.1.x'},
            buttoms:[
              {sceneId:'k1.2.1.x.1', text:'Кевин, вообще-то я серьёзная девушка! Мы должны познакомиться поближе', skillsValues:{care:1} },
              {sceneId:'k1.2.1.x.2', text:'Я готова на всё!', skillsValues:{flirt:1} },
            ],
          },
            'k1.2.1.x.1':{
              IBSource:imgMobile[3],
              messageAuthor:'Кевин',
              message:'Ты права!',
              onTouch: {sceneId:'k1.end.1'},
            },
            'k1.2.1.x.2':{
              IBSource:imgMobile[3],
              messageAuthor:'Кевин',
              message:'Тогда идём завтра ужинать!',
              onTouch: {sceneId:'k1.end.1'},
            },
      'k1.2.2':{
        IBSource:imgMobile[3],
        messageAuthor:'Кевин',
        message:'Я тоже люблю путешествовать! Через две недели читаю лекцию на Бали о залогах успешного стартап-проекта. Тебя интересует данная тема?',
        textAuthor:'Клер',
        buttoms:[
          {sceneId:'k1.2.2.1', text:'Н-н-н... если честно, то - нет. Меня больше привлекают пляжи Бали.'},
          {sceneId:'k1.2.2.2', text:'Это приглашение?', skillsValues:{resp:1} },
        ],
      },
        'k1.2.2.1':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Понимаю. На Бали едут за другим!',
          textAuthor:'Клер',
          buttoms:[
            {sceneId:'k1.2.2.1.1', text:'Океан! Умопомрачительные закаты и рассветы! Что еще нужно для счастливой жизни?'},
            {sceneId:'k1.2.2.1.2', text:'Именно! Ну что, станешь моим личным тренером?', skillsValues:{resp:1} },
          ],
        },
          'k1.2.2.1.1':{
            IBSource:imgMobile[3],
            messageAuthor:'Кевин',
            message:'Красивой девушки и вкусного ужина!',
            onTouch: {sceneId:'k1.end.1'},
          },
          'k1.2.2.1.2':{
            IBSource:imgMobile[3],
            messageAuthor:'Кевин',
            message:'Конечно! Но давай приступим к нашим тренировкам после более близкого знакомства!',
            onTouch: {sceneId:'k1.end.1'},
          },
        'k1.2.2.2':{
          IBSource:imgMobile[3],
          messageAuthor:'Кевин',
          message:'Я был бы не против такой компании. Но нам нужно ближе друг друга узнать, понимаешь?',
          textAuthor:'Клер',
          buttoms:[
            {sceneId:'k1.end.1', text:'Что ты имеешь ввиду?'},
            {sceneId:'k1.end.1', text:'Я - за!', skillsValues:{excit:1} },
          ],
        },

}