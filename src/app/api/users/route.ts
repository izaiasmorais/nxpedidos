import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	if (request.method !== "GET") {
		return NextResponse.json({ error: "Invalid method" }, { status: 405 });
	}

	const data = await prisma.user.findMany();

	return NextResponse.json(data);
}
