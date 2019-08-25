import { createSwitchNavigator } from 'react-navigation';
import { routes } from '~/config';

import ExampleScreen from '~/screens/ExampleScreen';

const RootNavigator = createSwitchNavigator(
  {
    [routes.ExampleScreen]: { screen: ExampleScreen },
  },
  {
    initialRouteName: routes.ExampleScreen,
  },
);

export default RootNavigator;
