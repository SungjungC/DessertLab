/** @format */

import { Navigation } from 'react-native-navigation'

import Login from './src/screens/Login'
import Tab from './src/screens/Tab'
import Filter from './src/screens/Filter'
import Best from './src/screens/Best'


Navigation.registerComponent('Login',() => Login)
Navigation.registerComponent('Tab',() => Tab)
Navigation.registerComponent('Filter',() => Filter)
Navigation.registerComponent('Best',() => Best)

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
