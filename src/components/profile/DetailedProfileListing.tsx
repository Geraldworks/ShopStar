import { ListingSchema, ListingWithUsername, TListingSchema } from "../../types/listing";
import FormFieldWrapper from "../forms/FormFieldWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import listingService from "@/services/listings";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DeleteAlert from "./DeleteAlert";
import UpdateAlert from "./UpdateAlert";
import MiniLoader from "../MiniLoader";
import { Button } from "../ui/button";
import { isAxiosError } from "axios";
import Theme from "../Theme";

interface DetailedProfileListingProps {
  listingId: number;
}

const DetailedProfileListing = (props: DetailedProfileListingProps) => {
  const { listingId } = props;
  const [submitted, setSubmitted] = useState(false);
  const [listing, setListing] = useState<ListingWithUsername>({} as ListingWithUsername);

  const navigate = useNavigate();

  const form = useForm<TListingSchema>({
    resolver: zodResolver(ListingSchema),
    defaultValues: {
      listingImage: "",
      title: "",
      description: "",
      price: 100
    }
  });

  const handleDelete = async () => {
    try {
      await listingService.deleteOne(listingId);
      navigate("/profile");
    } catch (err: unknown) {
      if (isAxiosError(err)) {
        console.log(err.response?.status);
      }
    }
  };

  const handleUpdate = async (formFields: TListingSchema) => {
    try {
      setSubmitted(true);
      const newFormFields = { ...formFields, createdAt: listing.createdAt };
      const resultFromDb = await listingService.updateOne(newFormFields, listingId);
      setListing(resultFromDb);
    } finally {
      setSubmitted(false);
    }
  };

  useEffect(() => {
    void (async () => {
      try {
        const listing = await listingService.getOne(listingId);
        setListing(listing);
        form.reset(listing);
      } catch (err: unknown) {
        if (isAxiosError(err)) {
          navigate("/profile/listings");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listingId]);

  return (
    <Theme viewTitle="Detailed Profile Listing">
      {isNaN(listingId) ? (
        <div className="text-center text-2xl">Invalid URL path</div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-4 mt-5">
          <img src={listing.listingImage} alt="Listing Image" className="w-5/12" />
          <div className="min-w-[300px] w-[50vw] max-w-[750px]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleUpdate)} id="updateForm">
                <div className="flex flex-col space-y-4">
                  <FormFieldWrapper
                    form={form}
                    name="title"
                    formLabel="Title"
                    placeholder="Title"
                  />
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
                <div className="flex justify-center space-x-10 my-5">
                  <UpdateAlert>
                    <Button
                      disabled={submitted}
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-400"
                      form="updateForm"
                    >
                      <MiniLoader displayText="Continue" isLoading={submitted} />
                    </Button>
                  </UpdateAlert>
                  <DeleteAlert deleteListing={handleDelete} />
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </Theme>
  );
};

export default DetailedProfileListing;
