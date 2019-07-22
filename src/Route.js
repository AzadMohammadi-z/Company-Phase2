import {createStackNavigator , createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Green from './components/Green';

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Green : {screen: Green}
  });
  
export default createAppContainer(MainNavigator);
