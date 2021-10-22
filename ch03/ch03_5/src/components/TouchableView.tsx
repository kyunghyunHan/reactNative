import React from "react";
import type {FC,ReactNode} from 'react'
import { Touchable ,TouchableOpacity,TouchableOpacityProps,View} from "react-native";

export type TouchableViewProps=TouchableOpacityProps & {
    children?:ReactNode
}

export const TouchableView:FC<TouchableViewProps>=({
    children,...touchableProps})=>{
        return(
      <TouchableOpacity {...touchableProps}>
                <View>{children}</View>
    </TouchableOpacity>)
        
    
    
}