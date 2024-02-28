import { api } from "@/lib/axios";

interface IUser {
	id: string;
	name: string;
	email: string;
	created_at: Date;
}

export async function getUsers() {
	try {
		const response = await api.get<IUser[]>("/users");

		console.log(response.data);

		return response.data;
	} catch (error) {
		console.log(error);
	}
}
