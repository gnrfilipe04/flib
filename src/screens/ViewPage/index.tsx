import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Text, Button, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native'
import PagerView from 'react-native-pager-view'

export function ViewPage(){

  const pagerRef = useRef<any>(null);

  const [ blockScroll, setBlockScroll ] = useState(false)

  const [ currentPage, setCurrentPage ] = useState(0)

  const navigate = (index: number) => {
    pagerRef.current.setPage(index)
    
  }

  useEffect(() => {
    pagerRef.current.setScrollEnabled(blockScroll)
  }, [blockScroll])

  return (
    <View
      style={styles.container}
    >
        <PagerView 
          keyboardDismissMode='on-drag' 
          ref={pagerRef} style={styles.viewPager} 
          initialPage={0}
          onPageSelected={(e) => {
            setCurrentPage(e.nativeEvent.position)
          }}
          orientation={'vertical'}>
          <View style={styles.page} key="1">
            <Text>First page</Text>
            <Text>Swipe ➡️</Text>
            <TextInput 
              onFocus={() => setBlockScroll(false)} 
              onBlur={() => setBlockScroll(true)} style={{ backgroundColor: 'blue'}}/>
          </View>
          <View style={styles.page} key="2">
            <Text>Second page</Text>
          </View>
          <View style={styles.page} key="3">
            <Text>Third page</Text>
          </View>
        </PagerView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Button onPress={() => navigate(currentPage - 1 === -1 ? 0 : currentPage - 1)} title='previous'/>
          <Button onPress={() => navigate(currentPage + 1 === 4 ? 3 : currentPage + 1)} title='next'/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 1.05
  },
  page1: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: 'yellow'
  },
   viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})