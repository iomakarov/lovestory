import {imgHome} from './images.js';
import {imgWedding} from './images.js';
import {imgWeddingFriend} from './images.js';
import {pars} from './pars.js';

export const scene_06 = {
  'wedding00':{
    get IBSource(){
      return imgWedding[pars.dress]
    },
    text:'Клэр приехала в назначенное место. Здесь уже были самые близкие друзья Аманды и Бэна',
    onTouch: {sceneId:'wedding01'},
  },
  'wedding01':{
    get IBSource(){
      return imgWedding[pars.dress]
    },
    text:'Клэр блуждала между шумных родственников и суетившихся организаторов. Обстановка её нервировала.',
    onTouch: {sceneId:'wedding03'},
  },
  'wedding03':{
    get IBSource(){
      return imgWedding[pars.dress]
    },
    textAuthor:'Клэр',
    text:'Возможно странно, но я никогда не мечтала о дне своей свадьбы. Мне всегда казалось, что эта история не про меня. Я бы лучше потратила эти деньги и время на путешествие',
    onTouch: {sceneId:'wedding04'},
  },
  'wedding04':{
    get IBSource(){
      return imgWedding[pars.dress]
    },
    text:'Клэр вдруг подумала о том, что наверняка их это объединяет с Кевином. Он такой энергичный и интересный, тихая семейная жизнь точно не про него.',
    onTouch: {sceneId:'wedding05'},
  },
  'wedding05':{
    get IBSource(){
      return imgWedding[pars.dress]
    },
    text:'Она стала размышлять о сегодняшнем вечере и мечтать о том, что бы могло у них получится',
    onTouch: {sceneId:'wedding06'},
  }, 
  'wedding06':{
    get IBSource(){
      return imgWedding[pars.dress]
    },
    text:'Спустя 3 часа репетиция окончилась, и Аманда подошла к Клэр',
    onTouch: {sceneId:'wedding07'},
  },
  'wedding07':{
    IBSource: imgWeddingFriend,
    textAuthor:'Клэр',
    buttoms:[
      {sceneId:'wedding08', text:'Аманда, вот это организация! Я бы на это точно не решилась! ', skillsValues:{resp:-1}},
      {sceneId:'wedding08', text:'Аманда, всё будет отлично! Подготовка на высшем уровне!'},
    ], 
  },
  'wedding08':{
    IBSource: imgWeddingFriend,
    messageAuthor:'Аманда',
    message:'Спасибо, подруга! Да, всё именно так, как я и мечтала. Расскажи, как продвигаются твои дела с теми красавчиками?',
    onTouch: {sceneId:'wedding09'},
  },
  'wedding09':{
    IBSource: imgWeddingFriend,
    textAuthor:'Клэр',
    text:'Сегодня вечером иду на свидание с Кевином. Он такой энергичный, интересный, но занятой. Я думаю, он из тех, с кем никогда не заскучаешь. Путешествия, тусовки, новые знакомства...',
    onTouch: {sceneId:'wedding10'},
  },
  'wedding10':{
    IBSource: imgWeddingFriend,
    messageAuthor:'Аманда',
    message:'Это здорово. Но дорогая, неужели бы ты не хотела когда-нибудь обрести покой, завести детей? Проводить время с семьей на пикнике в парке? Не спеши, подумай, узнай его лучше! Что-ж, мне пора бежать к организаторам. Спасибо, что пришла. Увидимся!',
    onTouch: {sceneId:'wedding11'},
  },
  'wedding11':{
    get IBSource(){
      return imgWedding[pars.dress]
    },
    text:'Клэр села в такси и отправилась домой. Слова Аманды засели в её голове. Она подумала, что действительно слишком много предаётся пустым мечтам, и решила, что не будет принимать поспешных решений.',
    onTouch: {sceneId:'wedding12'},
  },
  'wedding12':{
    get IBSource(){
      return imgHome[pars.dress]
    },
    text:'Наступил вечер.. Кевин(Джон) вот-вот заедут за Вами. Преобразитесь!',
    onTouch: {sceneId:'end'},
  },
  
}