import styled ,{ keyframes }from 'styled-components'
import {Animated} from 'react-native'


export const Container = styled.SafeAreaView`
    flex: 1;
`
export const ScrollContainer = styled.ScrollView`
    background-color:black;
`
//Header
export const Header = styled.View`
    height:10%;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
    padding:15px;
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
    font-size:20px;
    font-weight:bold;
`
//Main
export const Main = styled.View`
    height:90%;
    background-color:white;
    border-bottom-left-radius:25px;
    border-bottom-right-radius:25px;
`
export const MainCategories = styled.View`
    border-style: solid;
    border-top-width:1px;
    border-bottom-width:1px;
`
export const WrapCategory = styled.ScrollView`
    padding:15px 0 15px 15px;
`
export const ContentItem = styled.View`
    width:50%;
    border:1px solid white;
    background-color:#EEEEEE;
`
export const ButtonCategory  = styled.TouchableOpacity`
    padding: 15px 0 15px 15px;
`
export const CategoryItem = styled.Text`
    font-size:18px;
    border:1px solid black;
    padding: 3px 10px;
    border-radius:17px;
`
export const ProductName = styled.Text`
    font-size:17px;
    font-weight:bold;
`
//Footer
export const MainTab = styled.View`
    height:10%;
    background-color:black;
    flex-direction:row;
`
export const MainTabItem = styled.TouchableOpacity`
    width:25%;
    height:100%;
    justify-content:center;
    align-items:center;
`
export const ColBetween = styled.View`
    height:100%;
    justify-content:space-between;
`
export const Row = styled.View`
    flex-wrap:wrap;
    flex-direction:row;
`
export const ColAround = styled.View`
    justify-content:space-around;
`
export const FlexCol = styled.View`
`
export const RowBetween = styled.TouchableOpacity`
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
`
export const RowAround = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
`
export const WrapText = styled.Text`
    flex-wrap:wrap;
`
//Modal

export const ScrollContent = styled.ScrollView`
    
`
export const ContentModal = styled.View`
    height:70%;
    width:100%;
    background-color:#fff;
    position:absolute;
    bottom:0;
    padding:50px 35px;
    border-top-left-radius:25px;
    border-top-right-radius:25px;
`

export const ContentModal1 = styled.View`
    height:90%;
    background-color:#fff;
    padding:50px 35px;
    border-top-left-radius:25px;
    border-top-right-radius:25px;
`