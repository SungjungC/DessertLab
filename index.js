/** @format */

import { Navigation } from 'react-native-navigation'

import Login from './src/screens/Login'
import Tab from './src/screens/Tab'

Navigation.registerComponent('Login',() => Login)
Navigation.registerComponent('Tab',() => Tab)

Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            stack:{
                id :'AppStack',
                children : [
                    {
                        component:{
                            name : 'Login',
                            options:{
                                topBar:{
                                    title:
                                    {
                                        // text: 'Main '
                                    }
                                }
                            }
                        },
                    },
                ]
            }
        }
    })
})
