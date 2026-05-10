import { ArrowRight, ChevronLeft, Lock, Mail, Smartphone } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAuth } from "@/context/AuthContext";

const resetMethods = [
	{
		id: "email",
		title: "Email Address",
		description: "Send via email address securely.",
		Icon: Mail,
	},
	{
		id: "2fa",
		title: "2 Factor Authentication",
		description: "Send via 2FA securely.",
		Icon: Smartphone,
	},
	{
		id: "authenticator",
		title: "Google Authenticator",
		description: "Send via authenticator securely.",
		Icon: Lock,
	},
];

const ForgotPassword = () => {
	
	const [selectedMethod, setSelectedMethod] = useState("2fa");
    const {setForgotPassword} = useAuth()
	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView
				contentContainerStyle={styles.scrollContent}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.container}>
					<Pressable
						accessibilityLabel="Go back"
						onPress={() => setForgotPassword(false)}
						style={styles.backButton}
					>
						<ChevronLeft size={30} color="#303c37" strokeWidth={2.6} />
					</Pressable>

					<View style={styles.header}>
						<Text style={styles.title}>Forgot Password</Text>
						<Text style={styles.subtitle}>
							{"Select which methods you'd like to reset."}
						</Text>
					</View>

					<View style={styles.methods}>
						{resetMethods.map(({ id, title, description, Icon }) => {
							const isSelected = selectedMethod === id;

							return (
								<Pressable
									key={id}
									onPress={() => setSelectedMethod(id)}
									style={[
										styles.methodCard,
										isSelected && styles.methodCardSelected,
									]}
								>
									<View
										style={[
											styles.iconWrap,
											isSelected && styles.iconWrapSelected,
										]}
									>
										<Icon
											size={22}
											color={isSelected ? "#77cb0c" : "#6b756f"}
											strokeWidth={3}
										/>
									</View>

									<View style={styles.methodCopy}>
										<Text style={styles.methodTitle}>{title}</Text>
										<Text style={styles.methodDescription}>{description}</Text>
									</View>
								</Pressable>
							);
						})}
					</View>

					<Pressable style={styles.resetButton}>
						<Text style={styles.resetText}>Reset Password</Text>
						<ArrowRight size={24} color="#ffffff" strokeWidth={2.6} />
					</Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ForgotPassword;

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#f8f8f8",
	},

	scrollContent: {
		flexGrow: 1,
		backgroundColor: "#f8f8f8",
	},

	container: {
		flex: 1,
		paddingHorizontal: 13,
		paddingTop: 7,
		paddingBottom: 20,
		backgroundColor: "#f8f8f8",
	},

	backButton: {
		width: 48,
		height: 48,
		borderRadius: 17,
		backgroundColor: "#eeeeee",
		alignItems: "center",
		justifyContent: "center",
	},

	header: {
		marginTop: 60,
	},

	title: {
		color: "#28342f",
		fontSize: 32,
		fontWeight: "900",
		lineHeight: 39,
	},

	subtitle: {
		marginTop: 14,
		color: "#7f8783",
		fontSize: 15,
		fontWeight: "600",
	},

	methods: {
		marginTop: 37,
		gap: 14,
	},

	methodCard: {
		minHeight: 82,
		borderRadius: 30,
		backgroundColor: "#ffffff",
		paddingHorizontal: 14,
		paddingVertical: 11,
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#ffffff",
		shadowColor: "#a6aaa7",
		shadowOffset: { width: 0, height: 14 },
		shadowOpacity: 0.18,
		shadowRadius: 20,
		elevation: 8,
	},

	methodCardSelected: {
		borderColor: "#8bd816",
		shadowColor: "#84cc16",
		shadowOpacity: 0.24,
		shadowRadius: 7,
		elevation: 9,
	},

	iconWrap: {
		width: 59,
		height: 59,
		borderRadius: 22,
		backgroundColor: "#f0f1f0",
		alignItems: "center",
		justifyContent: "center",
	},

	iconWrapSelected: {
		backgroundColor: "#e0fac4",
	},

	methodCopy: {
		flex: 1,
		marginLeft: 16,
		gap: 6,
	},

	methodTitle: {
		color: "#37433e",
		fontSize: 17,
		fontWeight: "900",
	},

	methodDescription: {
		color: "#7d8681",
		fontSize: 13,
		fontWeight: "600",
	},

	resetButton: {
		height: 54,
		marginTop: "auto",
		backgroundColor: "#7ed80d",
		borderRadius: 17,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 14,
	},

	resetText: {
		color: "#ffffff",
		fontSize: 15,
		fontWeight: "900",
	},
});
