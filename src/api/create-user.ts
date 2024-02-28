import { z } from "zod";
import { api } from "@/lib/axios";

const signInForm = z.object({
	name: z.string(),
	email: z.string().email(),
});

export type SignInForm = z.infer<typeof signInForm>;

export async function createUser(data: SignInForm) {
	try {
		await api.post("/user", {
			name: data.name,
			email: data.email,
		});
	} catch (error) {
		console.log(error);
	}
}
