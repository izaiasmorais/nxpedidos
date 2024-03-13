"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { DatePicker } from "../ui/date-picker";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { Search, X } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

const orderFilterSchema = z.object({
	name: z.string().optional(),
	email: z.string().optional(),
	status: z.string().optional(),
});

type OrderFilterSchema = z.infer<typeof orderFilterSchema>;

interface OrderTableFiltersProps {
	date: Date | undefined;
	setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export function OrderTableFilters({ date, setDate }: OrderTableFiltersProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const name = searchParams.get("name");
	const email = searchParams.get("email");

	const { register, handleSubmit, reset, control } = useForm<OrderFilterSchema>(
		{
			resolver: zodResolver(orderFilterSchema),
			defaultValues: {
				name: name ?? "",
				email: email ?? "",
			},
		}
	);

	function handleFilter({ name, email }: OrderFilterSchema) {
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
			className="flex gap-4"
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
				name="status"
				control={control}
				render={({ field: { name, onChange, value, disabled } }) => {
					return (
						<Select
							defaultValue="all"
							name={name}
							value={value}
							disabled={disabled}
							onValueChange={onChange}
						>
							<SelectTrigger className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Status</SelectItem>
								<SelectItem value="pending">Pendente</SelectItem>
								<SelectItem value="processing">Processando</SelectItem>
								<SelectItem value="delivering">Em entrega</SelectItem>
								<SelectItem value="canceled">Cancelado</SelectItem>
								<SelectItem value="delivered">Entregue</SelectItem>
							</SelectContent>
						</Select>
					);
				}}
			/>

			<DatePicker date={date} setDate={setDate} />

			<Button type="submit" variant="secondary" className="w-full">
				<Search className="mr-2 h-4 w-4" />
				Filtrar resultados
			</Button>

			<Button
				type="button"
				variant="outline"
				className="w-full"
				onClick={() => handleClearFilters()}
			>
				<X className="mr-2 h-4 w-4" />
				Limpar filtros
			</Button>
		</form>
	);
}
