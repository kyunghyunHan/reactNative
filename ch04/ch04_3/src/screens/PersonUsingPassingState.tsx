import React , {useCallback,useState} from "react";
import type {FC} from 'react'
import {View,Text,Image,Alert} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'
import moment from "moment-with-locales-es6";
import{Avatar} from '../components'
import {styles} from './Person.style'
import PersonIcons from './PersonIcons'

moment.locale('ko')

export type PersonProps ={
    person:D.IPerson}


const PersonUsingPassingState:FC<PersonProps>=({person:initialPerson})=>{
const [person,setPerson] =useState<D.IPerson>({
    ...initialPerson,
    counts:{comment:0,retweet:0,heart:0}
})
    const avatarpressed =useCallback(()=>Alert.alert('avatar pressed.'),[])
const deletepressed=useCallback(()=>Alert.alert('delete pressed.'),[])



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
               <PersonIcons person={person} setPerson={setPerson}/>
          </View>
         
    
   </View>

)
}






export default PersonUsingPassingState