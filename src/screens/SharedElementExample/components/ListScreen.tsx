import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, StyleSheet, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SharedElement } from 'react-navigation-shared-element';

export interface DataProps {
    id: number,
    title: string;
    location: string;
    date: string;
    poster: string;
}

export const DATA: DataProps[] = [
    {   
        id: 1,
        title: 'Afro vibes',
        location: 'Mumbai, India',
        date: 'Nov 17th, 2020',
        poster:
        'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
    },
    {   
        id: 2,
        title: 'Jungle Party',
        location: 'Unknown',
        date: 'Sept 3rd, 2020',
        poster:
        'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
    },
    {   
        id: 3,
        title: '4th Of July',
        location: 'New York, USA',
        date: 'Oct 11th, 2020',
        poster:
        'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
    },
    {
        id: 4,
        title: 'Summer festival',
        location: 'Bucharest, Romania',
        date: 'Aug 17th, 2020',
        poster:
        'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
    },
    {   
        id: 5,
        title: 'BBQ with friends',
        location: 'Prague, Czech Republic',
        date: 'Sept 11th, 2020',
        poster:
        'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
    },
    {   
        id: 6,
        title: 'Festival music',
        location: 'Berlin, Germany',
        date: 'Apr 21th, 2021',
        poster:
        'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
    },
    {   
        id: 7,
        title: 'Beach House',
        location: 'Liboa, Portugal',
        date: 'Aug 12th, 2020',
        poster:
        'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
    },
];

export function ListScreen() {

    const navigation = useNavigation()
    const { width } = Dimensions.get('screen');

    const ITEM_WIDTH = width * 0.76;
    const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 80}}>
            <FlatList 
                data={DATA}
                keyExtractor={item => item.poster}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
                            <SharedElement id={`item.${item.id}.photo`}>
                                <Image
                                    resizeMode='cover'
                                    source={{ uri: item.poster }}
                                    style={[{
                                        width: ITEM_WIDTH,
                                        height: ITEM_HEIGHT,
                                        borderRadius: 14,
                                        marginBottom: 10
                                    }]}
                                />
                            </SharedElement>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}