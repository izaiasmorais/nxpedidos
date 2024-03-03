"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { DatePicker } from "../ui/date-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";

const userFilterSchema = z.object({
	name: z.string().optional(),
	email: z.string().optional(),
});

type UserFilterSchema = z.infer<typeof userFilterSchema>;

interface UserTableFiltersProps {
	date: Date | undefined;
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function UserTableFilters({ date, setDate }: UserTableFiltersProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const name = searchParams.get("name");
	const email = searchParams.get("email");

	const { register, handleSubmit, reset } = useForm<UserFilterSchema>({
		resolver: zodResolver(userFilterSchema),
		defaultValues: {
			name: name ?? "",
			email: email ?? "",
		},
	});

	function handleFilter({ name, email }: UserFilterSchema) {
		const state = new URLSearchParams(Array.from(searchParams.entries()));

		if (name) {
			state.set("name", name.trim());
		} else {
			state.delete("name");
		}

		if (email) {
			state.set("email", email.trim());
		} else {
			state.delete("email");
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

			<DatePicker date={date} setDate={setDate} />

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
