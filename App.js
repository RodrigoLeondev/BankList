import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import BankListScreen from './src/screens/BankListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    BankListScreen: BankListScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
)

export default createAppContainer(navigator)
