import React, { FunctionComponent, ReactElement, useCallback, useState } from 'react'
import {View, Text,Image} from 'react-native'
import Spacer from 'react-styled-spacer'
import colors from '../../theme/colors'
import * as T from '../../theme/typography'
import * as S from './styled'
import PlanningButton from '../PlanningButton'
// import * as S from './styled'

type Props = {
  onPress?: Function
  disabled?: boolean
  type: string
  price: string
  description: string
  value:number
}
const RadioChoose: FunctionComponent<Props> = ({
  disabled = false,
  onPress = () => {},
  type,
  price,
  description,
  value
}) => {
const [isChecked,setIsChecked] = useState(0)
  return (
    <S.RadioItem>

      <S.Price>
          <T.Header1>{price}</T.Header1>
          <T.Text2>all mese</T.Text2>
      </S.Price>

      <S.Description>
          <T.Header2>{type}</T.Header2>
          <S.WrapText style={{}}>{description}</S.WrapText>
      </S.Description>

      <S.RadioButton onPress={()=>{setIsChecked(value)}}>
          {
              isChecked == value ?
              (<Image source={require('../../assets/images/radio-checked.png')}/>):
              (<Image source={require('../../assets/images/radio.png')}/>)
          }
          
      </S.RadioButton>
      
    </S.RadioItem>
  )
}

export default RadioChoose
