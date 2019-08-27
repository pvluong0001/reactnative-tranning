import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Animated } from 'react-native'

const HEADER_MAX_HEIGHT = 120
const HEADER_MIN_HEIGHT = 70
const PROFILE_IMAGE_MAX_HEIGHT = 80
const PROFILE_IMAGE_MIN_HEIGHT = 40

const Avatar = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  const [data, setData] = useState([])

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  })

  return (
    <View style={styles.container}>
      <Animated.View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'lightskyblue',
        height: headerHeight,
      }}>

      </Animated.View>

      <ScrollView
        style={{
          flex: 1,
        }}
        scrollEventThrottle={30}
        onScroll={Animated.event(
          // @ts-ignore
          [{
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          }],
        )}
      >
        <View style={{
          height: PROFILE_IMAGE_MAX_HEIGHT,
          width: PROFILE_IMAGE_MAX_HEIGHT,
          borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
          borderColor: '#fff',
          borderWidth: 3,
          overflow: 'hidden',
          marginTop: HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2),
          marginLeft: 10,
        }}>
          <Image
            source={require('./../static/download.jpeg')}
            style={{
              flex: 1,
            }}
          />
        </View>
        <View>
          <Text style={{
            marginLeft: 10,
            fontWeight: 'bold',
            fontSize: 23,
          }}>Luong Lit</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Avatar
