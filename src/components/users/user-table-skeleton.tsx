import { Skeleton } from "../ui/skeleton";
import { TableRow, TableCell } from "../ui/table";
import { UserDeleteDialog } from "./user-delete-modal";
import { EditUserModal } from "./user-edit-modal";

export function UserTableSkeleton() {
	return Array.from({ length: 10 }).map((_, index) => {
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
				<TableCell>
					<EditUserModal />
				</TableCell>
				<TableCell>
					<UserDeleteDialog  />
				</TableCell>
			</TableRow>
		);
	});
}
