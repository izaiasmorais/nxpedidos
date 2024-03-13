import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";

export function DataTab() {
	return (
		<form className="w-[1000px] pt-2 space-y-4">
			<Separator />

			<strong className="mt-4 block">Informações Pessoais</strong>

			<div className="flex items-center gap-4">
				<div className="w-[400px]">
					<Label htmlFor="name" className="font-semibold">
						Nome
					</Label>
				</div>
				<Input type="text" name="name" defaultValue="Izaías Lima" />
			</div>

			<div className="flex items-center gap-4">
				<div className="w-[400px]">
					<Label htmlFor="cpf" className="font-semibold">
						CPF
					</Label>
				</div>
				<Input type="number" name="cpf" placeholder="CPF" />
			</div>

			<Separator />

			<strong className="mt-4 block">Dados de Contato</strong>

			<div className="flex items-center gap-4">
				<div className="w-[400px]">
					<Label htmlFor="name" className="font-semibold">
						Email
					</Label>
				</div>
				<Input type="text" name="name" defaultValue="izaiaslima356@gmail.com" />
			</div>

			<div className="flex items-center gap-4">
				<div className="w-[400px]">
					<Label htmlFor="phone" className="font-semibold">
						Celular
					</Label>
				</div>
				<Input type="number" name="phone" defaultValue={5586981668198} />
			</div>

			<div className="flex pt-2 justify-end">
				<Button type="submit" disabled>
					Salvar Alterações
				</Button>
			</div>
		</form>
	);
}
