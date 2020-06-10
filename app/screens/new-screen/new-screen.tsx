import React, { FunctionComponent as Component } from "react"
import { TextStyle, View, ViewStyle, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Header, Screen, Wallpaper, Button } from "../../components"
import { color, spacing } from "../../theme"
import { Layout, Text, Icon } from '@ui-kitten/components'
import { useStores } from "../../models"
import { values } from "ramda"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

const LAYOUT_STYLE: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32
  },
  image: {
    height: 300,
    width: 300,
  }
})

export const NewScreen: Component = observer(function NewScreen() {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const { productStore } = useStores()

  return (
    <View style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent} statusBarBackgroundColor={color.headerBackground}>
        <Header
          headerText="新的页面"
          leftIcon="back"
          onLeftPress={goBack}
          style={HEADER}
          titleStyle={HEADER_TITLE}
        />
        <Layout style={LAYOUT_STYLE}>
          <Text category='h1'>HOME</Text>
          <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='star'
          />
        </Layout>
        <Button text='抓取段子' onPress={() => {
          productStore.getProducts()
        }}/>
        {productStore.products.map(v => (
          <Layout key={v.sid}>
            <Text>{v.text}</Text>
            <Image style={styles.image} source={{ uri: v.images }}></Image>
          </Layout>
        ))}
      </Screen>
    </View>
  )
})
