import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import tw from 'twrnc'


const appointmentTypes = [
    {
        id: "1",
        title: "HGV",
        image: "https://links.papareact.com/3pn",
        screen: "SelectClinic"
    },
    {
        id: "2",
        title: "Ambulance",
        image: "https://links.papareact.com/28w",
        screen: "SelectClinic"
    }
]


const NavOptions = () => {
    return (
        <FlatList
            data={appointmentTypes}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 w-40`}>
                    <Image
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: "contain"
                        }}
                        source={{ uri: item.image }}
                    />
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )}>
        </FlatList>
    )
}

export default NavOptions

const styles = StyleSheet.create({})