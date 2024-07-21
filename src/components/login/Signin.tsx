import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { SignInSchema, TSignInSchema } from "@/types/login";
import { useCustomError } from "../hooks/customErrorHooks";
import { LoadingSpinner } from "@/components/ui/loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import loginService from "@/services/login";
import { useForm } from "react-hook-form";
import ErrorDiv from "../ErrorDiv";
import { useState } from "react";

const Signin = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useCustomError();
  const navigate = useNavigate();
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });
  const onSubmit = async (formFields: TSignInSchema) => {
    setSubmitted(true);
    try {
      const result = await loginService.login(formFields);
      form.reset();
      window.localStorage.setItem("shopstar-token", result);
      navigate("/products");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }

    setSubmitted(false);
  };
  return (
    <div className="min-w-[300px] w-[50vw] max-w-[750px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-4">
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

export default Signin;
