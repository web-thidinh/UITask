import React, { useState } from 'react'
import * as S from './styled'
import {Text,FlatList, Image,View ,Pressable} from 'react-native'
import Button from '../../components/Buttons'
import Card from '../../components/Card'
 const Main = ()=>{
    const [button,setButton] = useState('')
    const [products,setProducts] = useState([
        {id:'1',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER',type:'Valore'},
        {id:'2',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER',type:'Valore'},
        {id:'3',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER',type:'Valore'},
        {id:'4',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER',type:'Valore'},
    ])
    return(
        <S.Main>
            <S.MainCategories>
                <S.WrapCategory horizontal={true}>
                    <Button text="ALL" onPress={(): void => {}} type="basic" />
                    <Button text="TOP" onPress={(): void => {}} type="basic" />
                    <Button text="BOTON" onPress={(): void => {}} type="basic" />
                    <Button text="HOODIE" onPress={(): void => {}} type="basic" />
                    <Button text="T-SHIRT" onPress={(): void => {}} type="basic" />
                </S.WrapCategory>
            </S.MainCategories>
            <S.WrapContent>
                <S.MainContent>
                    <FlatList
                        data={products}
                        numColumns={2}
                        renderItem={({item})=>(
                            <Card brand={item.brand} image = {item.image} price={item.price} type={item.type}/>
                        )}
                    />
                </S.MainContent>
            </S.WrapContent>
        </S.Main>
    )
}
export default Main