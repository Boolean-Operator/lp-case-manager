import { BackButton } from "@/components/backButton";
import { getClient } from "@/lib/queries/getClient";
import { getCaseNote } from "@/lib/queries/getCaseNote";
import * as Sentry from "@sentry/nextjs";

export default async function CaseNotFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { clientId, caseNoteId } = await searchParams;

    if (!clientId && !caseNoteId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Client ID or Case Note ID required to load case note form
          </h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    if (clientId) {
      const client = await getClient(parseInt(clientId));

      if (!client) {
        return (
          <>
            <h2 className="text-2xl mb-2">Client ID #{clientId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      if (!client.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Client ID #{clientId} is note active.
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      console.log(client);
      // Return Case Note Form Component
    }
    if (caseNoteId) {
      const case_note = await getCaseNote(parseInt(caseNoteId));
      if (!case_note) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Case Note ID #{caseNoteId} not found
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }

      const client = await getClient(case_note.clientId);

      // Return Case Note Form Component
      console.log("Case Note: ", case_note);
      console.log("Client: ", client);
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}
