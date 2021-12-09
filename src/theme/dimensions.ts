import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,

  SCREEN_PADDING: 16,
}
