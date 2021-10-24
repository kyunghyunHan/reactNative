import React ,{useCallback} from 'react'
import type {Dispatch,SetStateAction} from 'react'
import type {FC} from 'react'
import { StyleSheet,View,Text } from 'react-native'
import {Colors} from 'react-native-paper'
import * as D from '../data'

export type  ToBarProps={
    setPeople:Dispatch<SetStateAction<D.IPerson[]>>
}


const TopBar:FC<ToBarProps>=({setPeople})=>{
    const add= useCallback(()=>setPeople(prevPeople=>[D.createRandomPerson(),...prevPeople]),[])
    const daleteAll =useCallback(()=>setPeople(notUsed=>[]),[])
    return (
        <View style={[styles.topBar]}>
            <Text style={[styles.textButton]} onPress={add}>add</Text>
            <Text style={[styles.textButton]} onPress={daleteAll}>daleteAll</Text>

        </View>
    )
}

export default TopBar

const styles=StyleSheet.create({
    topBar:{flexDirection:'row',padding:5,justifyContent:'space-between',backgroundColor:Colors.lightBlue500},
    textButton:{color:'while',fontSize:20}
})