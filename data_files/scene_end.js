import {imgHome} from './images.js';

export const scene_end = {
  'end':{
    IBSource:imgHome[0],
    message:'Игра поиграна выиграна',
    buttoms:[
      {sceneId:'start', text:'Начать заново!', unsetSkills:true},
    ], 
  },
  'end2':{
    IBSource:imgHome[0],
    message:'Игра выиграна',
    buttoms:[
      {sceneId:'start', text:'Начать заново!', unsetSkills:true},
    ], 
  }
}