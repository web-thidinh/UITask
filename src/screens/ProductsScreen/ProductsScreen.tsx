import auth from '@react-native-firebase/auth'
import React, { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Button ,View,Text,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {}

const LoginScreen: FunctionComponent<Props> = () => {
  const { t } = useTranslation()

  const onPressSignInAnon = () => {
    auth().signInAnonymously()
  }

  return (
      <ScrollView>
        <View style={styles.header}> 
            <View>
                <Text style={styles.text}>Valore</Text>
            </View>
            <View>
                <Text style={styles.text}>Filtra</Text>
            </View>
        </View>
        <View style={styles.categories}>
            <Button title='ALL'/>
            <Button title='ALL'/>
            <Button title='ALL'/>
            <Button title='ALL'/>
            <Button title='ALL'/>
            <Button title='ALL'/>
        </View>
      </ScrollView>
    
  )
}
const styles = StyleSheet.create({
    header:{
        height:100,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    categories:{
        borderBottomWidth:1,
        borderTopWidth:1,
        flexDirection:'row'
    }
    ,
    text:{
        fontSize:20
    }
})
export default LoginScreen
