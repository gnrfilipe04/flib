import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { SharedElement } from 'react-navigation-shared-element';
import { DATA, DataProps } from './ListScreen';

interface Params {
    item: DataProps
}

export function DetailScreen() {

    const route = useRoute()
    const { item } = route.params as Params

    const {width, height} = Dimensions.get('screen')

    return (
        <View style={{flex: 1}}>
            <SharedElement id={`item.${item.id}.photo`} style={[StyleSheet.absoluteFillObject, {
                        padding: 40,
                    }]}>
                <Image
                    resizeMode='stretch'
                    source={{ uri: item.poster }}
                    style={[StyleSheet.absoluteFillObject, {
                        padding: 40,
                    }]}
                />
            </SharedElement>
        </View>
    )
}
