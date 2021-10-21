/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 * /
 * */

import React from "react";
import { StyleSheet ,SafeAreaView,Platform,View,Alert} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from 'react-native-paper'
import ToBar from './src/screens/Topbar'
import Content from './src/screens/Contents'
import BottomBar from './src/screens/BottomBar'

export default function App(){
const iconPressed =()=>Alert.alert('icon pressed.')
  return(
    <>
    <SafeAreaView style={styles.flex}>
      <ToBar/>
      <Content/>
      <BottomBar/>


    </SafeAreaView>
    <View style={[styles.absoluteView]}>
      <Icon name="feather" size={50} color="white" onPress={iconPressed}/>

 
    </View>
    </>
  )
}
const styles =StyleSheet.create({
  flex:{flex:1,backgroundColor:Colors.lightBlue100},
  absoluteView:{
    backgroundColor:Colors.purple500,
    position:'absolute',
    right:30,
    bottom:Platform.select({ios:100,android:80}),
    padding:10,
    borderRadius:35

  }
})