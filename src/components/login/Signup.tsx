import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SignUpSchema, TSignUpSchema } from "@/types/login";
import { useCustomError } from "../hooks/customErrorHooks";
import { LoadingSpinner } from "@/components/ui/loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import userService from "../../services/user";
import { DialogHeader } from "../ui/dialog";
import { useForm } from "react-hook-form";
import ErrorDiv from "../ErrorDiv";
import { useState } from "react";

const Signup = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useCustomError();
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
      const userFromDb = await userService.createUser(formFields);
      // use this for something
      console.log(userFromDb);
      form.reset();
      setShowDialog(true);
      setTimeout(() => {
        setSubmitted(false);
        navigate("/signin");
      }, 2500);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitted(false);
        setError(err.message);
      }
    }
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
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1.5"></div>
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirm Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <ErrorDiv error={error} />
          <Button
            disabled={submitted}
            type="submit"
            className="min-w-[300px] w-[50vw] max-w-[750px] mt-6"
          >
            {!submitted ? "Submit" : <LoadingSpinner />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
