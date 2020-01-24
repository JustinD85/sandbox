import React from 'react'
import {ScrollView, Text} from 'react-native'


export default ({items}) => (
    items.map(item => <Text key={item}>{item}</Text>)
)
