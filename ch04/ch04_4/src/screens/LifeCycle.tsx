import React,{useEffect,useLayoutEffect,useCallback} from 'react'
import {Platform, StyleSheet,View,Text } from 'react-native'
import {Colors} from 'react-native-paper'
import type {LayoutChangeEvent} from 'react-native'

const title = 'LifeCycle'
export default function LifeCycle(){
    useEffect(()=>{
        console.log(Platform.OS,'useEffect called')
        return()=>console.log(Platform.OS,'useLayoutEffect finished')
    },[])
    const onLayout = useCallback((e:LayoutChangeEvent)=>{
        const {layout}=e.nativeEvent
        console.log(Platform.OS,'onLayout called',layout)
    },[])
    console.log(Platform.OS,'renderstart')
    return(
        <View  onLayout={onLayout}style={[styles.view]}>
            <Text style={[styles.title]}>LifeCycle</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    view:{flex:1,padding:5,backgroundColor:Colors.blue500},
    title:{fontSize:30,fontWeight:'600'}
})