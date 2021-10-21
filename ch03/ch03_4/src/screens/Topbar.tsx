import React from 'react'
import { StyleSheet,View,Text ,Image} from 'react-native'
import {Colors} from 'react-native-paper'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import * as D from '../data'

const name = D.randomName()
const avatarUrl =D.randomAvatarUrl(name)
export default function ToBar(){
    return(
        <View style={[styles.view]}>
            <Image style={styles.avatar } source ={{uri:avatarUrl}}/>
            <View style={styles.centerView}>
                <Text style={[styles.text]}>{name}</Text>

            </View>
            <Icon name = "menu" size={24} color="white"/>
            

        </View>
    )
}

const styles = StyleSheet.create({
    view:{flexDirection:'row',alignTtems:'center',padding:5,backgroundColor:Colors.blue500 },
    text:{fontSize:20,color:'white'},
    avatar:{width:40,height:40,borderRadius:20},
    centerView:{flex:1}

})