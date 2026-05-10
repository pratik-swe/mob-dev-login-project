import { useAuth } from "@/context/AuthContext";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "./Logo";

const SignIn = () => {
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [isPasswordHidden, setIsPasswordHidden] = useState(true);
	const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
	const { setForgotPassword } = useAuth();

	return (
		<SafeAreaView>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<ScrollView>
					<View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
						<View style={styles.container}>
							<View style={styles.header}>
								<Logo />
								<Text style={styles.title}>
									{isSignedUp ? "Sign In" : "Sign Up"}
								</Text>
								<Text style={styles.subtitle}>
									{"Let's experience the joy of telecare AI."}
								</Text>
							</View>

							<View style={styles.form}>
								<View style={styles.fieldGroup}>
									<Text style={styles.label}>Email Address</Text>
									<View style={[styles.inputWrapper]}>
										<Mail size={20} color="#28342f" strokeWidth={2.4} />
										<TextInput
											style={styles.input}
											placeholder="Enter your email address"
											placeholderTextColor="#8e9693"
											keyboardType="email-address"
											autoCapitalize="none"
										/>
									</View>
								</View>

								<View style={styles.fieldGroup}>
									<Text style={styles.label}>Password</Text>
									<View style={styles.inputWrapper}>
										<Lock size={20} color="#5f6865" strokeWidth={2.4} />
										<TextInput
											style={styles.input}
											placeholder="Enter your password"
											placeholderTextColor="#8e9693"
											secureTextEntry={isPasswordHidden}
										/>
										<Pressable
											accessibilityLabel={
												isPasswordHidden ? "Show password" : "Hide password"
											}
											onPress={() => setIsPasswordHidden((current) => !current)}
											style={styles.eyeButton}
										>
											{isPasswordHidden ? (
												<EyeOff size={20} color="#cbd0ce" strokeWidth={2.2} />
											) : (
												<Eye size={20} color="#84cc16" strokeWidth={2.2} />
											)}
										</Pressable>
									</View>
								</View>

								{!isSignedUp && (
									<View style={styles.fieldGroup}>
										<Text style={styles.label}>Confirm Password</Text>
										<View style={styles.inputWrapper}>
											<Lock size={20} color="#5f6865" strokeWidth={2.4} />
											<TextInput
												style={styles.input}
												placeholder="Enter Password again"
												placeholderTextColor="#8e9693"
												secureTextEntry={isConfirmPasswordHidden}
											/>
											<Pressable
												accessibilityLabel={
													isConfirmPasswordHidden
														? "Show confirm password"
														: "Hide confirm password"
												}
												onPress={() =>
													setIsConfirmPasswordHidden((current) => !current)
												}
												style={styles.eyeButton}
											>
												{isConfirmPasswordHidden ? (
													<EyeOff size={20} color="#cbd0ce" strokeWidth={2.2} />
												) : (
													<Eye size={20} color="#84cc16" strokeWidth={2.2} />
												)}
											</Pressable>
										</View>
									</View>
								)}

								<Pressable style={styles.signInButton}>
									<Text style={styles.signInText}>
										{isSignedUp ? "Sign In" : "Sign Up"}
									</Text>
									<ArrowRight size={22} color="#ffffff" strokeWidth={2.6} />
								</Pressable>
							</View>

							{isSignedUp && (
								<View style={styles.socialRow}>
									<Pressable style={styles.socialButton}>
										<FontAwesome name="facebook" size={24} color="#303c37" />
									</Pressable>

									<Pressable style={styles.socialButton}>
										<AntDesign name="google" size={23} color="#303c37" />
									</Pressable>

									<Pressable style={styles.socialButton}>
										<AntDesign name="instagram" size={23} color="#303c37" />
									</Pressable>
								</View>
							)}

							<View style={styles.footer}>
								{isSignedUp ? (
									<View style={styles.signupRow}>
										<Text style={styles.footerText}>
											{"Don't have an account? "}
										</Text>
										<Pressable onPress={() => setIsSignedUp(false)}>
											<Text style={styles.linkText}>Sign Up</Text>
										</Pressable>
									</View>
								) : (
									<View style={styles.signupRow}>
										<Text style={styles.footerText}>
											Already have an account?{" "}
										</Text>
										<Pressable onPress={() => setIsSignedUp(true)}>
											<Text style={styles.linkText}>Sign In</Text>
										</Pressable>
									</View>
								)}

								{isSignedUp && (
									<Pressable onPress={() => setForgotPassword(true)}>
										<Text style={styles.forgotText}>Forgot your password?</Text>
									</Pressable>
								)}
							</View>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		backgroundColor: "#f8f8f8",
		paddingHorizontal: 18,
		paddingTop: 16,
		paddingBottom: 12,
		shadowOffset: { width: 0, height: 8 },
	},

	statusIcons: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},

	signalBar: {
		width: 3,
		borderRadius: 2,
		backgroundColor: "#1d2723",
		alignSelf: "flex-end",
	},

	signalOne: {
		height: 5,
	},

	signalTwo: {
		height: 7,
	},

	signalThree: {
		height: 9,
	},

	wifi: {
		width: 11,
		height: 8,
		borderTopWidth: 2,
		borderColor: "#1d2723",
		borderRadius: 8,
		transform: [{ rotate: "45deg" }],
	},

	header: {
		alignItems: "center",
		marginTop: 30,
	},

	title: {
		marginTop: 2,
		color: "#28342f",
		fontSize: 30,
		fontWeight: "900",
		lineHeight: 36,
	},

	subtitle: {
		marginTop: 8,
		color: "#8c9491",
		fontSize: 13,
		fontWeight: "500",
		textAlign: "center",
	},

	form: {
		marginTop: 32,
		gap: 18,
	},

	fieldGroup: {
		gap: 8,
	},

	label: {
		color: "#394640",
		fontSize: 12,
		fontWeight: "900",
	},

	inputWrapper: {
		height: 48,
		backgroundColor: "#ffffff",
		borderRadius: 18,
		paddingHorizontal: 16,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},

	inputWrapperActive: {
		borderWidth: 2,
		borderColor: "#84cc16",
		shadowColor: "#84cc16",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 4,
	},

	input: {
		flex: 1,
		height: "100%",
		paddingVertical: 0,
		color: "#6e7874",
		fontSize: 14,
		fontWeight: "600",
	},

	eyeButton: {
		width: 32,
		height: 32,
		alignItems: "center",
		justifyContent: "center",
	},

	signInButton: {
		height: 49,
		marginTop: 2,
		backgroundColor: "#7ed80d",
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 12,
	},

	signInText: {
		color: "#ffffff",
		fontSize: 14,
		fontWeight: "900",
	},

	socialRow: {
		marginTop: 32,
		flexDirection: "row",
		justifyContent: "center",
		gap: 9,
	},

	socialButton: {
		width: 46,
		height: 46,
		borderRadius: 15,
		backgroundColor: "#ffffff",
		borderWidth: 1,
		borderColor: "#cbd0ce",
		alignItems: "center",
		justifyContent: "center",
	},

	footer: {
		marginTop: 26,
		alignItems: "center",
		gap: 7,
	},

	signupRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	footerText: {
		color: "#38443f",
		fontSize: 12,
		fontWeight: "800",
	},

	linkText: {
		color: "#84cc16",
		fontSize: 12,
		fontWeight: "900",
		textDecorationLine: "underline",
	},

	forgotText: {
		color: "#84cc16",
		fontSize: 12,
		fontWeight: "700",
		textDecorationLine: "underline",
	},

	homeIndicator: {
		width: 112,
		height: 4,
		borderRadius: 2,
		backgroundColor: "#101a16",
		alignSelf: "center",
		marginTop: "auto",
	},
});
