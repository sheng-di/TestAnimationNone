import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Alert } from "react-native"
import { Screen, Text, Button } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color, spacings } from "../theme"
import { useStores } from "../models"
import { values } from "mobx"

const ROOT: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacings.large,
  backgroundColor: color.headerBackground,
}

const HEADER_CONTAINER: ViewStyle = {
  marginTop: spacings.extraLarge,
  marginBottom: spacings.medium,
}

export const QuestionScreen: Component = observer(function QuestionScreen() {
  // Pull in one of our MST stores
  const { productStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const ttt = JSON.stringify(productStore.products)
  return (
    <Screen style={ROOT} preset="scroll">
      <View style={HEADER_CONTAINER}>
        <Text preset="header" tx="questionScreen.header" />
      </View>
      <Text text={ttt}/>
      {values(productStore.products).map(v => <Text text={v.title} key={v.id} />)}
      <Button text='增加一个产品' onPress={() => {
        // console.tron.logImportant('sd')
        productStore.addProduct('sd')
      }}/>
    </Screen>
  )
})
