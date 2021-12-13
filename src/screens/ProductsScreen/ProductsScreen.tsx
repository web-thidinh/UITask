import React, { FunctionComponent ,useState} from 'react'
import {View,Text,Image,FlatList,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as S from './styled'
import Button from '../../components/Buttons'
import Card from '../../components/Card'
import Modal from "react-native-modal";
import HomeScreen from '../HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()
type Props = {}
const Options = ()=>{
    return(
        <View>

        </View>
    )
}
const ProductsScreen: FunctionComponent<Props> = () => {

  const [products,setProducts] = useState([
      {id:'1',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'2',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'3',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'4',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'5',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'6',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
  ])

  const [isModalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  return(
      <S.Container>

            <S.Header>
                <S.HeaderLeft>
                    <Button text="Valore" onPress={(): void => {}} type="select" />
                </S.HeaderLeft>
                <S.HeaderRight>
                    <S.TextHeader>Filtra</S.TextHeader>
                </S.HeaderRight>
            </S.Header>
            
            <S.Main>
                <S.MainCategories>
                    <S.WrapCategory horizontal={true}>
                        <Button text="ALL" onPress={toggleModal} type="basic" />
                        <Button text="TOP" onPress={(): void => {}} type="basic" />
                        <Button text="BOTON" onPress={(): void => {}} type="basic" />
                        <Button text="HOODIE" onPress={(): void => {}} type="basic" />
                        <Button text="T-SHIRT" onPress={(): void => {}} type="basic" />
                    </S.WrapCategory>
                </S.MainCategories>
                
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({item})=>(
                        <Card type='Valore' onPress={toggleModal} brand={item.brand} image = {item.image} price={item.price}/>
                    )}
                />
            </S.Main>
            
            {/* <S.MainTab>
                <S.MainTabItem onPress={()=>Alert.alert('Clicked')}>
                    <Image source={require('../../assets/images/home.png')}/>
                </S.MainTabItem>
                <S.MainTabItem onPress={()=>Alert.alert('Clicked')}>
                    <Image source={require('../../assets/images/search.png')}/>
                </S.MainTabItem>
                <S.MainTabItem onPress={()=>Alert.alert('Clicked')}>
                    <Image source={require('../../assets/images/icon3.png')}/>
                </S.MainTabItem>
                <S.MainTabItem onPress={()=>Alert.alert('Clicked')}>
                    <Icon name='user' color='grey' size={30}/>
                </S.MainTabItem>
            </S.MainTab> */}

            <Modal isVisible={isModalVisible} coverScreen={true}>
                <S.ContentModal>
                    <S.ColBetween>
                        <Text style={{fontSize:27,fontWeight:'bold',color:'black'}}>Filtra per viore di abbonamento</Text>
                        <S.RowBetween>
                            <Button text="Annulla" onPress={toggleModal} type="third" />
                            <Button text="Applica" onPress={(): void => {}} type="primary" />
                        </S.RowBetween>
                    </S.ColBetween>
                </S.ContentModal>
            </Modal>

      </S.Container>
  )
}

export default ProductsScreen
