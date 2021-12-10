import React from 'react'
import * as S from './styled'
import Icon from 'react-native-vector-icons/FontAwesome' 

const Header = ()=>{
    return(
        <S.Header> 
            <S.HeaderLeft>
                <S.TextHeader style={{marginRight:10}}>Valore</S.TextHeader>
                <Icon name="chevron-down" backgroundColor="#3b5998"/>
            </S.HeaderLeft>
            <S.HeaderRight>
                <S.TextHeader>Filtra</S.TextHeader>
            </S.HeaderRight>
        </S.Header>
    )
}

export default Header