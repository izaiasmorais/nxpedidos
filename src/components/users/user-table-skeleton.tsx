import { Skeleton } from "../ui/skeleton";
import { TableRow, TableCell } from "../ui/table";

export function UserTableSkeleton() {
	return Array.from({ length: 5 }).map((_, index) => {
		return (
			<TableRow key={index}>
				<TableCell>
					<Skeleton className="h-5 w-[300px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-5 w-[150px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-5 w-[200px]" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-5 w-[100px]" />
				</TableCell>
			</TableRow>
		);
	});
}
