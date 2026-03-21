"use server";

import prisma from "@/app/lib/prisma";

export async function sendContactMessage(formData: FormData) {
  const message = formData.get("message") as string;

  if (!message) {
    return { success: false, error: "الرسالة مطلوبة" };
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
    
    if (!discordWebhookUrl) {
      console.warn("⚠️ DISCORD_WEBHOOK_URL is not defined in environment variables.");
      // Even if discord is missing, we consider it partial success since it's in DB
      // but let's notify the logs.
    } else {
      const response = await fetch(discordWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `🚀 **New Message from Contact Form**:\n${message}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Discord API responded with status ${response.status}`);
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending contact message:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "حدث خطأ أثناء إرسال الرسالة" 
    };
  }
}
