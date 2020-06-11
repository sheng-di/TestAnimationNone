/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"

import { WelcomeScreen, DemoScreen, NewScreen, AwesomeScreen, QuestionScreen } from "../screens"
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  welcome: undefined
  demo: undefined
  new: undefined,
  awesome: undefined,
  question: undefined
}

const Stack = createStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
        // dark or transparent color to avoid android white flash.
        cardStyle: {
          backgroundColor: 'transparent',
          opacity: 1,
          shadowOpacity: 1
        }
      }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
      <Stack.Screen name="new" component={NewScreen} />
      <Stack.Screen name="awesome" component={AwesomeScreen} />
      <Stack.Screen name="question" component={QuestionScreen} />
    </Stack.Navigator>
  )
}

