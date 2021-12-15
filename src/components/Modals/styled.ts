import styled from 'styled-components/native'
import {screenSize,fontSize} from '../../theme/dimensions'

export const BaseModal = styled.View`
    background-color:#fff;
    position:absolute;
    bottom:0;
    padding:50px 35px;
    border-top-left-radius:25px;
    border-top-right-radius:25px;
`
export const ModalHalf = styled(BaseModal)`
    height:70%;
    width:${({ theme }) => theme.screenSize.width}px;
`
export const ModalFull = styled(BaseModal)`
    height:95%;
    width:${({ theme }) => theme.screenSize.width}px;
`
export const ModalIcon = styled.TouchableOpacity`
    position:absolute;
    right:0;
    top:0;
`
export const CloseIcon = styled.Image`
    position:absolute;
    right:0;
    top:0;
`
export const ModalHeader = styled.Text`
    font-size:${({ theme }) => theme.font_size.xxlarge}px;
    font-weight:bold;
    color:black;
`
export const ScrollContent = styled.ScrollView`
    
`
export const ModalRowHeader = styled.TouchableOpacity`
    padding:${({ theme }) => theme.spacing[3]}px 0;
    align-items:center;
    flex-direction:row;
    border-bottom-width:1px;
    border-color:black;
    justify-content:space-between;
`

export const ModalRow = styled.TouchableOpacity`
    padding:${({ theme }) => theme.spacing[2.5]}px 0;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
`
export const ModalCol = styled.View`
    padding-right:20px;
    border-bottom-width:1px;
    border-color:black;
    justify-content:space-around;
`
export const ModalColAround = styled.View`
    padding: 25px 0;
    border-bottom-width:1px;
    border-color:black;
    border-bottom:1px solid black;
    justify-content:space-around;
`
export const RowWrap = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
`
export const ContentModal = styled.View`
    height:100%;
    justify-content:space-between;
`

export const ModalButton = styled.View`
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
`