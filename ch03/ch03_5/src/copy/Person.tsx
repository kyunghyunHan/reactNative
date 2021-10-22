import React from "react";
import type {FC} from 'react'
import {View,Text,Image} from 'react-native'
import * as D from '../data'
import { styles } from "./Person.style";
import moment from "moment-with-locales-es6";

moment.locale('ko')

export type PersonProps ={
    person:D.IPerson


}

const Person: FC<PersonProps>=({person})=>{
    return(
        <View style={[styles.view]}>
            <Image source={{uri:person.avatar}} style={[styles.avatar]}/>
            <View style={[styles.nameEmailView]}>
                <Text style={[styles.name]}>{person.name}</Text>
                <Text style={[styles.email]}>{person.email}</Text>
            </View>
            <View style={[styles.dataView]}>
                <Text style={[styles.createDate]}>
                    {moment(person.createdDate).startOf('day').fromNow()}
                </Text>
            </View>
            <Text style={[styles.text]}>{person.comments}</Text>
            <Image style={[styles.image]}source={{uri:person.image}}/>
            <View style={[styles.countView]}>
                <Text style={[styles.counts]}>{person.counts.comment}</Text>
                <Text style={[styles.counts]}>{person.counts.retweet}</Text>
                <Text style={[styles.counts]}>{person.counts.heart}</Text>
            </View>
        </View>
    )
}

export default Person