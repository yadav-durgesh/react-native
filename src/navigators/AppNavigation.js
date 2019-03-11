import React from 'react'
import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation'
import Splash from '../components/splash'

/*Navigation */
import Home from "../components/Home";
/*Navigation */

// drawer stack
const DrawerNavigation = createDrawerNavigator({ 
    Home: { screen:Home},
},
{
    initialRouteName: 'Home',
    headerMode: 'screen',
    drawerLockMode: 'locked-closed',
    navigationOptions:{
    disabledBackGesture:false,
    gesturesEnabled: false,
    backBehavior:'none',
    swipeEnabled:false,
    animationEnabled:false
    },
    

    //contentComponent: props => <SideBar {...props} />
})


const initialStack = createStackNavigator({
    splash : {screen : Splash}
},
{
    headerMode:'none',
    initialRouteName: 'splash'
})

// Manifest of possible screens
export const AppNavigation = createStackNavigator({
    drawerStack: { screen: DrawerNavigation },
    initialStack : {screen: initialStack}
},

{
    headerMode: 'none',
    initialRouteName: 'initialStack',
    navigationOptions:{
        gesturesEnabled: false,
    }
})
