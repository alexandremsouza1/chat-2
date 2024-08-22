import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "../navigation";
import { store } from "../utils/store";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider style={{ flex: 1 }}>
				<MenuProvider>
					<AppNavigator />
				</MenuProvider>
			</SafeAreaProvider>
		</Provider>
	);
}
