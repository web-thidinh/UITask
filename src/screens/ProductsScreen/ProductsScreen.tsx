import auth from '@react-native-firebase/auth'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Button ,View,Text,StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import * as S from './styled'

type Props = {}

const ProductsScreen: FunctionComponent<Props> = () => {
  const { t } = useTranslation()

  return(
      <S.Container>
          <Header/>
          <Main/>
          <Footer/>
      </S.Container>
  )
}

export default ProductsScreen
