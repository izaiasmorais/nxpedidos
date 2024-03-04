import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import dayjs from "dayjs";
import { CreateUserBody, DeleteUserBody } from "@/@types/user";

export async function GET(request: Request) {
	if (request.method !== "GET") {
		return NextResponse.json({ error: "Invalid method" }, { status: 405 });
	}

	const { searchParams } = new URL(request.url);
	const name = searchParams.get("name");
	const email = searchParams.get("email");
	const createdAt = searchParams.get("created_at");

	const newDate = dayjs(createdAt)
		.add(23, "hours")
		.add(59, "minutes")
		.add(59, "seconds")
		.toDate();

	const data = await prisma.user.findMany({
		where: {
			name: {
				contains: name ?? undefined,
			},
			email: {
				contains: email ?? undefined,
			},
			created_at: {
				lte: newDate ?? undefined,
			},
		},
	});

	return NextResponse.json(data);
}

export async function POST(request: Request) {
	if (request.method !== "POST") {
		return NextResponse.json({ error: "Invalid method" }, { status: 405 });
	}

	const { name, email }: CreateUserBody = await request.json();

	const user = await prisma.user.create({
		data: {
			name,
			email,
		},
	});

	return NextResponse.json(user);
}

export async function DELETE(request: Request) {
	if (request.method !== "DELETE") {
		return NextResponse.json({ error: "Invalid method" }, { status: 405 });
	}

	const { userId } = await request.json();

	const user = await prisma.user.delete({
		where: {
			id: userId,
		},
	});

	return NextResponse.json(user);
}

export async function PATCH(request: Request) {
	if (request.method !== "PATCH") {
		return NextResponse.json({ error: "Invalid method" }, { status: 405 });
	}

	const { userId, name, email } = await request.json();

	const user = await prisma.user.update({
		where: {
			id: userId,
		},
		data: {
			name,
			email,
		},
	});

	return NextResponse.json(user);
}
