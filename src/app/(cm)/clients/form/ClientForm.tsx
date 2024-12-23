"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  insertClientSchema,
  selectClientSchemaType,
  type insertClientSchemaType,
  type selectClientSchema,
} from "@/zod-schema/client";

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

  async function SubmitForm(data: insertClientSchemaType) {
    console.log(data);
  }
  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <h2 className="text-2xl font-bold">{client?.id ? "Edit" : "New"}</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(SubmitForm)}
          className="flex flex-col sm:flex-row gap-4 gap-8"
        >
          <p>{JSON.stringify(form.getValues())}</p>
        </form>
      </Form>
    </div>
  );
}
