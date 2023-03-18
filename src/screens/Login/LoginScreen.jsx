import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import LoginSVG from '../../assets/images/login.svg'
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import FacebookSVG from '../../assets/images/facebook.svg';
import TwitterSVG from '../../assets/images/twitter.svg';
import GoogleSVG from '../../assets/images/google.svg';
import InputField from '../../components/InputField'
import CustomButton from '../../components/CustomButton'

const LoginScreen = ({ navigation }) => {
  const navigateToRegister = () => {
	navigation.navigate('Register')
  }

  return (
	<SafeAreaView style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff' }}>
		<View style={styles.container}>
			<LoginSVG 
				width={300} 
				height={250} 
				style={{transform:[{rotate:'-5deg'}]}}
			/>
			<Text style={styles.header}>Login</Text>
			<InputField 
			icon={<Entypo name="email" size={16} color="#a19d9c" />} 
			label="Email" 
			keyboardType="email-address" 
			/>
			<InputField 
			icon={<Feather name="lock" size={16} color="#a19d9c" />} 
			label="Password" 
			inputType='password'
			fieldButtonLabel='Forgot'
			fieldButtonFunction={() => {}}
			/>
			<CustomButton label='Login' onPress={() => {}} />
			<Text style={{color:'#666', marginTop:20, textAlign:'center'}}>
				Or, login with...
			</Text>
			<View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
				<View style={styles.loginIconContainer}>
					<GoogleSVG width={32} height={32} />	
				</View>
				<View style={styles.loginIconContainer}>
					<FacebookSVG width={32} height={32} />	
				</View>
				<View style={styles.loginIconContainer}>
					<TwitterSVG width={32} height={32} />	
				</View>
			</View>
			<View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
				<Text>New to the App?</Text>
				<TouchableOpacity style={{ marginLeft:3 }} onPress={navigateToRegister}>
					<Text style={styles.link}>Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	</SafeAreaView>
  )
}

export default LoginScreen