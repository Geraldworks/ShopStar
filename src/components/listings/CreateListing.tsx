import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Listing, ListingSchema, TListingSchema } from "@/types/listing";
import FormFieldWrapper from "../forms/FormFieldWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import useTimedNotif from "../hooks/useTimedNotif";
import listingService from "@/services/listings";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import MiniLoader from "../MiniLoader";
import ErrorDiv from "../ErrorDiv";
import { Form } from "../ui/form";
import { useState } from "react";

interface CreateListingProps {
  addListing: (listing: Listing) => void;
}

function CreateListing(props: CreateListingProps) {
  const { addListing } = props;
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useTimedNotif();

  const form = useForm<TListingSchema>({
    resolver: zodResolver(ListingSchema),
    defaultValues: {
      listingImage: "",
      title: "",
      description: "",
      price: 100
    }
  });

  const onSubmit = async (formFields: TListingSchema) => {
    console.log("submitted");
    try {
      setSubmitted(true);
      const listingToDb = { ...formFields, createdAt: new Date().toISOString() };
      const resultFromDb = await listingService.createOne(listingToDb);
      form.reset();
      addListing(resultFromDb);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Create Listing</Button>
      </DialogTrigger>
      <DialogContent className="w-1/2">
        <DialogHeader>
          <DialogTitle>Create Listing</DialogTitle>
          <DialogDescription>Create a new listing here. Click confirm when done.</DialogDescription>
        </DialogHeader>
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-4">
                <FormFieldWrapper form={form} name="title" formLabel="Title" placeholder="Title" />
                <FormFieldWrapper
                  form={form}
                  name="description"
                  formLabel="Listing Description"
                  placeholder="Listing Description"
                />
                <FormFieldWrapper form={form} name="price" formLabel="Price" placeholder="0" />
                <FormFieldWrapper
                  form={form}
                  name="listingImage"
                  formLabel="Listing Image URL (Optional)"
                  placeholder="Listing Image URL"
                />
              </div>
              <ErrorDiv error={error} />
              <DialogFooter>
                <Button disabled={submitted} type="submit" className="mt-4 items-center">
                  <MiniLoader displayText="Submit" isLoading={submitted} />
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateListing;
