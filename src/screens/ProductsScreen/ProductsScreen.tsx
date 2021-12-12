import auth from '@react-native-firebase/auth'
import React, { FunctionComponent ,useState} from 'react'
import { useTranslation } from 'react-i18next'
import {View,Text,StyleSheet,Image,FlatList,Alert,Modal,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import * as S from './styled'
import Button from '../../components/Buttons'
import Card from '../../components/Card'

type Props = {}
const Options = ()=>{
    return(
        <View>

        </View>
    )
}
const ProductsScreen: FunctionComponent<Props> = () => {
  const [button,setButton] = useState('')
  const [visable,setVisable] = useState(false)
  const [products,setProducts] = useState([
      {id:'1',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER',type:'Valore'},
      {id:'2',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER',type:'Valore'},
      {id:'3',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER',type:'Valore'},
      {id:'4',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER',type:'Valore'},
  ])
  return(
      <S.Container>

        <S.Header> 
          <S.HeaderLeft>
            {/* <S.TextHeader style={{marginRight:10}}>Valore</S.TextHeader> */}
            {/* <Icon name="chevron-down" backgroundColor="#3b5998"/> */}
            <Button text="Valore" onPress={(): void => {}} type="select" />
          </S.HeaderLeft>
          <S.HeaderRight>
              <S.TextHeader>Filtra</S.TextHeader>
          </S.HeaderRight>
        </S.Header>
        
        <S.Main>
            <S.MainCategories>
                <S.WrapCategory horizontal={true}>
                    <Button text="ALL" onPress={(): void => {setVisable(true)}} type="basic" />
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
                            <Card onPress={()=>setVisable(true)} brand={item.brand} image = {item.image} price={item.price} type={item.type}/>
                        )}
                    />
                </S.MainContent>
            </S.WrapContent>
        </S.Main>
        
        <S.Footer>
            <S.FooterItem>
                <Image source={require('../../assets/images/home.png')}/>
            </S.FooterItem>
            <S.FooterItem>
              <Image source={require('../../assets/images/search.png')}/>
                {/* <Icon name='search' color='white' size={30}/> */}
            </S.FooterItem>
            <S.FooterItem>
              <Image source={require('../../assets/images/icon3.png')}/>
                {/* <Icon name='home' color='grey' size={30}/> */}
            </S.FooterItem>
            <S.FooterItem>
                <Icon name='user' color='grey' size={30}/>
            </S.FooterItem>
        </S.Footer>
        
        {
            visable?
            (
                <S.OverlayModel onPress={()=>setVisable(false)}>
                    <S.ContentModal>
                        <S.ColBetween>
                            <Text style={{fontSize:27,fontWeight:'bold',color:'black'}}>Filtra per viore di abbonamento</Text>
                            <S.RowBetween>
                                <Button text="Annulla" onPress={(): void => {setVisable(false)}} type="third" />
                                <Button text="Applica" onPress={(): void => {}} type="primary" />
                            </S.RowBetween>
                        </S.ColBetween>
                    </S.ContentModal>
                </S.OverlayModel>
            ):
            null
        }

      </S.Container>

  )
}

export default ProductsScreen
