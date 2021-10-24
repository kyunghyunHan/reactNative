/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * 
 */

import React,{useState, useMemo} from "react";
import type{FC} from 'react'
import { SafeAreaView,StyleSheet,FlatList,View,ScrollView,Dimensions ,Text} from "react-native";
import { Colors } from "react-native-paper";
import PersonUsingValueState from './src/screens/PersonUsingValueState'
import PersonUsingObjectState from './src/screens/PersonUsingObjectState'
import PersonUsingPassingState from './src/screens/PersonUsingPassingState'
import * as D from './src/data'
import TopBar from "./src/screens/Tobar";


const {width} =Dimensions.get('window')

type PersonInformation ={
  title:string
  Component:FC<any>
}

const PersonInfomations :PersonInformation[]=[
  {title:'PersonUsingValueState',Component:PersonUsingValueState},
  {title:'PersonUsingObjectState',Component:PersonUsingObjectState},
  {title:'PersonUsingPassingState',Component:PersonUsingPassingState}


]
const numberOfComponents=PersonInfomations.length
export default function App(){
  const [people,setPeople]=useState<D.IPerson[]>([])
  const children=useMemo(()=>
  PersonInfomations.map(({title,Component}:PersonInformation)=>(
    <View style={{flex:1}} key={title}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList data={people}
      renderItem={({item})=><Component person={item}/>}
      keyExtractor={(item,index)=>item.id}
      ItemSeparatorComponent={()=><View style={styles.itemSeparator}/>}/>
    </View>
  ))
  ,[people.length])
  return (
    <SafeAreaView style={styles.flex}>
      <TopBar setPeople={setPeople}/>
      <ScrollView horizontal
      contentContainerStyle={styles.horizontalScrollView}>
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex:{flex:1},
  itemSeparator:{borderWidth:1,borderColor:Colors.grey500},
  horizontalScrollView:{width:width * numberOfComponents},
  text:{fontSize:24,textAlign:'center'}
})