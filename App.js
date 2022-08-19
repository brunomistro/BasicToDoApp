import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

//Components
import Header from "./components/header"
import TodoItem from "./components/todoItem"
import AddTodo from './components/addTodo';

export default function App() {
	const [todos, setTodos] = useState([
		{ text: "buy coffe", key: 1},
		{ text: "create app", key: 2},
		{ text: "study", key: 3},
	]);

	const pressHandler = (key) => {
		setTodos(prev => {
			return prev.filter(item => item.key != key);
		});
	};

	const submitHandler = (text) => {
		if(text.length > 3){
			setTodos((prev) => {
				return [
					...prev,
					{text, key: Math.random().toString() },
				]
			});
		}
		else {
			Alert.alert("OPS", "Item must be over 3 characters", [
				{ text: "OK!" }
			])
		}
	}

  return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<StatusBar style="auto" />
				
				<Header />
				<View style={styles.content}>
					<AddTodo submitHandler={submitHandler} />

					<FlatList
						data={todos}
						renderItem={({item}) => (
							<TodoItem item={item} pressHandler={pressHandler} />
						)}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
});
