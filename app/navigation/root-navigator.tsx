/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { NewScreen, DemoScreen, AwesomeScreen, QuestionScreen } from "../screens"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import { HomeTabNavigator } from "./home-navigator"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */

export type RootParamList = {
  home: undefined,
  demo: undefined
  new: undefined,
  awesome: undefined,
  question: undefined
}

const SStack = createStackNavigator<RootParamList>()
const RootStack = () => {
  return (
    <SStack.Navigator
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
      <SStack.Screen name="home" component={HomeTabNavigator} />
      <SStack.Screen name="demo" component={DemoScreen} />
      <SStack.Screen name="new" component={NewScreen} />
      <SStack.Screen name="awesome" component={AwesomeScreen} />
      <SStack.Screen name="question" component={QuestionScreen} />
    </SStack.Navigator>
  )
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  )
})

RootNavigator.displayName = "RootNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['home', 'new']
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
