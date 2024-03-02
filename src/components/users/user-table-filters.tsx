"use client";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "../ui/date-picker";
import { Input } from "../ui/input";
import { CreateUserModal } from "./user-create-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { z } from "zod";

const userFilterSchema = z.object({
	name: z.string().optional(),
	email: z.string().optional(),
	createdAt: z.date().optional(),
});

type UserFilterSchema = z.infer<typeof userFilterSchema>;

export function UserTableFilters() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const name = searchParams.get("name");
	const email = searchParams.get("email");
	const createdAt = searchParams.get("createdAt");

	const { register, handleSubmit, reset, control } = useForm<UserFilterSchema>({
		resolver: zodResolver(userFilterSchema),
		defaultValues: {
			name: name ?? "",
			email: email ?? "",
			createdAt: new Date(createdAt ?? new Date()) ?? "",
		},
	});

	function handleFilter({ name, email, createdAt }: UserFilterSchema) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		if (name) {
			state.set("name", name);
		} else {
			state.delete("name");
		}

		if (email) {
			state.set("email", email);
		} else {
			state.delete("email");
		}

		if (createdAt) {
			state.set("createdAt", format(createdAt, "yyyy-MM-dd", { locale: ptBR }));
		} else {
			state.delete("createdAt");
		}

		const search = state.toString();
		const query = search ? `?${search}` : "";

		router.push(`${pathname}${query}`);
	}

	function handleClearFilters() {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		state.delete("name");
		state.delete("email");
		state.delete("createdAt");

		reset({
			name: "",
			email: "",
			createdAt: new Date(),
		});

		const search = state.toString();
		const query = search ? `?${search}` : "";
		router.push(`${pathname}${query}`);
	}

	return (
		<form
			className="flex gap-4 py-4"
			onSubmit={handleSubmit(handleFilter)}
			onChange={(e) => console.log(e.target)}
		>
			<Input
				className="w-full"
				placeholder="Nome do usuário"
				{...register("name")}
			/>

			<Input
				className="w-full"
				placeholder="Email do usuário"
				{...register("email")}
			/>

			<Controller
				control={control}
				name="createdAt"
				render={({ field: { onChange, value } }) => {
					return (
						<DatePicker date={value ? value : new Date()} setDate={onChange} />
					);
				}}
			/>

			<Button type="submit" variant="secondary" className="px-8">
				Filtar
			</Button>

			<Button
				type="button"
				variant="outline"
				className="px-8"
				onClick={() => handleClearFilters()}
			>
				Limpar
			</Button>
		</form>
	);
}
