import styled from 'styled-components'

export const Main = styled.View`
    height:80%;
    background-color:white;
`
export const MainCategories = styled.View`
    border-style: solid;
    border-top-width:1px;
    border-bottom-width:1px;
    margin-bottom:10px
`
export const WrapCategory = styled.ScrollView`
    
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
    height:200px;
    border:1px solid white;
    background-color:green;
`
export const ButtonCategory  = styled.TouchableOpacity`
    padding: 15px 0 15px 15px;
`
export const CategoryItem = styled.Text`
    font-size:18px;
    border:1px solid black;
    padding: 5px 10px;
    border-radius:17px;
`

