import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const InputField = ({ label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction }) => {
  return (
	<View style={styles.inputContainer}>
		{icon}
		{inputType === 'password' 
		? (
			<TextInput 
			placeholder={label}
			style={styles.textInput} 
			keyboardType={keyboardType}
			secureTextEntry={true}
			/>
		)
		: (
			<TextInput 
			placeholder={label}
			style={styles.textInput} 
			keyboardType={keyboardType}
			/>
		)}
		<TouchableOpacity onPress={fieldButtonFunction}>
			<Text style={styles.link}>{fieldButtonLabel}</Text>
		</TouchableOpacity>
	</View>
  )
}

const styles = StyleSheet.create({
	inputContainer:{
		marginTop:12,
		flexDirection:'row',
		alignItems:'center',
		borderBottomColor:'#e3dddc',
		borderBottomWidth:1
	},
	textInput:{
		flex:1,
		paddingVertical:0,
		marginLeft:8,
		fontSize:16
	},
	link:{
		color:'#AD40AF',
		fontWeight:'500'
	},
})

export default InputField