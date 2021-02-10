import {imgHome} from './images.js';

export const scene_01 = {
  'start':{
    IBSource:imgHome[0],
    messageAuthor:'Помощник',
    message:'Добро пожаловать в игру!',
    onTouch: {sceneId:'start-01'},
  },

  'start-01':{
    IBSource:imgHome[0],
    messageAuthor:'Помощник',
    message:'Помните, что от выбранных Вами  последующих решений сюжетная линия может меняться!',
    onTouch: {sceneId:'start-02'},
  },

  'start-02':{
    IBSource:imgHome[0],
    messageAuthor:'Помощник',
    message:'Также некоторые из решений могут повысить и понизить уровень Ваших качеств:\n\n Забота\n Ответственность\n Азарт\n Секс \n',
    onTouch: {sceneId:'history-01'},
  },

  'history-01':{
    IBSource:imgHome[1],
    text:'Клэр проснулась от теплых солнечных лучей, пробивавщихся сквозь окна её спальни. На улице заливались пением птицы. Начинался новый день. А может и новая жизнь?..',
    onTouch: {sceneId:'history-02'},
  },

  'history-02':{
    IBSource:imgHome[1],
    text:'Не так давно Клэр рассталась с Дереком. Ей жутко хотелось перевернуть эту страницу своей жизни',
    onTouch: {sceneId:'history-03'},
  },  
  
  'history-03':{
    IBSource:imgHome[1],
    text:'Несмотря на то, что Клэр была явной приверженицей традиционных знакомств вне сети, её подруга Аманда настоятельно рекомендовала ей зарегистрироваться в модном популярном приложении для знакомств, ведь именно там она встретила своего жениха Бэна!',
    onTouch: {sceneId:'history-04'},
  }, 

  'history-04':{
    IBSource:imgHome[1],
    textAuthor:'Клер',
    text:'...Аманда повстречалась с Бэном в сети. Бэн классный парень. Почему бы и нет, что я теряю. Просто будем надеяться, что мне не попадётся какой-нибудь извращенец. Ох… Ну что ж мальчики, удивите меня!',
    onTouch: {sceneId:'2'},
  }, 
}