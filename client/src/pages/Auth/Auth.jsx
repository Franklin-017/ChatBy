import React, { useState } from "react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import Victory from "@/assets/victory.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleLogin = async () => {};
	const handleSignup = async () => {};

	return (
		<div className="w-[100vw] min-h-[100vh] flex items-center justify-center">
			<div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl">
				<div className="flex items-center justify-center flex-col mt-[20%]">
					<div className="flex items-center justify-center">
						<h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
						<img src={Victory} alt="Victory Emoji" className="h-[5.25rem]" />
					</div>
					<p className="font-medium text-center">
						Fill in the details to get started with the chat app!
					</p>
				</div>
				<div className="flex items-start justify-center w-full mt-7">
					<Tabs defaultValue="login" className="w-[50%]">
						<TabsList className="grid grid-cols-2 w-full mb-7">
							<TabsTrigger
								value="login"
								className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
							>
								Login
							</TabsTrigger>
							<TabsTrigger
								value="signup"
								className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
							>
								Sign-up
							</TabsTrigger>
						</TabsList>
						<TabsContent className="flex flex-col gap-5" value="login">
							<Input
								placeholder="Email"
								type="email"
								className="rounded-md p-3 focus-visible:ring-offset-0"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								placeholder="Password"
								type="password"
								className="rounded-md p-3 outline-none focus-visible:ring-offset-0"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button className="rounded p-3 bg-emerald-500" onClick={handleLogin}>Login</Button>
						</TabsContent>
						<TabsContent className="flex flex-col gap-5" value="signup">
							<Input
								placeholder="Email"
								type="email"
								className="rounded-md p-3 focus-visible:ring-offset-0"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								placeholder="Password"
								type="password"
								className="rounded-md p-3 outline-none focus-visible:ring-offset-0"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Input
								placeholder="Confirm Password"
								type="password"
								className="rounded-md p-3 outline-none focus-visible:ring-offset-0"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
							<Button className="rounded p-3 bg-emerald-500" onClick={handleSignup}>Sign-up</Button>
						</TabsContent>
					</Tabs>
				</div>
			</div>
			
		</div>
	);
};

export default Auth;
