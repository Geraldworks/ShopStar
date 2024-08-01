import { FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FieldValues, UseFormReturn, Path } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface FormFieldWrapper<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  formLabel: string;
  placeholder: string;
  type?: string;
}

const FormFieldWrapper = <T extends FieldValues>(props: FormFieldWrapper<T>) => {
  const { form, name, formLabel, placeholder, type } = props;
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <Input type={type || ""} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldWrapper;
