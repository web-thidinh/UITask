import * as S from './styled'
import {FlatList} from 'react-native'
import Card from '../../components/Card'
import Button from '../../components/Buttons'
import FiltraModal from '../../components/FiltraModal'
import ProductModal from '../../components/ProductModal'
import React, { FunctionComponent ,useState,useRef,useEffect} from 'react'
import {getProducts} from '../../Api/productApi'
import useProducts from '../../hooks/useProducts'
 
type Props = {}

const ProductsScreen: FunctionComponent<Props> = () => {
    const showProductModal = useRef(null)
    const showFiltraModal = useRef(null)

    const products = useProducts()
    // console.log(products)
    
    const listBtn = ['ALL','TOP','BOTTON','HOODIE','T-SHIRT']
    
    const openProductModal = ()=>{
        showProductModal.current.open()
    }

    const openFiltraModal = ()=>{
        showFiltraModal.current.open()
    }
    
    return(
        <S.Container>

            <S.Header>
                <S.HeaderLeft>
                    <Button text="Valore" onPress={(): void => {}} type="select" />
                </S.HeaderLeft>
                <S.HeaderRight onPress={openFiltraModal}>
                    <S.TextHeader>Filtra</S.TextHeader>
                </S.HeaderRight>
            </S.Header>
            
            <S.Content>
                <S.MainCategories>
                    <S.WrapCategory horizontal={true}>
                        {
                            listBtn.map((item,index)=>(
                                <Button key={index} text={item} onPress={(()=>{})} type="basic" />
                            ))
                        }
                    </S.WrapCategory>
                </S.MainCategories>
                
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({item})=>(
                        <Card type='Valore' onPress={openProductModal} brand={item.attributes.name} image = {item.attributes.mainImage.data.attributes.url} price={item.attributes.subscriptionType.data.attributes.name}/>
                    )}
                />
            </S.Content>

            <ProductModal ref={showProductModal}/>
            <FiltraModal ref={showFiltraModal}/>

        </S.Container>
    )
}

export default ProductsScreen
