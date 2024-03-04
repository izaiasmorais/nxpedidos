import { Skeleton } from "../ui/skeleton";
import { TableRow, TableCell } from "../ui/table";
import { EditUserModal } from "./user-edit-modal";

export function UserTableSkeleton() {
	return Array.from({ length: 12 }).map((_, index) => {
		return (
			<TableRow key={index}>
				<TableCell>
					<Skeleton className="h-5 w-[150px] bg-muted" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-5 w-[200px] bg-muted" />
				</TableCell>
				<TableCell>
					<Skeleton className="h-5 w-[100px] bg-muted" />
				</TableCell>
				<TableCell>
					<EditUserModal />
				</TableCell>
			</TableRow>
		);
	});
}
