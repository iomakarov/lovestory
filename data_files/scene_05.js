import {imgHome} from './images.js';
import {imgMobile} from './images.js';
import {pars} from './pars.js';

export const scene_05 = {

  'excitingEvening00':{
    IBSource:imgHome[0],
    text:'Дз-з-з-зыыынь! Дз-з-з-зыыынь!',
    onTouch: {sceneId:'excitingEvening01'},
  },
  'excitingEvening01':{
    IBSource:imgHome[0],
    textAuthor:'Клер',
    text:'Чтоо? я-я-я работаю, я не сплю!',
    onTouch: {sceneId:'excitingEvening02'},
  },
  'excitingEvening02':{
    IBSource:imgHome[0],
    textAuthor:'Клер',
    text:'Ой! Я же в отпуске! Приснится же!',
    onTouch: {sceneId:'excitingEvening03'},
  },
  'excitingEvening03':{
    IBSource:imgMobile[4],
    textAuthor:'Клер',
    text:'Это же мой телефон!',
    onTouch: {sceneId:'excitingEvening04'},
  },
  'excitingEvening04':{
    IBSource:imgMobile[4],
    textAuthor:'Клер',
    text:'А, Аманда, это ты. Доброе утро!',
    onTouch: {sceneId:'excitingEvening05'},
  },
  'excitingEvening05':{
    IBSource:imgMobile[4],
    messageAuthor:'Аманда',
    message:'Клэр, только не говори, что ты проспала репетицию моей свадьбы!',
    onTouch: {sceneId:'excitingEvening06'},
  },
  'excitingEvening06':{
    IBSource:imgMobile[4],
    textAuthor:'Клер',
    text:'Ээ-м, ну что ты! Я уже лечу! Ну или вылетаю...',
    onTouch: {sceneId:'excitingEvening07'},
  },
  'excitingEvening07':{
    get IBSource(){
      return imgHome[pars.dress]
    },
    text:'Клэр, подскочив, начала натягивать на себя одежду, что была перед глазами.',
    onTouch: {sceneId:'excitingEvening08'},
  },
  'excitingEvening08':{
    IBSource:imgMobile[4],
    messageAuthor:'Аманда',
    message:'Я так и знала!  У тебя есть ровно 20 минут! Пока.',
    onTouch: {sceneId:'wedding00'},
  },

}