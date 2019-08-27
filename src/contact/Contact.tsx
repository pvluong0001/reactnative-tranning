import React from 'react'
import { View, Text, FlatList, Image, Button } from 'react-native'
import {createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation';

const data: any[] = []
for (let i = 0; i < 10; i++) {
  let id = Math.random().toString()
  data.push({
    id,
    source: `https://picsum.photos/id/${parseInt(id.slice(2, 5))}/300/300`,
    name: `People ${i + 1}`,
    phone: id.slice(2, 12),
    txt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  })
}

const Contact = (props) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: 'lightskyblue',
              marginBottom: 10,
              padding: 15,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                borderWidth: 3,
                borderColor: '#fff',
                overflow: 'hidden',
              }}
            >
              <Image
                source={{uri: item.source}}
                style={{flex: 1}}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text 
                style={{fontWeight: 'bold', marginBottom: 7, fontSize: 18}}
                onPress={() => {
                  // props.navigation.dispatch(StackActions.reset({
                  //   index: 0,
                  //   actions: [
                  //     NavigationActions.navigate({
                  //       routeName: 'Detail'
                  //     })
                  //   ]
                  // }))
                  props.navigation.navigate('Detail', {
                    data: item
                  })
                }}
              >{item.name}</Text>
              <Text>{item.phone}</Text>
            </View>

          </View>
        )}
        style={{
          padding: 10,
        }}
      />
    </View>
  )
}

const Detail = (props) => {
  const data = props.navigation.getParam('data', null);
  console.log(data)

  return (
    <View style={{flexDirection: 'column', padding: 10}}>
      <View style={{height: 200, marginBottom: 10}}>
        <Image source={{uri: data.source}} style={{flex: 1, alignSelf: 'stretch', width: undefined, height: undefined}}/>
      </View>
      <View style={{marginBottom: 10}}>
        <Text>{data.txt}</Text>
      </View>
      <View>
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
        <Button />
      </View>
    </View>
  )
}

const AppNavigator = createStackNavigator({
  Detail: {
    screen: Detail
  },
  Contact: {
    screen: Contact
  }
}, {
  initialRouteName: 'Contact',
  headerMode: 'none'
})

export default createAppContainer(AppNavigator);
