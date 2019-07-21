import {createStackNavigator , createAppContainer} from 'react-navigation';
import Home from './Components/Home';
import Green from './Components/Green';

const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Green : {screen: Green}
  });
  
export default createAppContainer(MainNavigator);
