import React, { FunctionComponent, useCallback } from 'react'
import Spacer from 'react-styled-spacer'
import * as T from '../../theme/typography'
import * as S from './styled'

type Props = {
  onPress?: Function
  disabled?: boolean
  type: 'essential' | 'premium' | 'luxury' | 'Valore'
}
const PlanningButton: FunctionComponent<Props> = ({
  disabled = false,
  onPress = () => {},
  type,
}) => {
  const iconByType = useCallback(() => {
    switch (type) {
      case 'essential':
        return require('../../assets/images/avocado.png')
      case 'premium':
        return require('../../assets/images/orange.png')
      case 'luxury':
        return require('../../assets/images/coconut.png')
      default:
        return null
    }
  }, [type])
  const icon = iconByType()
  return (
    <S.Button disabled={disabled} onPress={onPress} activeOpacity={0.8}>
      {/* <S.Icon source={icon} resizeMode="contain" /> */}
      {/* <Spacer w={2} /> */}
      <T.Text2 black>
        {type}
      </T.Text2>
    </S.Button>
  )
}

export default PlanningButton
