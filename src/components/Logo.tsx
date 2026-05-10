import { StyleSheet, View } from "react-native";

export default function Logo() {
	return (
		<View style={styles.container}>
			<View style={[styles.dot, styles.top]} />
			<View style={[styles.dot, styles.bottom]} />
			<View style={[styles.dot, styles.left]} />
			<View style={[styles.dot, styles.right]} />
			<View style={styles.center} />
		</View>
	);
}

const SIZE = 14;

const styles = StyleSheet.create({
	container: {
		width: 60,
		height: 60,
		position: "relative",
		alignSelf: "center",
	},

	dot: {
		width: SIZE,
		height: SIZE,
		borderRadius: SIZE / 2,
		backgroundColor: "#84CC16",
		position: "absolute",
	},

	center: {
		width: SIZE,
		height: SIZE,
		borderRadius: SIZE / 2,
		backgroundColor: "#84CC16",
		position: "absolute",
		top: 23,
		left: 23,
	},

	top: {
		top: 8,
		left: 23,
	},

	bottom: {
		bottom: 8,
		left: 23,
	},

	left: {
		left: 8,
		top: 23,
	},

	right: {
		right: 8,
		top: 23,
	},
});
