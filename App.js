
// Девочка (25 лет) Клер - имя настройки
// Кевин Джон Выбор
// Диалог в тиндере (диалог с каждым)
// Студия красоты
// Свадьба подруги
// Свидание (свидание диалог с каждым)
// Финал (положительный (с Кевиным - уезжаешь жить на Бали, а с Джоном семья) и отрицательный - телек с картинкой положительной)
// 4 скила - доброта ответственность флирт азарт


import React , { Component } from 'react';
import {  Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


// Сцена 1 - правила игры, комната, знакомство с героиней
import {scene_01} from './data_files/scene_01.js';
// Сцена 2 - приложение, выбор одного из двух парней
import {scene_02} from './data_files/scene_02.js';
// Сцена 3 - Кевин (переписка в приложении)
import {scene_03} from './data_files/scene_03.js';
// Сцена 4 - Выбор платья
import {scene_04} from './data_files/scene_04.js';
// Сцена 5 - Волнующий вечер
import {scene_05} from './data_files/scene_05.js';
// Сцена 6 - Свадьба
import {scene_06} from './data_files/scene_06.js';
// Сцена End - Конец игры
import {scene_end} from './data_files/scene_end.js';

import {skills} from './data_files/skills.js';
import {pars} from './data_files/pars.js'; 


const fontFamilyMain = 'Helvetica-Light'

// Ок Телефоном с Амандой
// Ок Свадьба без людей
// Ок Локация - свидание с Кевином

// Эля
// Диалоги аманды (свадьба)
// Концовка - На Бали с кевином
// Концовка - Телек с Бали
// Ok Иконки - Доброта и ответственность

// Игорь
// Рестора сцена
// Имя героини при запуске игры
// Сделать сброс параметров в конце игры

// Ок Внести все данные до свидания с Кевином
// Подготовить скрипты для свидания и финалов кевина
// Сохранит ли стейт приложение?


// Ок Тескт к образам в студии
// Ок Комната с Клер в "пижаме"
// Ок Комната с приложением с двумя кружками с лицами партнеров
// Ок Комната с Клер с 3мя нарядами


// ОК Локация - свадебная локация с подругой


// ОК Студия - убрать надпись сзади
// ОК Студия - модель подумать над расположением
// ОК Студия - фон одинаковый

// Игорь
// Ок Тескт к образам в студии
// Ок Комната с приложением с двумя кружками с лицами партнеров
// Логику фона в зависимости от параметров игры

// Сделать gameProps и gameConditions
// Ок Внести сюжет в код до конца по Кевину 
// Внести сюжет по встреча с подругой
// Цифры на иконках разукрасить и выставить покрасивше
// Свайп одежды (три тчечки)

//ОК Комната
//ОК Адаптив для высоты блока снизу

//OK сделать свайп или клик по экрану вместо далее
//OK сделать плашки с именами
//OK Иконки сделать
//OK Сдлеать алгоритм по балам и сценам

//IOS(+верстка -стоит_денег даже протестировать на телефоне 99$ в год) 
//ANDROID (-верстка +не надо платить чтобы тестить)

//сохранение игры
//оплата

var scenes = {}

scenes = Object.assign(scenes, scene_01, scene_02, scene_03, scene_04, scene_05, scene_06, scene_end)

class GameScreen extends Component {

  constructor() {
    
    super();
    this.state = {
      scene:scenes['start'],
      skills:skills,
    };
  }
  
  updateSkills(skillsValues){
    if (skillsValues) {
      var stateSkills = this.state.skills;
      Object.keys(skillsValues).map((nn) => {
        stateSkills[nn].value += skillsValues[nn]
      })
      this.setState({
        skills:stateSkills
      });
    }
  }

  updatePars(parsValues){
    if (parsValues) {
      var stateSkills = pars;
      Object.keys(pars).map((nn) => {
        pars[nn] = parsValues[nn]
      })
    }
  }

  clickButtom(buttom){
    if (buttom.unsetSkills==true) {
      var stateSkills = this.state.skills;
      Object.keys(stateSkills).map((nn) => {
        stateSkills[nn].value = 0
      })
      this.setState({
        skills:stateSkills
      });
    }
    
    this.updateSkills(buttom.skillsValues)
    this.updatePars(buttom.parsValues)
    
    var sceneId = buttom.sceneId
    if (buttom.sceneConditions) 
      for (var i = 0; i < buttom.sceneConditions.length; i++) {
        var sceneCondition = buttom.sceneConditions[i]
        console.log(sceneCondition)
        var resCondition = true
        Object.keys(sceneCondition.skillsConditions).map((nn) => {
          if (sceneCondition.skillsConditions[nn].max && sceneCondition.skillsConditions[nn].max < this.state.skills[nn].value){
            resCondition = false
            console.log('max ' + nn)
          }
          if (sceneCondition.skillsConditions[nn].min && sceneCondition.skillsConditions[nn].min > this.state.skills[nn].value){
            resCondition = false
            console.log('min  ' + nn)
          }
        })
        if (resCondition) {
          sceneId = sceneCondition.sceneId
          break
        }
      }
    this.setState({
      scene:scenes[sceneId]
    });
  }
  renderAuthor(author){
    if (author) return (
      <View style={{
        justifyContent: 'flex-start', 
        flexDirection: 'row',
        }}>
        <View style={{
          backgroundColor: '#DDBFDD',
          borderRadius: '5px',
          borderStyle: 'solid',
          borderColor: '#DDBFDD',
          borderWidth:'0px',
          padding:0,
          }}>
          <Text style={{fontFamily: fontFamilyMain, padding:3}}>{author}</Text>
        </View>
      </View>
    )
    return null;
  }
  renderMessage(){
    if (this.state.scene.message) return (
        <View style={{
          position:'relative',
          width: '70%',
          backgroundColor: '#FFFFFF',
          borderRadius: '22px',
          borderStyle: 'solid',
          borderColor: 'rgba(118, 0, 120, 0.14)',
          borderWidth:'4px',
          padding:10,
          }}>
          { this.renderAuthor(this.state.scene.messageAuthor) }    
        <Text style={{fontFamily: fontFamilyMain, padding:10,}}>{this.state.scene.message}</Text>
      </View>
    )
    return null;
  }

  renderSkills(){
    if (this.state.skills) {
      return(
      <View style={{
        position:"absolute",
        top:0,
        right: 0,
        width: '50px',
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: '10px',
        borderStyle: 'solid',
        borderColor: 'rgba(118, 0, 120, 0.14)',
        borderWidth:'0px',
        padding:3,
        }}>

        {Object.keys(this.state.skills).map((nn) => {
          {return(
            <Text key={nn} style={{fontFamily: fontFamilyMain, flex: 1}}>
              <Image source={this.state.skills[nn].imgSource} style={{ width: 30, height: 30}} />
              <Text style={{fontFamily: fontFamilyMain, padding:0}}>{this.state.skills[nn].value}</Text>
            </Text>
          )}
        })}
      </View>
      )
    }
    return null
  }
  renderText(){
    if (this.state.scene.text) return (
      <Text style={{fontFamily: fontFamilyMain, padding:10,}}>{this.state.scene.text}</Text>
    )
    return null
  }
  renderButtoms(){
    if (this.state.scene.buttoms) 
    return this.state.scene.buttoms.map((buttom, i) => {
      return(
        <TouchableOpacity key={"TouchableOpacityi-"+i}
          onPress={() => { this.clickButtom(buttom)}}
          style={{ 
            backgroundColor: 'rgba(118, 0, 120, 0.5)',
            borderRadius: '20px',
            padding:10,
            marginTop:10,
            }}>
          <Text style={{fontFamily: fontFamilyMain, fontSize: 16, color: '#fff' }}>{buttom.text}</Text>
        </TouchableOpacity>
      )
    })
    return null
  }

  renderTouchBlock(){
    if (this.state.scene.text || this.state.scene.buttoms)
      return (
        <View style={{
          position: 'absolute', 
          bottom:'0%',
          width: '90%',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: '22px',
          borderTopRightRadius: '22px',
          borderStyle: 'solid',
          borderColor: 'rgba(118, 0, 120, 0.14)',
          borderTopWidth:'4px',
          borderLeftWidth:'4px',
          borderRightWidth:'4px', 
          padding:10,
          }}>
          { this.renderAuthor(this.state.scene.textAuthor) }
          { this.renderText() }
          { this.renderButtoms() }
        </View>
      )
    return null
  }
  onTouch(){
    if (this.state.scene.onTouch)
      this.clickButtom(this.state.scene.onTouch)
    return null
  }
  render(){
    return (
      <ImageBackground   source={this.state.scene.IBSource} style={{width: '100%', height: '100%'}}>
      <View onTouchStart={() => { this.onTouch() }} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        { this.renderMessage() }
        { this.renderSkills() }
        { this.renderTouchBlock() }

      </View>
      </ImageBackground>  
    )
  }
}

export default function App() {
  return (
    <GameScreen/>
  );
}

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



/*
onTouch: {
          
  sceneId:'end',
  sceneConditions:[
    {
      sceneId:'end2', 
      skillsConditions:{
        excit:{min:2},
        care:{min:1},
      }
    },
    {
      sceneId:'end2', 
      gameConditions:{
        man:1,
      }
    },
  ]
},*/