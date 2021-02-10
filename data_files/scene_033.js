import {imgMobile} from './images.js';

export const scene_033 = {
    'k1.3':{
      IBSource:imgMobile[3],
      messageAuthor:'Кевин',
      message:'Привет! У меня или у тебя?',
      onTouch: {sceneId:'k1.3.x'},
    },
      'k1.3.x':{
        IBSource:imgMobile[3],
        textAuthor:'Клер',
        text:'ЧТО? Так и знала, что эти приложения полная ерунда для  интрижек на одну ночь ...',
        onTouch: {sceneId:'k1.3.xx'},
      },

        'k1.3.xx':{
          IBSource:imgMobile[3],
          buttoms:[
            {sceneId:'k1.3.xx.1', text:'Что значит у меня или у тебя? Я не такая! До свидания!', skillsValues:{care:1} },
            {sceneId:'k1.3.xx.2', text:'Кевин, вопросы здесь задаю я!  Придержи коней', skillsValues:{resp:1} },
          ],
        },

          'k1.3.xx.1':{
            IBSource:imgMobile[3],
            messageAuthor:'Кевин',
            message:'Прости, Клер! Я облажался! Посмотрел твой профиль, мне кажется ты тоже очень интересная. Не такая, как многие здесь девушки!',
            onTouch: {sceneId:'k1.3.xx.x'},
          },
          'k1.3.xx.2':{
            IBSource:imgMobile[3],
            messageAuthor:'Кевин',
            message:'Ха-ха, а ты не из простых!',
            onTouch: {sceneId:'k1.3.xx.x'},
          },
            'k1.3.xx.x':{
              IBSource:imgMobile[3],
              textAuthor:'Клер',
              text:'Это искренне?! Дам ему последний шанс.',
              onTouch: {sceneId:'k1.3.xx.xx'},
            },
              'k1.3.xx.xx':{
                IBSource:imgMobile[3],
                buttoms:[
                  {sceneId:'k1.3.xx.xx.1', text:'Кевин, я не зануда, но у меня есть принципы! В качестве извинения можешь угостить меня чашечкой кофе в КАФЕ', skillsValues:{care:1} },
                  {sceneId:'k1.3.xx.xx.2', text:'Проехали... Так ты катаешься на сёрфе?', skillsValues:{excit:1} },
                  {sceneId:'k1.3.xx.xx.3', text:'Ты наверное привык, что тебе не отказывают? Всё бывает впервые!', skillsValues:{excit:1} },
                ],
              },
                'k1.3.xx.xx.1':{
                  IBSource:imgMobile[3],
                  messageAuthor:'Кевин',
                  message:'Ээм... Я совсем не ранняя пташка, а днём я работаю. У меня есть  предложение получше',
                  buttoms:[
                    {sceneId:'k1.3.xx.xx.1.x', text:'Знаю я твои предложения! Сразу нет', skillsValues:{excit:-1} },
                    {sceneId:'k1.3.xx.xx.1.x', text:'Кевин, подумай дважды!' },
                  ],
                },    
                  'k1.3.xx.xx.1.x':{
                    IBSource:imgMobile[3],
                    textAuthor:'Клер',
                    text:'Ох... Не делай поспешных выводов, Клер!',
                    onTouch: {sceneId:'k1.end.1'},
                  },       
                'k1.3.xx.xx.2':{
                  IBSource:imgMobile[3],
                  messageAuthor:'Кевин',
                  message:'О да! И в сёрфинге я профи! Могу научить!',
                  buttoms:[
                    {sceneId:'k1.3.xx.xx.2.x', text:'Правда? Здорово! У нас в городе есть бассейн с искусственными волнами!', skillsValues:{excit:1} },
                    {sceneId:'k1.3.xx.xx.2.x', text:'Так уж и профи? Я требую доказательств!', skillsValues:{flirt:1} },
                  ],
                },    
                  'k1.3.xx.xx.2.x':{
                    IBSource:imgMobile[3],
                    messageAuthor:'Кевин',
                    message:'А давай прежде чем приступить к нашим тренировкам, мы познакомимся получше!',
                    onTouch: {sceneId:'k1.end.1'},
                  },  
                  
                'k1.3.xx.xx.3':{
                  IBSource:imgMobile[3],
                  messageAuthor:'Кевин',
                  message:'У многих обо мне складывается ошибочное мнение. Я считаю, нам нужно поближе познакомиться!',
                  buttoms:[
                    {sceneId:'k1.3.xx.xx.3.1', text:'Ну.. я закончила Школу Журналистики..Работаю первый год в издательстве. Мои родители...', skillsValues:{care:1, resp:1} },
                    {sceneId:'k1.end.1', text:'Какие предложения?', skillsValues:{flirt:1, excit:1} },
                  ],
                },    
                  'k1.3.xx.xx.3.1':{
                    IBSource:imgMobile[3],
                    messageAuthor:'Кевин',
                    message:'Постой-постой, мне правда  интересно про твоих родителей, но я считаю, что вечерний ужин,например завтра, мог бы скрасить наш разговор.',
                    onTouch: {sceneId:'k1.end.1'},
                  },     
}