"use server";
import { z } from "zod";
import { auth } from "@/auth";

const createTopicSchema = z.object({
  topicName: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: "Must be lowercase letters or dashes without spaces" }),
  description: z.string().min(10),
});

type FormState = {
  errors: {
    topicName?: string[];
    description?: string[];
    generalErr?: string[];
  };
};

export async function createTopic(formState: FormState, formData: FormData): Promise<FormState> {
  const { topicName, description } = Object.fromEntries(formData.entries());

  const result = createTopicSchema.safeParse({ topicName, description });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  //check if user is logged in
  const session = await auth();

  if (!session || !session?.user) {
    return { errors: { generalErr: ["Login or Sign Up to create a topic."] } };
  }

  return { errors: {} };
}
