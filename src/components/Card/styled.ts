import styled from 'styled-components/native'
import colors from '../../theme/colors'
import dimensions from '../../theme/dimensions'

export const Container = styled.TouchableOpacity`
  background-color: ${colors.WHITE_SMOKE};
  width: ${dimensions.SCREEN_WIDTH / 2}px;
  border-top:1px solid black;
`

export const ImageWrapper = styled.View`
  position: relative;
`

export const Image = styled.Image`
  width: ${dimensions.SCREEN_WIDTH / 2}px;
  height:250px;
  background-color: ${colors.CHINESE_WHITE};
`

export const BookmarkImage = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Content = styled.View`
  padding: 8px 16px;
`
export const CenteredGrid = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const StartedGrid = styled.View`
  flex-direction: row;
  align-items: center;
`
