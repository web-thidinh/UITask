import styled from 'styled-components/native'
import colors from '../../theme/colors'
import Fonts from '../../theme/fonts'

export const Container = styled.View`
  width: 100%;
  margin: 4px 0;
`

export const Field = styled.TextInput`
  width: 100%;
  height: 59px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.GRAY};
  padding: 0 12px;
  border-radius: 4px;
  font-size: 16px;
  font-family: ${Fonts.HELVETICA_NEUE_NORMAL};
`
