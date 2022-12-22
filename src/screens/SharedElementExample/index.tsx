// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { DetailScreen } from './components/DetailScreen';
import { ListScreen } from './components/ListScreen';

const Stack = createSharedElementStackNavigator();

export const SharedElementExample = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 300}},
              close: { animation: 'timing', config: { duration: 300}}
            },
            cardStyleInterpolator: ({ current: {progress} }) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }
          })}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [`item.${item.id}.photo`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
  
  
  
  