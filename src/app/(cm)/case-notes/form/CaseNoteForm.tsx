"use client";
import { CheckboxWithLabel } from "@/components/inputs/CheckboxWithLabel";
import { InputWithLabel } from "@/components/inputs/InputWithLabel";
import { SelectWithLabel } from "@/components/inputs/SelectWithLabel";
import { TextAreaWithLabel } from "@/components/inputs/TextAreaWithLabel";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { caseNoteSubjects } from "@/constants/CaseNoteSubjects";
import {
  insertCaseNoteSchema,
  selectCaseNoteSchemaType,
  type insertCaseNoteSchemaType,
} from "@/zod-schema/case-note";
import { selectClientSchemaType } from "@/zod-schema/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  client: selectClientSchemaType;
  caseNote?: selectCaseNoteSchemaType;
};

export default function CaseNoteForm({ client, caseNote }: Props) {
  const defaultValues: insertCaseNoteSchemaType = {
    id: caseNote?.id ?? "(New)",
    subject: caseNote?.subject ?? "",
    // showOther: caseNote?.showOther ?? false,
    other: caseNote?.other ?? "",
    note: caseNote?.note ?? "",
    clientId: caseNote?.clientId ?? client?.id,
    authorId: caseNote?.authorId ?? 0,
  };
  // const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const form = useForm<insertCaseNoteSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(insertCaseNoteSchema),

    defaultValues,
  });
  const watchSubjectInput = form.watch("subject");

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
          className="flex flex-col sm:flex-row gap-4 md:gap-8"
        >
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <div className="my-2 p-2 space-y-2 border-2 rounded-md  border-slate-500">
              <h3 className="text-lg">Client Info</h3>
              <hr className="w" />
              <p>
                {client.firstName} {client.lastName}
              </p>
              {/* {client.caseManager ? <p>{client.caseManager}</p> : null} */}
              <p>{client.status}</p>
            </div>

            <SelectWithLabel<insertCaseNoteSchemaType>
              fieldTitle="Subject"
              nameInSchema="subject"
              data={caseNoteSubjects}
            />
            {/* <CheckboxWithLabel<insertCaseNoteSchemaType>
                fieldTitle="Other Subject"
                nameInSchema="showOther"
                message="Add other note subject"
              /> */}

            {watchSubjectInput === "Other" && (
              <InputWithLabel<insertCaseNoteSchemaType>
                fieldTitle="Other Subject"
                nameInSchema="other"
              />
            )}

            <TextAreaWithLabel<insertCaseNoteSchemaType>
              fieldTitle="Notes"
              nameInSchema="note"
              className="h-60"
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
