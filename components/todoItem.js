import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ pressHandler, item }) {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<Text style={styles.item}>
				<MaterialIcons name='delete' size={18} color="#333" />
				<Text style={styles.itemText}>{item.text}</Text>
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  }
});
