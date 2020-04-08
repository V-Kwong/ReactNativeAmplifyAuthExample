/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import Amplify from 'aws-amplify';

import App from './App';
import {name as appName} from './app.json';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
AppRegistry.registerComponent(appName, () => App);
