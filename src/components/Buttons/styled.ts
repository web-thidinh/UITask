import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const Button1 = styled.TouchableOpacity`
  width: 126px;
  height: 37px;
  border-radius: 17px;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`
export const ButtonT = styled.TouchableOpacity`
  padding: 0 20px;
  height: 35px;
  margin-right:15px;
  border-radius: 17px;
  justify-content: center;
  align-items: center;
`

export const Button2 = styled.TouchableOpacity`
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`

export const Primary = styled(Button1)`
  background-color: ${props => (props.disabled ? colors.DISABLED : colors.PRIMARY_BLACK)};
`
export const BasicButton = styled(ButtonT)`
  border-width:1px;
  border-color: ${props => (props.disabled ? colors.SECONDARY_DISABLED : colors.PRIMARY_BLACK)};
`

export const Secondary = styled(Button1)`
  border-width: 2px;
  border-color: ${props => (props.disabled ? colors.SECONDARY_DISABLED : colors.PRIMARY_BLACK)};
`

export const Cancel = styled.TouchableOpacity``

export const Select = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const ArrowImage = styled.Image`
  width: 12px;
  height: 5px;
  margin-left: 8px;
`

export const Google = styled(Button1)`
  background-color: ${props => (props.disabled ? colors.DISABLED : colors.GOOGLE)};
  width: 100%;
  border-radius: 4px;
`
export const Facebook = styled(Button1)`
  background-color: ${props => (props.disabled ? colors.DISABLED : colors.FACEBOOK)};
  width: 100%;
  border-radius: 4px;
`
export const Block = styled(Button1)`
  background-color: ${props => (props.disabled ? colors.DISABLED : colors.PRIMARY_BLACK)};
  width: 100%;
  border-radius: 4px;
`
