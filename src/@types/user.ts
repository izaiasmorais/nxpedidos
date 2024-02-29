export interface User {
	id: number;
	name: string;
	email: string;
	created_at: string;
}

export interface GetUserResponse {
	users: User[];
}

export interface GetUserQuery {
	name: string;
	email: string;
	created_at: string;
}

export interface CreateUserBody {
	name: string;
	email: string;
}
