import { SignInSchema, TSignInSchema } from "@/types/login";
import FormFieldWrapper from "../forms/FormFieldWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import useTimedNotif from "../hooks/useTimedNotif";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import loginService from "@/services/login";
import { useForm } from "react-hook-form";
import MiniLoader from "../MiniLoader";
import ErrorDiv from "../ErrorDiv";
import { useState } from "react";

const Signin = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useTimedNotif();

  const navigate = useNavigate();

  const form = useForm<TSignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = async (formFields: TSignInSchema) => {
    try {
      setSubmitted(true);
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
            <FormFieldWrapper
              form={form}
              name="username"
              formLabel="Username"
              placeholder="Username"
            />
            <FormFieldWrapper
              form={form}
              name="password"
              formLabel="Password"
              placeholder="Username"
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

export default Signin;
