// context/AuthContext.jsx

import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
} from "react";

type AuthContextType = {
	forgotPassword: boolean;
	setForgotPassword: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [forgotPassword, setForgotPassword] = useState(true);

	return (
		<AuthContext.Provider
			value={{
				forgotPassword,
				setForgotPassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}

	return context;
};
