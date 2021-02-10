
import {scene_031} from './scene_031.js';
import {scene_032} from './scene_032.js';
import {scene_033} from './scene_033.js';

import {imgMobile} from './images.js';

export const scene_03 = Object.assign({
  'k0':{
    IBSource:imgMobile[3],
    textAuthor:'Клер',
    buttoms:[
      {sceneId:'k1.1', text:'Привет'},
      {sceneId:'k1.2', text:'Привет! Научишь кататься на сёрфе?'},
      {sceneId:'k1.3', text:'Привет, Кевин! Ты очень интересный! Не хочешь ли выпить чашку кофе?'},
    ], 
  },

  'k1.end.1':{
    IBSource:imgMobile[3],
    messageAuthor:'Кевин',
    message:'Клэр, поужинаешь со мной завтра?',
    textAuthor:'Клер',
    buttoms:[
      {sceneId:'k1.end.1.1', text:'Я не против'},
      {sceneId:'k1.end.1.1', text:'Я и сама хотела предложить!', skillsValues:{excit:1} },
    ],
  },
    'k1.end.1.1':{
      IBSource:imgMobile[3],
      messageAuthor:'Кевин',
      message:'Отлично! Завтра в 18:00 я заеду за тобой! Скинь адресс',
      onTouch: {sceneId:'s3.1'},
    }, 
}, 
scene_031,
scene_032,
scene_033,
)