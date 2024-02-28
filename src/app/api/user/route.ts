import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

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

	return NextResponse.json({ user });
}
