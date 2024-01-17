"use server";
import { z } from "zod";

const createTopicSchema = z.object({
  topicName: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: "Must be lowercase letters or dashes without spaces" }),
  description: z.string().min(10),
});

type FormState = {
  success: boolean;
  errors: {
    topicName?: string[];
    description?: string[];
  };
};

export async function createTopic(formState: FormState, formData: FormData): Promise<FormState> {
  const { topicName, description } = Object.fromEntries(formData.entries());

  const result = createTopicSchema.safeParse({ topicName, description });

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // TODO:  revalidate home page

  return { success: true, errors: {} };
}
