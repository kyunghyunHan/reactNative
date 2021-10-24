import React,{useState} from "react";
import { BottomNavigation } from "react-native-paper";
import LifeCycle from "./LifeCycle";
import Timer from "./Timer";
import Interval from "./Interval";
import Fetch from "./Fetch";
//import Home from './Home'
export default function MainNavigator(){
    const [index,setIndex] =useState<number>(0)
    const [routes] =useState([
      {key:'life',title:'LifeCycle',icon:'page-layout-heder-footer'},
      {key:'timer',title:'Timer',icon:'clock-time-four'},
      {key:'intarvar',title:'Intarval',icon:'timeline'},
      {key:'fetch',title:'Fetch',icon:'history'}
      //  {key:'home',title:'Home',icon:'home'},

    ])

    const renderScene=BottomNavigation.SceneMap({
      life:LifeCycle,
      timer:Timer,
      interval:Interval,
      fetch:Fetch
            //home:Home
    })
    return(
        <BottomNavigation
            navigationState={{index,routes}}
            onIndexChange={setIndex}
            renderScene={renderScene}/>
    )
}