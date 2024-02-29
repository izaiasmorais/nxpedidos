import { User } from "@/@types/user";
import { api } from "@/lib/axios";

export async function getUsers() {
	try {
		const response = await api.get<User[]>("/users");

		return response.data;
	} catch (error) {
		console.log(error);
	}
}
