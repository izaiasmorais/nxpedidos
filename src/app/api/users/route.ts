import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: Request) {
	if (request.method !== "GET") {
		return NextResponse.json({ error: "Invalid method" }, { status: 405 });
	}

	const getUsersBody = z.object({
		name: z.string().optional(),
		email: z.string(),
		created_at: z.date(),
	});

	// const { name, email, created_at } = getUsersBody.parse(request.body);

	const data = await prisma.user.findMany({
		// where: {
		// 	name: {
		// 		contains: name,
		// 	},
		// 	email: {
		// 		contains: email,
		// 	},
		// 	created_at: {
		// 		lte: created_at,
		// 	},
		// },
	});

	return NextResponse.json(data);
}

export async function POST(request: Request) {
	if (request.method !== "POST") {
		return NextResponse.json({ error: "Invalid method" }, { status: 405 });
	}

	const { name, email } = await request.json();

	const user = await prisma.user.create({
		data: {
			name,
			email,
		},
	});

	return NextResponse.json(user);
}
