import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Home from "./Home.js";
import Pesquisa from "./Pesquisa.js";
import RotasBotao from "./RotasBotao.js";

const Tab = createBottomTabNavigator();

export default function RotasTab(){
    return(
        <Tab.Navigator initiRouteName="Home">
        <Tab.Screen 
            name='Pesquisa'
            component={Pesquisa}
            options ={{

                tabBarIcon:({color,size})=><MaterialCommunityIcons name="card-search-outline"
        
                color={color} seze={size} />}}/>

<Tab.Screen 
            name='Home'
            component={Home}
            options ={{

                tabBarIcon:({color,size})=><MaterialCommunityIcons name="basket-outline"
        
                color={color} seze={size} />}}/>

        <Tab.Screen 
            name='RotasBotao'
            component={RotasBotao}
            options ={{

                tabBarIcon:({color,size})=><MaterialCommunityIcons name="fruit-cherries"
        
                color={color} seze={size} />}}/>
        </Tab.Navigator>
    )
}