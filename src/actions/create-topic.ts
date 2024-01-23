"use server";
import { z } from "zod";
import { type Topic } from "@prisma/client";
import { auth } from "@/auth";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import paths from "@/utils/paths";

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

  //add topic to database
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.topicName.toLowerCase(),
        description: result.data.description.toLowerCase(),
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: { generalErr: [error.message] } };
    }
    return { errors: { generalErr: ["Something went wrong. Please try again later."] } };
  }

  revalidatePath(paths.home());
  redirect(paths.showTopic(topic.slug));
}
