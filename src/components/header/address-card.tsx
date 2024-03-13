import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { ChevronDown, History, Home, MoreVertical } from "lucide-react";
import { Card } from "../ui/card";
import { SearchInput } from "../global/search-input";

export function AddressCard() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="flex items-center gap-2 py-2 px-4 h-10"
				>
					<span className="text-muted-foreground">
						R. Eng. Josué Araújo Luiz, 4685
					</span>
					<ChevronDown className="text-red-500" size={20} />
				</Button>
			</DialogTrigger>

			<DialogContent className="p-10">	
				<DialogHeader>
					<DialogTitle className="text-center">
						Onde você quer receber seu pedido?
					</DialogTitle>

					<div className="pt-4 space-y-4">
						<SearchInput
							placeholder="Buscar endereço e número..."
							className="w-full h-14 px-6"
						/>

						<Card
							className="p-4 flex justify-between items-center gap-6 rounded-sm shadow-none border-red-500
						hover:shadow-lg translate-all duration-200 hover:cursor-pointer"
						>
							<div className="flex gap-6 items-center">
								<Home className="w-6 h-6" />
								<div className="flex flex-col">
									<span className="font-medium">Home</span>
									<span className="text-sm text-muted-foreground">
										R. Eng. Josué Araújo Luiz, 4685
									</span>
								</div>
							</div>

							<MoreVertical className="w-6 h-6" />
						</Card>

						<Card
							className="p-4 flex justify-between items-center gap-6 rounded-sm shadow-none
						hover:shadow-lg translate-all duration-200 hover:cursor-pointer"
						>
							<div className="flex gap-6 items-center">
								<History className="w-6 h-6" />
								<div className="flex flex-col">
									<span className="font-medium">R. Quarenta, 603</span>
									<span className="text-sm text-muted-foreground">
										Condomínio Bambu, Torre 4, Apartamento 603
									</span>
								</div>
							</div>

							<MoreVertical className="w-6 h-6" />
						</Card>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
