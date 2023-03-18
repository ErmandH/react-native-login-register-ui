import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import RegistrationSVG from '../../assets/images/registration.svg'
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FacebookSVG from '../../assets/images/facebook.svg';
import TwitterSVG from '../../assets/images/twitter.svg';
import GoogleSVG from '../../assets/images/google.svg';
import InputField from '../../components/InputField'
import CustomButton from '../../components/CustomButton'
import DateTimePicker from '@react-native-community/datetimepicker';

const RegisterScreen = ({ navigation }) => {
	const [date, setDate] = useState(new Date('2005-01-01'));
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setShow(false);
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		if (Platform.OS === 'android') {
		setShow(false);
		// for iOS, add a button that closes the picker
		}
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};
	const navigateToLogin = () => {
		navigation.navigate("Login");
	}

	return (
		<SafeAreaView style={{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#fff' }}>
			<ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:10}}>
				<View style={styles.container}>
					<RegistrationSVG 
						width={300} 
						height={250}
						style={{transform:[{rotate:'-5deg'}]}}
					/>
					<Text style={styles.header}>Register</Text>
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
					<Text style={{color:'#666', marginTop:20, textAlign:'center'}}>
						Or, register with email...
					</Text>
					<InputField 
						icon={<AntDesign name="user" size={16} color="#a19d9c" />} 
						label="Full Name" 
					/>
					<InputField 
						icon={<Entypo name="email" size={16} color="#a19d9c" />} 
						label="Email" 
						keyboardType="email-address" 
					/>
					<InputField 
						icon={<Feather name="lock" size={16} color="#a19d9c" />} 
						label="Password" 
						inputType='password'
					/>
					<InputField 
						icon={<Feather name="lock" size={16} color="#a19d9c" />} 
						label="Confirm Password" 
						inputType='password'
					/>
					<View 
						style={{ 
							flexDirection:'row', 
							borderBottomColor:'#e3dddc', 
							borderBottomWidth:1 ,
							paddingBottom:6,
							marginTop:10,
							alignItems:'center'
							}}>
						<AntDesign name="calendar" size={16} color="#a19d9c" />
						<TouchableOpacity style={{ marginLeft:8 }} onPress={() => setShow(true)}>
							<Text style={{ fontSize:16, color:'#666' }}>{date.toLocaleDateString()}</Text>
						</TouchableOpacity>
					</View>
					{show && (
						<DateTimePicker
							testID="dateTimePicker"
							maximumDate={new Date('2005-01-01')}
							minimumDate={new Date('1980-01-01')}
							value={date}
							mode={mode}
							is24Hour={true}
							onChange={onChange}
						/>
					)}
					

					<CustomButton label='Register' onPress={() => {}} />
					<View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
						<Text>Already have an account?</Text>
						<TouchableOpacity style={{ marginLeft:3 }} onPress={navigateToLogin}>
							<Text style={styles.link}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default RegisterScreen