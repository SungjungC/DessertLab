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
import Home from './src/screens/Home'

Navigation.registerComponent('Login',() => Login)
Navigation.registerComponent('Home',() => Home)

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
