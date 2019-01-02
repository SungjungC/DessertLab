// /** @format */
//
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);
//

import {Navigation} from 'react-native-navigation'
import Welcome from './screens/Welcome'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Login from './screens/Login'


Navigation.registerComponent('Welcome',()=>Welcome)
Navigation.registerComponent('SignIn',()=>SignIn)
Navigation.registerComponent('SignUp',()=>SignUp)
Navigation.registerComponent('Login',()=>Login)

Navigation.events().registerAppLaunchedListener(()=>{
  Navigation.setRoot({
    root:{
      stack:{
        id:'AppStack',
        children: [
          {
            component:{
              name: 'Welcome',
              options:{
                topBar:{
                  title:
                  {
                    text: 'Welcome'
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
