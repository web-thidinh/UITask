import React,{FunctionComponent,ReactElement,useState} from 'react'
import {Alert, Image,Switch} from 'react-native'
import Modal from "react-native-modal"
import Button from '../../components/Buttons'
import RadioChoose from '../../components/RadioChoose'
import * as S from './styled'
import * as T from '../../theme/typography'
import colors from '../../theme/colors'

type Props = {
    type: string
    isShow:boolean
    isHide:Function
  }

const ModalComponent = ({type,isShow,isHide}): ReactElement => {
    
    const colorValue = Object.values(colors)
    const listBtn = ['ALL','TOP','BOTTON','HOODIE','T-SHIRT']
    const sizeList = ['Talia unica','XS','S', 'M', 'L', 'XL', 'XXL']
    const listBrand = ['Marni','Balenciaga','N21','Gucci','Federico Cina']
    const options = [
        {price:'39€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 250€',type:'Sliver'},
        {price:'69€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 600€',type:'Gold'},
        {price:'99€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 1200€',type:'Platinum'}
    ]
    const [isEnabled, setIsEnabled] = useState(false)
    const [isColor,setisColor] = useState(false)
    const [isBrand,setisBrand] = useState(false)
    const [isTaglia,setisTaglia] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    const modals:Record<string, ReactElement> = {
        half:(
            <Modal isVisible={isShow} style={{ margin: 0}}>
                <S.ModalHalf>
                    <S.ContentModal>
                        <S.ModalHeader>Filtra per viore di abbonamento</S.ModalHeader>
                        {
                            options.map((item,index)=>(
                                <RadioChoose value = {index} key={index} type={item.type} description={item.description} price={item.price}/>
                            ))
                        }
                        <S.ModalButton>
                            <Button text="Annulla" onPress={isHide} type="third" />
                            <Button text="Applica" onPress={(): void => {}} type="primary" />
                        </S.ModalButton>
                    </S.ContentModal>
                </S.ModalHalf>
            </Modal>
        ),
        full:(
            <Modal isVisible={isShow} style={{ margin: 0}}>
                <S.ModalFull>
                    <S.ContentModal>
                        <S.ModalIcon onPress={()=>{Alert.alert('Clicked')}}>
                            <S.CloseIcon
                                source={require('../../assets/images/close.png')}
                            />
                        </S.ModalIcon>
                        <S.ModalHeader>
                            Filtra la ricerca
                        </S.ModalHeader>
                        <S.ScrollContent style={{}}>
                            <S.ModalRowHeader>
                                <T.SubHeader>Disponibile</T.SubHeader>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#0000FF" }}
                                    thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
                                />
                            </S.ModalRowHeader>

                            <S.ModalColAround>
                                <T.SubHeader style={{marginBottom:15}}>Ordina</T.SubHeader>
                                <S.RowWrap>
                                    <Button text="Ultimi Arrivi" onPress={isHide} type="rectangle" />
                                    <Button text="Consigliati" onPress={()=>{}} type="rectangle" />
                                </S.RowWrap>
                            </S.ModalColAround>

                            <S.ModalCol>
                                <S.ModalRow onPress={()=>{setisBrand(!isBrand)}}>
                                    <T.SubHeader>Brand</T.SubHeader>
                                    {
                                        isBrand?
                                        (<Image source={require('../../assets/images/down.png')}/>):
                                        (<Image source={require('../../assets/images/right.png')}/>)
                                    }
                                </S.ModalRow>
                                {isBrand?(<S.RowWrap>
                                    {
                                        listBrand.map((item,index)=>(
                                            <Button key={index} text={item} onPress={()=>{}} type="rectangle" />
                                        ))
                                    }
                                </S.RowWrap>):null}
                            </S.ModalCol>

                            <S.ModalCol >
                                <S.ModalRow onPress={()=>{setisTaglia(!isTaglia)}} >
                                    <T.SubHeader>Taglia</T.SubHeader>
                                    {isTaglia?
                                        (<Image source={require('../../assets/images/down.png')}/>):
                                        (<Image source={require('../../assets/images/right.png')}/>)
                                    }
                                </S.ModalRow>
                                {isTaglia?
                                (<S.RowWrap>
                                    {
                                        sizeList? sizeList.map((item,index)=>
                                        (<Button key={index} text={item} onPress={()=>{}} type="square" />)
                                        ):null
                                    }
                                </S.RowWrap>):null}
                            </S.ModalCol>
                            
                            <S.ModalCol>
                                <S.ModalRow onPress={()=>{setisColor(!isColor)}} >
                                    <T.SubHeader>Colore</T.SubHeader>
                                    {isColor?
                                        (<Image source={require('../../assets/images/down.png')}/>):
                                        (<Image source={require('../../assets/images/right.png')}/>)
                                    }
                                </S.ModalRow>
                                {isColor?
                                (<S.RowWrap>
                                    {colorValue.map((item,index)=>
                                        (<Button key={index} bgcolor={item} text="" onPress={()=>{}} type="color" />)
                                    )}
                                </S.RowWrap>):null}
                            </S.ModalCol>
                        </S.ScrollContent>
                        <S.ModalButton style={{}}>
                            <Button text="Rimuovi" onPress={isHide} type="secondary" />
                            <Button text="Conferma" onPress={(): void => {}} type="primary" />
                        </S.ModalButton>
                    </S.ContentModal>
                </S.ModalFull>
            </Modal>
        )
    }
    return modals[type]
}

const Modals:FunctionComponent<Props> = (props)=>{
    return ModalComponent(props)
}

export default Modals