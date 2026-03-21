"use server";

import prisma from "@/app/lib/prisma";

export async function sendContactMessage(formData: FormData) {
  const message = formData.get("message") as string;

  if (!message) {
    return { success: false, error: "Message is required" };
  }

  try {
    // 1. Save to Neon DB
    await prisma.contactMessage.create({
      data: {
        message: message,
      },
    });

    // 2. Send to Discord
    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (discordWebhookUrl) {
      await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `New message: ${message}`,
        }),
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending contact message:", error);
    return { success: false, error: "Error sending message" };
  }
}
