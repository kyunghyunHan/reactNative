import React , {useCallback} from "react";
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


const Person:FC<PersonProps>=({person})=>{
    const avatarpressed =useCallback(()=>Alert.alert('avatar pressed.'),[])
const deletepressed=useCallback(()=>Alert.alert('delete pressed.'),[])
const countIconPressed=useCallback((name:string)=>()=>Alert.alert(`${name} pressed.`),[])


return(
        <View style={[styles.view]}>
            <View style={[styles.lefeView]}>
                <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarpressed}/>
            </View>
            <View style={[styles.rightView]}>
                <Text style={[styles.name]}>{person.name}</Text>
                <Text style={[styles.email]}>{person.email}</Text>

                <View style={[styles.dataView]}>
                    <Text style={[styles.text]}>
                      {moment(person.createdDate).startOf('day').fromNow()}
             
                  
                    </Text>
                    <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500} onPress={deletepressed}/>
                </View>
                <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text,styles.comments]}>
                    {person.comments}
                </Text>
                <Image style={[styles.image]} source ={{uri:person.image}}/>
                <View style={[styles.countView]}>
                    <IconText viewStyle={[styles.touchableIcon]} onPress={countIconPressed('comment')}
                    name="comment" size={24} color={Colors.blue500}
                    textStyle={[styles.iconText]} text={person.counts.comment}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                    onPress={countIconPressed('retweet')}
                    name="twitter-retweet" size={24} color ={Colors.purple500}
                    textStyle ={[styles.iconText]} text={person.counts.retweet}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                    onPress ={countIconPressed('heart')}
                    name="heart" size={24} color={Colors.red500}
                    textStyle={[styles.iconText]}text={person.counts.heart}/>
                </View>



            </View>
         
    
        </View>

)
}






export default Person