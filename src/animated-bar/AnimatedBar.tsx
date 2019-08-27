import React, { useEffect, useState } from 'react'
import { Text, View, Animated, FlatList, Easing, Alert } from 'react-native'

type Bar = {
  id: string,
  height: number
}

const baseData: Bar[] = []
const DELAY = 100

const AnimatedBar = () => {
  const [data, setData] = useState(baseData)

  const renderData = () => {
    let temp = []

    for (let i = 0; i < 10; i++) {
      temp.push({
        id: Math.random().toString(),
        height: Math.floor(Math.random() * 100),
      })
    }

    setData(temp)
  }

  useEffect((): any => {
    renderData()

    let timeout = setTimeout(() => {
      renderData()

      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {
            text: 'OK', onPress: () => {
              renderData()
            },
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false },
      )
    }, 2000)
    return () => {

    }
  }, [])

  return (
    <View style={{
      flexDirection: 'row',
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
    }}>
      <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          flex: 1,
          alignItems: 'stretch',
        }}
      >
        {
          data.map((item: Bar, index: number) => (
            <Bar key={item.id} {...item} delay={index * DELAY}/>
          ))
        }
      </View>
    </View>
  )
}

type Props = {
  delay: number
}

const Bar = (props: Bar & Props) => {
  const [height, setHeight] = useState(new Animated.Value(0))

  useEffect((): any => {
    Animated.timing(height, {
      toValue: props.height,
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
      delay: props.delay,
    }).start()

    return undefined
  }, [])

  return (
    <View
      style={{
        backgroundColor: 'crimson',
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        height: 100,
      }}
    >
      <Text
        style={{
          position: 'absolute',
          top: -20,
          alignSelf: 'center',
        }}
      >{props.height}</Text>
      <Animated.View
        style={{
          backgroundColor: '#c2c2c2',
          height: height,
          borderTopRightRadius: 3,
          borderTopLeftRadius: 3,
          width: 20,
        }}
      />
    </View>
  )
}

export default AnimatedBar
