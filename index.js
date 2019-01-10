// /** @format */
//
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);
//

import { Navigation } from 'react-native-navigation'

import Login from './src/screens/Login'
import ScrollViewP from './src/screens/ScrollViewP'
import Tab from './src/screens/Tab'
import Filter from './src/screens/Filter'
import Best from './src/screens/Best'


Navigation.registerComponent('Login',() => Login)
Navigation.registerComponent('Tab',() => Tab)
Navigation.registerComponent('Filter',() => Filter)
Navigation.registerComponent('Best',() => Best)
Navigation.registerComponent('ScrollViewP',() => ScrollViewP)


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
