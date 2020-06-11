import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { View } from "react-native"
import { WelcomeScreen, NewScreen } from "../screens"
import { Icon } from "@ui-kitten/components"

export type HomeParamList = {
  WelcomeScreen: undefined,
  NewScreen: undefined
}

const Stack = createMaterialTopTabNavigator<HomeParamList>()

export function HomeTabNavigator () {
  return (
    <Stack.Navigator
      tabBarPosition='bottom'
      tabBarOptions={{
        showIcon: true,
        // eslint-disable-next-line react/display-name
        renderIndicator: () => <View></View>,
        labelStyle: {
          margin: 0,
          fontSize: 10,
          marginBottom: -5
        },
        iconStyle: {
          marginTop: -5
        },
        activeTintColor: 'green',
        inactiveTintColor: 'grey'
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          tabBarLabel: '首页',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({ color }) => (
            <Icon
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
          tabBarIcon: ({ color }) => (
            <Icon
              fill={color}
              name='copy-outline'
            />
          )
        }}
      />
    </Stack.Navigator>
  )
}
