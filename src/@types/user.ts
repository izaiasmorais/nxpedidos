export interface User {
	id: number;
	name: string;
	email: string;
	created_at: string;
}

export interface GetUserResponse {
	users: User[];
}

export interface GetUsersQuery {
	name: string | null;
	email: string | null;
}

export interface CreateUserBody {
	name: string;
	email: string;
}
