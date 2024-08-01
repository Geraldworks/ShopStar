import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SignUpSchema, TSignUpSchema } from "@/types/auth";
import FormFieldWrapper from "../forms/FormFieldWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import useTimedNotif from "../hooks/useTimedNotif";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import authService from "../../services/user";
import { Form } from "@/components/ui/form";
import { DialogHeader } from "../ui/dialog";
import { useForm } from "react-hook-form";
import MiniLoader from "../MiniLoader";
import ErrorDiv from "../ErrorDiv";
import { useState } from "react";

const Signup = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useTimedNotif();

  const navigate = useNavigate();

  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = async (formFields: TSignUpSchema) => {
    try {
      setSubmitted(true);
      await authService.createUser(formFields);
      form.reset();
      setShowDialog(true);
      setTimeout(() => {
        setSubmitted(false);
        navigate("/signin");
      }, 2500);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
    setSubmitted(false);
  };

  return (
    <div className="min-w-[300px] w-[50vw] max-w-[750px]">
      <Dialog open={showDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your account has been created!</DialogTitle>
            <DialogDescription>Redirecting you to the sign in page soon</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <div className="w-1/2">
                <FormFieldWrapper
                  form={form}
                  name="firstName"
                  formLabel="First Name"
                  placeholder="First Name"
                />
              </div>
              <div className="w-1.5"></div>
              <div className="w-1/2">
                <FormFieldWrapper
                  form={form}
                  name="lastName"
                  formLabel="Last Name"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <FormFieldWrapper
              form={form}
              name="username"
              formLabel="Username"
              placeholder="Username"
            />
            <FormFieldWrapper form={form} name="email" formLabel="Email" placeholder="Email" />
            <FormFieldWrapper
              form={form}
              name="password"
              formLabel="Password"
              placeholder="Password"
            />
            <FormFieldWrapper
              form={form}
              name="confirmPassword"
              formLabel="Confirm Password"
              placeholder="Confirm Password"
            />
          </div>
          <ErrorDiv error={error} />
          <Button
            disabled={submitted}
            type="submit"
            className="min-w-[300px] w-[50vw] max-w-[750px] mt-6"
          >
            <MiniLoader displayText="Submit" isLoading={submitted} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
