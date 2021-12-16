import React, { useState,useImperativeHandle,forwardRef,Ref, } from 'react'
import Modal from "react-native-modal"
import {Alert,Switch,Image} from 'react-native'
import Button from '../../components/Buttons'
import RadioChoose from '../../components/RadioChoose'
// import { IRefsProductDetail } from './interface'
import * as S from './styled'
import * as T from '../../theme/typography'
import colors from '../../theme/colors'

const FiltraModal = forwardRef((props,ref)=>{

    const colorValue = Object.values(colors)
    const [isColor,setisColor] = useState(false)
    const [isBrand,setisBrand] = useState(false)
    const [isTaglia,setisTaglia] = useState(false)
    const [isEnabled, setIsEnabled] = useState(false)
    const [isModalVisible, setModalVisible] = useState(false)
    const sizeList = ['Talia unica','XS','S', 'M', 'L', 'XL', 'XXL']
    const listBrand = ['Marni','Balenciaga','N21','Gucci','Federico Cina']

    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

    useImperativeHandle(ref, () => ({ open, close }))

    const open = () => {
        setModalVisible(true)
    }

    const close = () => {
        setModalVisible(false)
    }
    return(
        <Modal isVisible={isModalVisible} style={{ margin: 0}}>
            <S.ModalFull>
                <S.ContentModal>
                    <S.ModalIcon onPress={close}>
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
                                <Button text="Ultimi Arrivi" onPress={()=>{}} type="rectangle" />
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
                        <Button text="Rimuovi" onPress={close} type="secondary" />
                        <Button text="Conferma" onPress={(): void => {}} type="primary" />
                    </S.ModalButton>
                </S.ContentModal>
            </S.ModalFull>
        </Modal>
    )
})

export default FiltraModal