import React, { useState } from 'react'
import { View, Text, SafeAreaView, Button, Animated, StyleSheet } from 'react-native'

const Menu = () => {
  const [width, setWidth] = useState(new Animated.Value(0));

  const openMenu = () => {
    Animated.timing(width, {
      toValue: 7,
      duration: 1000
    }).start()
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'row'
      }}
    >
      <Animated.View style={{
        flex: width,
        height: '100%',
        backgroundColor: '#f1f1f1',
        borderRightWidth: 1,
        borderRightColor: '#c2c2c2',
        zIndex: 2
      }}>

      </Animated.View>
      <View style={{
        height: 50,
        backgroundColor: 'lightskyblue',
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View
          style={{
            marginLeft: 10
          }}
        >
          <Button
            title="Open menu"
            onPress={() => openMenu()}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Menu
