import { api } from "@/lib/axios";
import { CreateUserBody } from "@/@types/user";

export async function createUser(data: CreateUserBody) {
	try {
		await api.post("/users", {
			name: data.name,
			email: data.email,
		});
	} catch (error) {
		console.log(error);
	}
}
