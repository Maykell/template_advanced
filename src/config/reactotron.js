import Reactotron, {
  networking,
  trackGlobalErrors,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(networking())
    .use(trackGlobalErrors())
    .connect();

  tron.clear();

  console.tron = tron;
}
