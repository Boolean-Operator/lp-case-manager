"use client";
import { InputWithLabel } from "@/components/inputs/InputWithLabel";
import { SelectWithLabel } from "@/components/inputs/SelectWithLabel";

import { clientStatus } from "@/constants/clientStatus";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  insertClientSchema,
  selectClientSchemaType,
  type insertClientSchemaType,
} from "@/zod-schema/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  client?: selectClientSchemaType;
};

export default function ClientForm({ client }: Props) {
  const defaultValues: insertClientSchemaType = {
    id: client?.id ?? 0,
    firstName: client?.firstName ?? "",
    lastName: client?.lastName ?? "",
    middleName: client?.middleName ?? "",
    email: client?.email ?? "",
    phone: client?.phone ?? "",
    caseManager: client?.caseManager ?? 0,
    status: client?.status ?? "Preliminary",
  };

  const form = useForm<insertClientSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertClientSchema),
    defaultValues,
  });

  async function submitForm(data: insertClientSchemaType) {
    console.log("BANG");
    console.log(data);
  }
  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <h2 className="text-2xl font-bold">
        {client?.id ? "Edit" : "New"} Client{" "}
        {client?.id ? `# ${client.id}` : "Form"}
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col md:flex-row gap-4 md:gap-8"
        >
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabel<insertClientSchemaType>
              fieldTitle="First Name"
              nameInSchema="firstName"
            />

            <InputWithLabel<insertClientSchemaType>
              fieldTitle="Last Name"
              nameInSchema="lastName"
            />

            <InputWithLabel<insertClientSchemaType>
              fieldTitle="Middle Name"
              nameInSchema="middleName"
            />
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <InputWithLabel<insertClientSchemaType>
              fieldTitle="Email"
              nameInSchema="email"
            />

            <InputWithLabel<insertClientSchemaType>
              fieldTitle="Phone"
              nameInSchema="phone"
            />
            <SelectWithLabel<insertClientSchemaType>
              fieldTitle="Client Status"
              nameInSchema="status"
              data={clientStatus}
            />

            <div className="flex gap-2">
              <Button
                type="submit"
                className="w-3/4"
                variant="default"
                title="Save"
              >
                Save
              </Button>
              <Button
                type="button"
                variant="destructive"
                title="Reset"
                onClick={() => form.reset(defaultValues)}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
