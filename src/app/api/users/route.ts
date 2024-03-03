import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import dayjs from "dayjs";

export async function GET(request: Request) {
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

	const { name, email } = await request.json();

	const user = await prisma.user.create({
		data: {
			name,
			email,
		},
	});

	return NextResponse.json(user);
}
