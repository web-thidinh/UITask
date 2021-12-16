import styled from 'styled-components/native'

export const BaseModal = styled.View`
    background-color:${({theme})=>(theme.colors.white)};
    position:absolute;
    bottom:0;
    padding:${({theme})=>(theme.spacing[5])}px ${({theme})=>(theme.spacing[4])}px;
    border-top-left-radius:${({theme})=>(theme.spacing[3])}px;
    border-top-right-radius:${({theme})=>(theme.spacing[3])}px;
`
export const ModalFull = styled(BaseModal)`
    height:95%;
    width:${({ theme }) => theme.screen_size.width}px;
`
export const ContentModal = styled.View`
    height:100%;
    justify-content:space-between;
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
export const ScrollContent = styled.ScrollView`
    
`
export const ModalRowHeader = styled.TouchableOpacity`
    padding:${({ theme }) => theme.spacing[3]}px 0;
    align-items:center;
    flex-direction:row;
    border-bottom-width:1px;
    border-color:${({theme})=>(theme.colors.black)};
    justify-content:space-between;
`
export const ModalColAround = styled.View`
    padding: ${({ theme }) => theme.spacing[3]}px 0;
    border-bottom-width:1px;
    border-color:${({theme})=>(theme.colors.black)};
    justify-content:space-around;
`
export const RowWrap = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
`
export const ModalRow = styled.TouchableOpacity`
    padding:${({ theme }) => theme.spacing[2.5]}px 0;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
`
export const ModalCol = styled.View`
    padding-right:${({ theme }) => theme.spacing[2.5]}px;
    border-bottom-width:1px;
    border-color:${({theme})=>(theme.colors.black)};
    justify-content:space-around;
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

