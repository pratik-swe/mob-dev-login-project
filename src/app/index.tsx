import SignIn from "@/components/SignIn";
import { View } from "react-native";
import {useAuth } from "@/context/AuthContext";
import ForgotPassword from "@/components/ForgotPassword";
export default function Index() {
  const {forgotPassword, setForgotPassword} = useAuth();
	return (
			<View style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
        {
          forgotPassword ? <ForgotPassword /> : <SignIn />
        }
				
			</View>
		
	);
}
