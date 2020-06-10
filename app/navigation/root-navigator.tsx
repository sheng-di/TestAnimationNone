/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import React from "react"
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"

import { PrimaryNavigator } from "./primary-navigator"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NewScreen } from "../screens"
import { Icon } from "@ui-kitten/components"

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
  PrimaryNavigator: undefined,
  NewScreen: undefined
}

const Stack = createMaterialTopTabNavigator<RootParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="PrimaryNavigator"
        component={PrimaryNavigator}
        options={{
          tabBarLabel: '首页',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ color, size }) => (
            <Icon
              style={{ height: size, width: size }}
              fill={color}
              name='home'
            />
          )
        }}
      />
      <Stack.Screen
        name="NewScreen"
        component={NewScreen}
        options={{
          tabBarLabel: '新页面',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ color, size }) => (
            <Icon
              style={{ height: size, width: size }}
              fill={color}
              name='copy-outline'
            />
          )
        }}
      />
    </Stack.Navigator>
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
