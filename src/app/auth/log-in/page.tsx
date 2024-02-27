"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { api } from "@/lib/axios";

const signInForm = z.object({
	name: z.string(),
	email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignInForm>({
		defaultValues: {
			name: "",
			email: "",
		},
	});

	async function handleSignIn(data: SignInForm) {
		try {
			await api.post("/users", {
				name: data.name,
				email: data.email,
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<main className="h-screen w-full bg-slate-100 flex items-center justify-center">
			<Card className="w-[400px] h-max">
				<CardHeader>
					<CardTitle>Authenticate</CardTitle>
					<CardDescription>Log in to your account to continue</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" type="text" {...register("name")} />
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="text" {...register("email")} />
						</div>

						<div className="pt-2">
							<Button type="submit" className="w-full" disabled={isSubmitting}>
								Log In
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</main>
	);
}
