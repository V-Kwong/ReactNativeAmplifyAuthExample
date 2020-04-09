/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import Amplify from 'aws-amplify';
// import { polyfillGlobal } from 'react-native/Libraries/Utilities/PolyfillFunctions';

import App from './App';
import {name as appName} from './app.json';
import awsconfig from './aws-exports';


// polyfillGlobal('URLSearchParams', () => undefined);
// delete global.URLSearchParams;

Amplify.configure(awsconfig);
AppRegistry.registerComponent(appName, () => App);
