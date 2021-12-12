import React, { FunctionComponent, ReactElement } from 'react'
import colors from '../../theme/colors'
import * as T from '../../theme/typography'
import * as S from './styled'

type Props = {
  text: string
  disabled?: boolean
  onPress: Function
  activated?: boolean
  type: 'primary' | 'secondary' | 'cancel' | 'third' | 'select' | 'google' | 'facebook' | 'block' | 'basic'
}

const getButtonComponent = (props: Props): ReactElement => {
  const { text, disabled = false, onPress, type = 'primary', activated = false } = props

  const buttons: Record<string, ReactElement> = {
    primary: (
      <S.Primary disabled={disabled} onPress={onPress}>
        <T.ButtonText2 color={colors.WHITE}>{text}</T.ButtonText2>
      </S.Primary>
    ),
    basic:(
      <S.BasicButton disabled={disabled} onPress={onPress}>
        <T.ButtonText3 color={disabled && colors.SECONDARY_DISABLED}>{text}</T.ButtonText3>
      </S.BasicButton>
    ),
    secondary: (
      <S.Secondary disabled={disabled} onPress={onPress}>
        <T.ButtonText2 color={disabled && colors.SECONDARY_DISABLED}>{text}</T.ButtonText2>
      </S.Secondary>
    ),
    cancel: (
      <S.Cancel disabled={disabled} onPress={onPress}>
        <T.ButtonText2 color={disabled && colors.SECONDARY_DISABLED}>{text}</T.ButtonText2>
      </S.Cancel>
    ),
    select: (
      <S.Select disabled={disabled} onPress={() => onPress()}>
        <T.SelectButton color={disabled && colors.SECONDARY_DISABLED}>{text}</T.SelectButton>
        <S.ArrowImage source={require('../../assets/images/arrow-down.png')} resizeMode="contain" />
      </S.Select>
    ),
    third: (
      <S.Cancel onPress={() => onPress()}>
        <T.ButtonText2>
          {activated && '• '}
          {text}
        </T.ButtonText2>
      </S.Cancel>
    ),
    google: (
      <S.Google onPress={onPress}>
        <T.ButtonText2 white>{text}</T.ButtonText2>
      </S.Google>
    ),
    facebook: (
      <S.Facebook onPress={onPress}>
        <T.ButtonText2 white>{text}</T.ButtonText2>
      </S.Facebook>
    ),
    block: (
      <S.Block onPress={onPress}>
        <T.ButtonText2 white>{text}</T.ButtonText2>
      </S.Block>
    ),
  }
  return buttons[type]
}

const Button: FunctionComponent<Props> = props => {
  return <>{getButtonComponent(props)}</>
}

export default Button
