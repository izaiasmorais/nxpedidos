import { Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { TableRow, TableCell } from "../ui/table";

export function OrderTableSkeleton() {
	return Array.from({ length: 12 }).map((_, index) => {
		return (
			<TableRow key={index}>
				<TableCell className="w-[75px]">
					<Button className="p-0 w-10 h-10" variant="outline" disabled>
						<Eye size={20} />
					</Button>
				</TableCell>

				<TableCell className="min-w-[150px]">
					<Skeleton className="h-5 w-[150px] bg-muted" />
				</TableCell>

				<TableCell className="min-w-[100px] w-[300px]">
					<Skeleton className="h-5 w-[150px] bg-muted" />
				</TableCell>

				<TableCell className="min-w-[100px] w-[300px]">
					<Skeleton className="h-5 w-[150px] bg-muted" />
				</TableCell>

				<TableCell className="min-w-[100px] w-[300px]">
					<Skeleton className="h-5 w-[150px] bg-muted" />
				</TableCell>
			</TableRow>
		);
	});
}
