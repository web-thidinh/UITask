import styled from 'styled-components/native'
import colors from '../../theme/colors'

export const Button1 = styled.TouchableOpacity`
  width: auto;
  align-self: flex-start;
  height: 24px;
  border-radius: 8px;
  padding: 0px 8px 0px 6px;
`

export const Button = styled(Button1)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.disabled ? colors.DISABLED : colors.PRIMARY_BLACK)};
`

export const Icon = styled.Image`
  width: 14px;
  height: 14px;
`
