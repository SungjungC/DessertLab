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
import SignIn from './src/screens/SignIn'
import ScrollViewP from './src/screens/ScrollViewP'


Navigation.registerComponent('Login',() => Login)
Navigation.registerComponent('Home',() => Home)
Navigation.registerComponent('SignIn',() => SignIn)
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
