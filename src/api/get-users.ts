import { GetUsersQuery, User } from "@/@types/user";
import { api } from "@/lib/axios";

export async function getUsers({ name, email }: GetUsersQuery) {
	try {
		const response = await api.get<User[]>("/users", {
			params: {
				name,
				email,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
}
