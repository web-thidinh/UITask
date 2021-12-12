import React from 'react'
import {View,Text,Image, Pressable} from 'react-native'
const Product = ()=>{
    return (
    <View>
        <Image
            source={{
                uri:'https://cdn.shopify.com/s/files/1/1218/3578/products/assets_2Fimage_2F5293199-a0208a6f-de55-42c2-9d9d-9d75a9df5664-resized_1024x1024.jpg?v=1636504581'
            }}
        />
        <View>
            <Text>Brand name</Text>
            <View>
                <Pressable>
                    <Text>S</Text>
                </Pressable>
                <Pressable>
                    <Text>M</Text>
                </Pressable>
                <Pressable>
                    <Text>L</Text>
                </Pressable>
            </View>
        </View>
        <View>
            <Text>Valore</Text>
            <Text>SLIVER</Text>
        </View>
    </View>
    )
}

export default Product