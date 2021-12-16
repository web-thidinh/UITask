import styled ,{ keyframes }from 'styled-components'


export const Container = styled.SafeAreaView`
    flex: 1;
`
//Header
export const Header = styled.View`
    height:10%;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
    padding:${({theme})=>(theme.spacing[2])}px;
    background-color:white;
`
export const HeaderLeft = styled.View`
    align-items:center;
    flex-direction:row;
`
export const HeaderRight = styled.TouchableOpacity`
    align-items:center;
    flex-direction:row;
`
export const TextHeader = styled.Text`
    font-size:${({theme})=>(theme.spacing[2.5])}px;
    font-weight:bold;
`
//Content
export const Content = styled.View`
    height:90%;
    background-color:white;
    border-bottom-left-radius:${({theme})=>(theme.spacing[3])}px;
    border-bottom-right-radius:${({theme})=>(theme.spacing[3])}px;
`
export const MainCategories = styled.View`
    border-style: solid;
    border-top-width:1px;
    border-bottom-width:1px;
`
export const WrapCategory = styled.ScrollView`
    padding:${({theme})=>(theme.spacing[2])}px;px 0 ${({theme})=>(theme.spacing[2])}px;px ${({theme})=>(theme.spacing[2])}px;px;
`