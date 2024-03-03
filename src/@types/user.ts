export interface User {
	id: string;
	name: string;
	email: string;
	created_at: string;
}

export interface GetUserResponse {
	users: User[];
}

export interface GetUsersQueryParams {
	name?: string | null;
	email?: string | null;
	created_at?: Date | null;
}

export interface CreateUserBody {
	name: string;
	email: string;
}

export interface DeleteUserBody {
	userId: string;
}
