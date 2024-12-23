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
  insertCaseNoteSchema,
  selectCaseNoteSchemaType,
  type insertCaseNoteSchemaType,
  type selectCaseNoteSchema,
} from "@/zod-schema/case-note";
import { selectClientSchemaType } from "@/zod-schema/client";

type Props = {
  client: selectClientSchemaType;
  caseNote?: selectCaseNoteSchemaType;
};

export default function CaseNoteForm({ client, caseNote }: Props) {
  const defaultValues: insertCaseNoteSchemaType = {
    id: caseNote?.id ?? "(New)",
    subject: caseNote?.subject ?? "",
    other: caseNote?.other ?? "",
    note: caseNote?.note ?? "",
    clientId: caseNote?.clientId ?? client?.id,
    authorId: caseNote?.authorId ?? 0,
  };

  const form = useForm<insertCaseNoteSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertCaseNoteSchema),
    defaultValues,
  });

  async function SubmitForm(data: insertCaseNoteSchemaType) {
    console.log(data);
  }
  return (
    <div className="flex flex-col gap-1 sm:px-8">
      <h2 className="text-2xl font-bold">
        {caseNote?.id ? "Edit" : "New"} Case Note{" "}
        {caseNote?.id ? `# ${caseNote.id}` : "Form"}
      </h2>
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
