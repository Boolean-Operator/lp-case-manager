import { BackButton } from "@/components/backButton";
import { getClient } from "@/lib/queries/getClient";
import * as Sentry from "@sentry/nextjs";

export default async function ClientFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { clientId } = await searchParams;

    // Edit client form
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
      console.log(client);

      // Edit Form Component
    } else {
      // New Form Component
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}
