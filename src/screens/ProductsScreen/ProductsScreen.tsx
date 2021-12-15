import React, { FunctionComponent ,useState} from 'react'
import {Text,Image,FlatList,Alert,Switch} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as S from './styled'
import * as T from '../../theme/typography'
import Button from '../../components/Buttons'
import Card from '../../components/Card'
import Modal from "react-native-modal";
import HomeScreen from '../HomeScreen'
import PlanningRadio from '../../components/PlanningRadio'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const Tab = createBottomTabNavigator()
import colors from '../../theme/colors'

type Props = {}
const ProductsScreen: FunctionComponent<Props> = () => {

  const colorValue = Object.values(colors)
  const sizeList = ['Talia unica','XS','S', 'M', 'L', 'XL', 'XXL']
  const [products,setProducts] = useState([
      {id:'1',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'2',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'3',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'4',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'5',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
      {id:'6',brand:'Brand name',image:require('../../assets/images/hoodie.jpg'),price:'SLIVER'},
  ])
  const [options,setOptions] = useState([
      {price:'39€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 250€',type:'Sliver'},
      {price:'69€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 600€',type:'Gold'},
      {price:'99€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 1200€',type:'Platinum'}
  ])
  const [isModalVisible1, setModalVisible1] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)
  const [color,setColor] = useState(false)
  const [brand,setBrand] = useState(false)
  const [taglia,setTaglia] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [checked,setChecked] = useState(0)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const showFiltra = ()=>{
      setModalVisible1(!isModalVisible1)
  }

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const [radio,setRadio] = useState(0)
  var radio_props = [
    { label: '',value: 1 }
  ];

  return(
      <S.Container>

            <S.Header>
                <S.HeaderLeft>
                    <Button text="Valore" onPress={(): void => {}} type="select" />
                </S.HeaderLeft>
                <S.HeaderRight onPress={showFiltra}>
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

            <Modal isVisible={isModalVisible} style={{ margin: 0}}>
                <S.ContentModal>
                    <S.ColBetween>
                        <Text style={{fontSize:27,fontWeight:'bold',color:'black'}}>Filtra per viore di abbonamento</Text>
                        {
                            options.map((item,index)=>(
                                <S.RowAround key={index}>
                                    <S.FlexCol>
                                        <T.Header1>{item.price}</T.Header1>
                                        <T.Text2>all mese</T.Text2>
                                    </S.FlexCol>

                                    <S.FlexCol style={{flex:1,marginHorizontal:35}}>
                                        <T.Header2>{item.type}</T.Header2>
                                        <S.WrapText style={{}}>{item.description}</S.WrapText>
                                    </S.FlexCol>

                                    <S.FlexCol onPress={()=>{setChecked(index)}}>
                                        {
                                            checked == index ?
                                            (<Image source={require('../../assets/images/radio-checked.png')}/>):
                                            (<Image source={require('../../assets/images/radio.png')}/>)
                                        }
                                        
                                    </S.FlexCol>
                                </S.RowAround>
                            ))
                        }

                        <S.RowBetween>
                            <Button text="Annulla" onPress={toggleModal} type="third" />
                            <Button text="Applica" onPress={(): void => {}} type="primary" />
                        </S.RowBetween>
                    </S.ColBetween>
                </S.ContentModal>
            </Modal>

            <Modal isVisible={isModalVisible1} style={{ margin: 0}}>
                <S.ContentModal1>
                    <S.ColBetween>
                        <Text style={{fontSize:27,fontWeight:'bold',color:'black'}}>
                            Filtra la ricerca
                        </Text>
                        <S.ScrollContent style={{}}>
                            <S.RowBetween style={{borderBottomWidth:1,paddingVertical:25}}>
                                <T.SubHeader>Disponibile</T.SubHeader>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#0000FF" }}
                                    thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
                                />
                            </S.RowBetween>
                            <S.ColAround style={{borderBottomWidth:1,paddingVertical:25}}>
                                <T.SubHeader>Ordina</T.SubHeader>
                                <S.Row>
                                    <Button text="Ultimi Arrivi" onPress={toggleModal} type="rectangle" />
                                    <Button text="Consigliati" onPress={toggleModal} type="rectangle" />
                                </S.Row>
                            </S.ColAround>
                            <S.ColAround style={{borderBottomWidth:1,paddingRight:20}}>
                                <S.RowBetween style={{paddingVertical:15}} onPress={()=>{setBrand(!brand)}}>
                                    <T.SubHeader>Brand</T.SubHeader>
                                    {
                                        brand?
                                        (<Image source={require('../../assets/images/down.png')}/>):
                                        (<Image source={require('../../assets/images/right.png')}/>)
                                    }
                                </S.RowBetween>
                                {brand?(<S.Row>
                                    <Button text="Marni" onPress={toggleModal} type="rectangle" />
                                    <Button text="Balenciaga" onPress={toggleModal} type="rectangle" />
                                    <Button text="N21" onPress={toggleModal} type="rectangle" />
                                    <Button text="Gucci" onPress={toggleModal} type="rectangle" />
                                    <Button text="Balenciaga" onPress={toggleModal} type="rectangle" />
                                    <Button text="Federico Cina" onPress={toggleModal} type="rectangle" />
                                </S.Row>):null}
                            </S.ColAround>
                            <S.ColAround style={{borderBottomWidth:1,paddingRight:20}}>
                                <S.RowBetween style={{paddingVertical:15}} onPress={()=>{setTaglia(!taglia)}} >
                                    <T.SubHeader>Taglia</T.SubHeader>
                                    {taglia?
                                        (<Image source={require('../../assets/images/down.png')}/>):
                                        (<Image source={require('../../assets/images/right.png')}/>)
                                    }
                                </S.RowBetween>
                                {taglia?
                                (<S.Row>
                                    {
                                        sizeList? sizeList.map((item,index)=>
                                        (<Button key={index} text={item} onPress={toggleModal} type="square" />)
                                        ):null
                                    }
                                </S.Row>):null}
                            </S.ColAround>
                            <S.ColAround style={{borderBottomWidth:1,paddingRight:20}}>
                                <S.RowBetween style={{paddingVertical:15}} onPress={()=>{setColor(!color)}} >
                                    <T.SubHeader>Colore</T.SubHeader>
                                    {color?
                                        (<Image source={require('../../assets/images/down.png')}/>):
                                        (<Image source={require('../../assets/images/right.png')}/>)
                                    }
                                </S.RowBetween>
                                {color?
                                (<S.Row>
                                    {colorValue.map((item,index)=>
                                        (<Button key={index} bgcolor={item} text="" onPress={toggleModal} type="color" />)
                                    )}
                                </S.Row>):null}
                            </S.ColAround>
                        </S.ScrollContent>
                        <S.RowBetween style={{}}>
                            <Button text="Rimuovi" onPress={showFiltra} type="secondary" />
                            <Button text="Conferma" onPress={(): void => {}} type="primary" />
                        </S.RowBetween>
                    </S.ColBetween>
                </S.ContentModal1>
            </Modal>

      </S.Container>
  )
}

export default ProductsScreen
