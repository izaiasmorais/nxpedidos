import { GetUsersQueryParams, User } from "@/@types/user";
import { api } from "@/lib/axios";

export async function getUsers({
	name,
	email,
	created_at,
}: GetUsersQueryParams) {
	try {
		const response = await api.get<User[]>("/users", {
			params: {
				name,
				email,
				created_at,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
}
