import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'

const data: any[] = []
for (let i = 0; i < 10; i++) {
  let id = Math.random().toString()
  data.push({
    id,
    source: `https://picsum.photos/id/${parseInt(id.slice(2, 5))}/300/300`,
    name: `People ${i + 1}`,
    phone: id.slice(2, 12),
  })
}

const Contact = () => {
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
              <Text style={{fontWeight: 'bold', marginBottom: 7, fontSize: 18}}>{item.name}</Text>
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

export default Contact
