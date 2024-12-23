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
  insertWorkerSchema,
  selectWorkerSchemaType,
  type insertWorkerSchemaType,
  type selectWorkerSchema,
} from "@/zod-schema/workers";

type Props = {
  worker?: selectWorkerSchemaType;
};

export default function WorkerForm({ worker }: Props) {
  const defaultValues: insertWorkerSchemaType = {
    id: worker?.id ?? 0,
    firstName: worker?.firstName ?? "",
    lastName: worker?.lastName ?? "",
    middleName: worker?.middleName ?? "",
    role: worker?.role ?? "",
    email: worker?.email ?? "",
    phone: worker?.phone ?? "",
  };

  const form = useForm<insertWorkerSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertWorkerSchema),
    defaultValues,
  });

  async function SubmitForm(data: insertWorkerSchemaType) {
    console.log(data);
  }
  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <h2 className="text-2xl font-bold">{worker?.id ? "Edit" : "New"}</h2>
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
