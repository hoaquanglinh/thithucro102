import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = ({url}) => {
  return (
    <View>
      <Image style={{width: '100%', height: 150}}  source={{uri: url}}/>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})