import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { SignInSchema, TSignInSchema } from "@/types/login";
import { LoadingSpinner } from "@/components/ui/loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";

// check if localstorage has jwt

const Signin = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });
  const onSubmit = (formFields: TSignInSchema) => {
    setSubmitted(true);
    // Perform async check

    // if success
    form.reset();
    // set localStorage
    // navigate("/products")

    // if fail
    form.setError("password", { type: "", message: "problem" });
    console.log(formFields);
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
                    <Input placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={submitted}
            type="submit"
            className="min-w-[300px] w-[50vw] max-w-[750px] mt-8"
          >
            {!submitted ? "Submit" : <LoadingSpinner />}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Signin;
