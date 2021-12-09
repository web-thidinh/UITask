import React, { FunctionComponent, ReactElement, useCallback } from 'react'
import Spacer from 'react-styled-spacer'
import colors from '../../theme/colors'
import * as T from '../../theme/typography'
import PlanningButton from '../PlanningButton'
import * as S from './styled'

type Props = {
  onPress?: Function
  disabled?: boolean
  type: 'essential' | 'premium' | 'luxury'
  price: string
  description: string
}
const PlanningRadio: FunctionComponent<Props> = ({
  disabled = false,
  onPress = () => {},
  type,
  price,
  description,
}) => {
  return (
    <S.Container disabled={disabled} onPress={onPress} activeOpacity={0.8}>
      <S.RadioWrapper>
        <S.RadioImage source={require('../../assets/images/radio-checked.png')} />
      </S.RadioWrapper>
      <S.ContentWrapper>
        <S.CenteredGrid>
          <PlanningButton type={type} />
          <T.CardTitle2 color={colors.DARK_LIVER} bold>
            {price}
          </T.CardTitle2>
        </S.CenteredGrid>
        <Spacer h={8} />
        <T.Text2 color={colors.DARK_LIVER}>{description}</T.Text2>
      </S.ContentWrapper>
    </S.Container>
  )
}

export default PlanningRadio
