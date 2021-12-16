import * as S from './styled'
import Modal from "react-native-modal"
import Button from '../../components/Buttons'
import { IRefsProductDetail } from './interface'
import RadioChoose from '../../components/RadioChoose'
import React, { useState,useImperativeHandle,forwardRef,Ref, } from 'react'
type Props = {}
const ProductModal = forwardRef((props: Props, ref: Ref<IRefsProductDetail>)=>{
    
    const options = [
        {price:'39€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 250€',type:'Sliver'},
        {price:'69€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 600€',type:'Gold'},
        {price:'99€',description:'Con questo abbonamento hai accesso a un prodotto al mese con valore retail massimo di 1200€',type:'Platinum'}
    ]

    const [isModalVisible, setModalVisible] = useState(false)
    
    useImperativeHandle(ref, () => ({ open, close }))

    const open = () => {
        setModalVisible(true)
    }

    const close = () => {
        setModalVisible(false)
    }
    return (
        <Modal isVisible={isModalVisible} style={{ margin: 0}}>
            <S.ModalHalf>
                <S.ContentModal>
                    <S.ModalHeader>Filtra per viore di abbonamento</S.ModalHeader>
                    {
                        options.map((item,index)=>(
                            <RadioChoose value = {index} key={index} type={item.type} description={item.description} price={item.price}/>
                        ))
                    }
                    <S.ModalButton>
                        <Button text="Annulla" onPress={close} type="third" />
                        <Button text="Applica" onPress={close} type="primary" />
                    </S.ModalButton>
                </S.ContentModal>
            </S.ModalHalf>
        </Modal>
    )
})

export default ProductModal