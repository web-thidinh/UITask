import styled from 'styled-components'

export const Main = styled.View`
    height:80%;
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
export const WrapContent = styled.ScrollView`
`
export const MainContent = styled.View`
    width:100%;
    flex-direction:row;
    flex-wrap:wrap;
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

