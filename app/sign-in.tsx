import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SigIn = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className='Text-base text-center uppercase font-rubik text-black-200'>Try</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SigIn