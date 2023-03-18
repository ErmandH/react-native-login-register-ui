import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ label, onPress }) => {
  return (
	<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={styles.buttonText}>
				{label}
			</Text>
	</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	button:{
		padding:15,
		backgroundColor:'#AD40AF',
		marginTop:25,
		borderRadius:12
	},
	buttonText:{
		color:'#fff',
		textAlign:'center',
		fontWeight:'500',
		fontSize:18
	}
})

export default CustomButton