import {imgHome} from './images.js';
import {imgStudio} from './images.js';
import {pars} from './pars.js';

export const scene_04 = {

  's3.1':{
    IBSource:imgHome[1],
    text:'Клэр отправила свой адрес и с ужасом поняла, что ей совершенно нечего надеть на встречу. Половина её гардероба всё еще оставалась у Дерека..',
    onTouch: {sceneId:'s3.2'},
  },

  's3.2':{
    IBSource:imgHome[1],
    textAuthor:'Клер',
    text:'И почему я не забрала всё сразу? Неужели я на что-то рассчитывала? Написать ему, что заеду за вещами?..',
    onTouch: {sceneId:'s3.3'},
  },

  's3.3':{
    IBSource:imgHome[1],
    textAuthor:'Клер',
    text:'Ну уж нет! К черту Дерека! И старые джинсы!',
    onTouch: {sceneId:'s3.4'},
  },

  's3.4':{
    IBSource:imgHome[1],
    textAuthor:'Клер',
    text:'Я иду навстречу новой жизни! Новому парню?! Новому платью!',
    onTouch: {sceneId:'s3.5'},
  },

  's3.5':{
    IBSource:imgHome[0],
    text:'Клэр отправилась в студию красоты.',
    onTouch: {sceneId:'studio0'},
  },

  'studio0':{
    IBSource:imgStudio[0],
    message:'Добро пожаловать в нашу имидж студию!\nЗдесь вы можете подобрать новую прическу и одежду вашей героине.',
    onTouch: {sceneId:'studio1'},
  },

  'studio1':{
    IBSource:imgStudio[1],
    textAuthor:'Клер',
    text:'“Французский шик”\nЧудесный выбор! Он подчеркивает мою индивидуальность и чувство стиля.',
    onTouch: {sceneId:'studio2'},
  },

  'studio2':{
    IBSource:imgStudio[2],
    textAuthor:'Клер',
    text:'“Голливудская классика”\nМаленькое чёрное платье - самое то для романтического свидания!',
    onTouch: {sceneId:'studio3'},
  }, 

  'studio3':{
    IBSource:imgStudio[3],
    textAuthor:'Клер',
    text:'“Дерзкое мини”\nВау! Надеюсь мы сойдёмся темпераментами!',
    onTouch: {sceneId:'studio11'},
  },

  'studio11':{
    IBSource:imgStudio[1],
    buttoms:[
      {sceneId:'studio22', text:'Посмотреть еще'},
      {sceneId:'homeAfterStudio', text:'Выбрать этот образ', skillsValues:{flirt:1}, parsValues:{dress:2}},
    ], 
  },

  'studio22':{
    IBSource:imgStudio[2],
    buttoms:[
      {sceneId:'studio33', text:'Посмотреть еще'},
      {sceneId:'homeAfterStudio', text:'Выбрать этот образ', skillsValues:{excit:1}, parsValues:{dress:3}},
    ], 
  },
  
  'studio33':{
    IBSource:imgStudio[3],
    buttoms:[
      {sceneId:'studio11', text:'Посмотреть еще'},
      {sceneId:'homeAfterStudio', text:'Выбрать этот образ', skillsValues:{excit:1}, parsValues:{dress:4}},
    ], 
  },

  'homeAfterStudio':{
    get IBSource(){
      return imgHome[pars.dress]
    },
    text:'Клэр вернулась домой с невероятным чувством лёгкости и комфорта. Теперь она была точно уверена, что идёт верной дорогой, и  что все перемены, произошедшие в её жизни за последний месяц - не случайны.',
    onTouch: {sceneId:'homeAfterStudio01'},
  },
  'homeAfterStudio01':{
    IBSource:imgHome[0],
    text:'Перед сном, укутавшись в тёплое воздушное одеяло, она стала представлять завтрашнюю встречу. Мечты о долгожданном романтическом приключении уводили Клэр далеко за пределы действительности',
    onTouch: {sceneId:'homeAfterStudio02'},
  },
  'homeAfterStudio02':{
    IBSource:imgHome[0],
    text:'Уже через несколько минут Клэр спала крепким сладким сном',
    onTouch: {sceneId:'excitingEvening00'},
  },

}