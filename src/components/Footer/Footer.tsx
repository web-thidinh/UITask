import React from 'react'
import * as S from './styled'
import {Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Footer = ()=>{
    return(
        <S.Footer>
            <S.FooterItem>
                <Icon name='home' size={30}/>
            </S.FooterItem>
            <S.FooterItem>
                <Icon name='search' size={30}/>
            </S.FooterItem>
            <S.FooterItem>
                <Icon name='home' size={30}/>
            </S.FooterItem>
            <S.FooterItem>
                <Icon name='user' size={30}/>
            </S.FooterItem>
        </S.Footer>
    )
}

export default Footer