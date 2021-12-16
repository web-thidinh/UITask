import * as S from './styled'
import {FlatList} from 'react-native'
import Card from '../../components/Card'
import Button from '../../components/Buttons'
import FiltraModal from '../../components/FiltraModal'
import ProductModal from '../../components/ProductModal'
import React, { FunctionComponent ,useState,useRef} from 'react'

type Props = {}

const ProductsScreen: FunctionComponent<Props> = () => {
  const showProductModal = useRef(null)
  const showFiltraModal = useRef(null)
  const listBtn = ['ALL','TOP','BOTTON','HOODIE','T-SHIRT']
  const products = [
      {id:'1',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'2',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'3',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'4',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'5',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'6',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
  ]

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
                        <Card type='Valore' onPress={openProductModal} brand={item.brand} image = {item.image} price={item.price}/>
                    )}
                />
            </S.Content>

            <ProductModal ref={showProductModal}/>
            <FiltraModal ref={showFiltraModal}/>

      </S.Container>
  )
}

export default ProductsScreen
