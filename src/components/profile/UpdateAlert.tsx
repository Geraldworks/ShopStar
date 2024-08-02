import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

interface UpdateAlertProps {
  children: React.ReactNode;
}

const UpdateAlert = (props: UpdateAlertProps) => {
  const { children } = props;
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-400">Update Listing</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Please check your listing details</AlertDialogTitle>
          <AlertDialogDescription>The current listing will be updated</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="p-0">{children}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateAlert;
