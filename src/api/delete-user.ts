import { api } from "@/lib/axios";
import { DeleteUserBody } from "@/@types/user";

export async function deleteUser(data: DeleteUserBody) {
	try {
		await api.delete("/users", {
			data: {
				userId: data.userId,
			},
		});
	} catch (error) {
		console.log(error);
	}
}
