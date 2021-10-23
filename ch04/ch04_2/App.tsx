/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
*/
import React from "react";
import { StyleSheet,SafeAreaView,ScrollView,Dimensions } from "react-native";
import Cache from './src/screens/Cache'
import Memo from './src/screens/Memo'
import Fibo from './src/screens/Fibo'
import { number } from "yargs";

const {width} = Dimensions.get('window')
const numberOfComponents=3

export default function App(){

  return(
    <SafeAreaView>
      <ScrollView horizontal contentContainerStyle={[styles.contentContainerStyle]}>
        <Cache/>
        <Memo/>
        <Fibo/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  SafeAreaView:{flex:1},
  contentContainerStyle:{width:width * numberOfComponents}
})