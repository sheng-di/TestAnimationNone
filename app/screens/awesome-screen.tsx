import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import { color } from "../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const AwesomeScreen: Component = observer(function AwesomeScreen() {
  // Pull in one of our MST stores
  // const { TodoModel } = useStores()
  // OR
  // const rootStore = useStores()
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text='awesome-screen' />
    </Screen>
  )
})
