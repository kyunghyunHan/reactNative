import React , {useCallback,useState} from "react";
import type {FC} from 'react'
import {View,Text,Image,Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'
import moment from "moment-with-locales-es6";
import{Avatar,IconText} from '../components'
import {styles} from './Person.style'

moment.locale('ko')

export type PersonProps ={
    person:D.IPerson


}


const PersonUsingValueState:FC<PersonProps>=({person:initialPerson})=>{
    const avatarpressed =useCallback(()=>Alert.alert('avatar pressed.'),[])
const deletepressed=useCallback(()=>Alert.alert('delete pressed.'),[])
const countIconPressed=useCallback((name:string)=>()=>Alert.alert(`${name} pressed.`),[])

const [comment,setComment]=useState<number>(0)
const [retweet,setRetweet]=useState<number>(0)
const[heart,setHeart]=useState<number>(0)

const commentPressed=useCallback(
    () => setComment((comment)=>comment+1),
    [])
 const retweetPressed=useCallback(
        () => 
        setRetweet((retweet)=>retweet+1),
        [])
  const heartPressed=useCallback(
            () => 
            setHeart((heart)=>heart+1),
            [])
return(
        <View style={[styles.view]}>
            <View style={[styles.lefeView]}>
                <Avatar imageStyle={[styles.avatar]} uri={initialPerson.avatar} size={50} onPress={avatarpressed}/>
            </View>
            <View style={[styles.rightView]}>
                <Text style={[styles.name]}>{initialPerson.name}</Text>
                <Text style={[styles.email]}>{initialPerson.email}</Text>

                <View style={[styles.dataView]}>
                    <Text style={[styles.text]}>
                      {moment(initialPerson.createdDate).startOf('day').fromNow()}
             
                  
                    </Text>
                    <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletepressed}/>
                </View>
                <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text,styles.comments]}>
                    {initialPerson.comments}
                </Text>
                <Image style={[styles.image]} source ={{uri:initialPerson.image}}/>
                <View style={[styles.countView]}>
                    <IconText viewStyle={[styles.touchableIcon]} onPress={commentPressed}
                    name="comment" size={24} color={Colors.blue500}
                    textStyle={[styles.iconText]} text={comment}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                    onPress={retweetPressed}
                    name="twitter-retweet" size={24} color ={Colors.purple500}
                    textStyle ={[styles.iconText]} text={retweet}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                    onPress ={heartPressed}
                    name="heart" size={24} color={Colors.red500}
                    textStyle={[styles.iconText]}text={heart}/>
                </View>



            </View>
         
    
        </View>

)
}






export default PersonUsingValueState