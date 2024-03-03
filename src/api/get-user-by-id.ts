import { api } from "@/lib/axios";

export async function getUserById(userId: string) {
	try {
		await api.get("/users", {
			data: {
				userId,
			},
		});
	} catch (error) {
		console.log(error);
	}
}
