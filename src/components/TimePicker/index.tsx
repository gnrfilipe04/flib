import { ReactNode, useEffect, useRef, useState } from 'react';

import { Animated, StyleSheet, Dimensions, Text, TouchableOpacity, View } from 'react-native';

import { Container } from './styles';

interface TimePickerProps {
  
}

export function TimePicker() {
  const {height, width} = Dimensions.get('window')

  const [hours, setHours] = useState<string[]>([])
  const [minutes, setMinutes] = useState<string[]>([])

  const genHours = () => {
    return Array.from({length: 27}, (_, i) => i)
      .map((hour) => String(hour).padStart(2, '0'))
      .map((hour, index) => index === 25 || index === 26 || index === 27 ? hour = '' : hour)
  }

  const genMinutes = () => {
    return Array.from({length: 62}, (_, i) => i)
      .map((hour) => String(hour).padStart(2, '0'))
      .map((hour, index) => index === 60 || index === 61 || index === 62 ? hour = '' : hour)

  }

  const arrHours = genHours()
  const arrMinutes = genMinutes()

  const itemSize = 40
  const itemSpacing = (width - itemSize) / 2

  useEffect(() => {
    setHours(arrHours)
    setMinutes(arrMinutes)

  }, [])

  const scrollY = useRef(new Animated.Value(0)).current
  const scrollYM = useRef(new Animated.Value(0)).current
  console.log(scrollY)

  return (
    <Container 
      maxHeight={120} 
      style={{
        flexDirection: 'row',
      }}>
      <Animated.FlatList 
        data={hours}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemSize}
        decelerationRate={'fast'}
        style={{flexGrow: 0}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          { useNativeDriver: true }
        )}
        renderItem={(({item, index}) => {

          const inputRange = [
            (index - 1) * itemSize,
            (index - 1) * itemSize,
            index * itemSize,
            (index + 1) * itemSize 
          ]

          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [.4, .4, 1, .4]
          })

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [.7, .7, 1, .7]
          })

          return (
            <View style={{
              height: itemSize,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Animated.Text 
                style={{
                  color: 'white', 
                  fontSize: 30,
                  opacity,
                  transform: [{
                    scale
                  }]
                }}>
                  {item}
              </Animated.Text>
            </View>
          )
        })}
      />
      <Text style={{
        color: 'white',
        fontSize: 28,
        paddingHorizontal: 10

      }}>:</Text>
      <Animated.FlatList 
        data={minutes}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemSize}
        decelerationRate={'fast'}
        style={{flexGrow: 0}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollYM}}}],
          { useNativeDriver: true }
        )}
        renderItem={(({item, index}) => {

          const inputRange = [
            (index - 1) * itemSize,
            (index - 1) * itemSize,
            index * itemSize,
            (index + 1) * itemSize 
          ]

          const opacity = scrollYM.interpolate({
            inputRange,
            outputRange: [.4, .4, 1, .4]
          })

          const scale = scrollYM.interpolate({
            inputRange,
            outputRange: [.7, .7, 1, .7]
          })

          return (
            <View style={{
              height: itemSize,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Animated.Text 
                style={{
                  color: 'white', 
                  fontSize: 30,
                  opacity,
                  transform: [{
                    scale,
                  }]
                }}>
                  {item}
              </Animated.Text>
            </View>
          )
        })}
      />
    </Container>
  );
};
