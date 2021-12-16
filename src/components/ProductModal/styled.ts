import styled from 'styled-components/native'

export const BaseModal = styled.View`
    background-color:${({theme})=>(theme.colors.white)};
    position:absolute;
    bottom:0;
    padding:${({theme})=>(theme.spacing[5])}px ${({theme})=>(theme.spacing[4])}px;
    border-top-left-radius:${({theme})=>(theme.spacing[3])}px;
    border-top-right-radius:${({theme})=>(theme.spacing[3])}px;
`
export const ModalHalf = styled(BaseModal)`
    height:70%;
    width:${({ theme }) => theme.screen_size.width}px;
`
export const ContentModal = styled.View`
    height:100%;
    justify-content:space-between;
`
export const ModalHeader = styled.Text`
    font-size:${({ theme }) => theme.font_size.xxlarge}px;
    font-weight:bold;
    color:black;
`
export const ModalButton = styled.View`
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
`

