import React, { FunctionComponent ,useState} from 'react'
import {Text,Image,FlatList,Alert,Switch} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as S from './styled'
import * as T from '../../theme/typography'
import Button from '../../components/Buttons'
import Card from '../../components/Card'
// import Modal from "react-native-modal"
import HomeScreen from '../HomeScreen'
import PlanningRadio from '../../components/PlanningRadio'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const Tab = createBottomTabNavigator()
import colors from '../../theme/colors'
import RadioChoose from '../../components/RadioChoose'
import Modal from '../../components/Modals'

type Props = {}
const ProductsScreen: FunctionComponent<Props> = () => {

  const colorValue = Object.values(colors)
  const listBtn = ['ALL','TOP','BOTTON','HOODIE','T-SHIRT']
  const sizeList = ['Talia unica','XS','S', 'M', 'L', 'XL', 'XXL']
  const products = [
      {id:'1',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'2',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'3',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'4',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'5',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'6',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
  ]
  const options = [
      {price:'39€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 250€',type:'Sliver'},
      {price:'69€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 600€',type:'Gold'},
      {price:'99€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 1200€',type:'Platinum'}
  ]

  const [isModalVisible1, setModalVisible1] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  }

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return(
      <S.Container>

            <S.Header>
                <S.HeaderLeft>
                    <Button text="Valore" onPress={(): void => {}} type="select" />
                </S.HeaderLeft>
                <S.HeaderRight onPress={toggleModal1}>
                    <S.TextHeader>Filtra</S.TextHeader>
                </S.HeaderRight>
            </S.Header>
            
            <S.Main>
                <S.MainCategories>
                    <S.WrapCategory horizontal={true}>
                        {
                            listBtn.map((item,index)=>(
                                <Button key={index} text={item} onPress={toggleModal} type="basic" />
                            ))
                        }
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

            <Modal isShow={isModalVisible} isHide={toggleModal} type='half'/>
            <Modal isShow={isModalVisible1} isHide={toggleModal1} type='full'/>

      </S.Container>
  )
}

export default ProductsScreen
