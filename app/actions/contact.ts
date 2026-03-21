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
      console.error("❌ DISCORD_WEBHOOK_URL is missing in environment variables!");
      // This is for debugging in Production. If this error appears on screen, it means 
      // the user MUST add the variable in the dashboard.
      return { 
        success: false, 
        error: "خطأ في الإعدادات: رابط Webhook غير موجود في السيرفر" 
      };
    }

    const response = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `🚀 **New Message from Contact Form**:\n\n**Message:**\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Discord response error:", errorText);
      throw new Error(`مشكلة في إرسال الرسالة إلى ديسكورد (Status: ${response.status})`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending contact message:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "حدث خطأ غير متوقع" 
    };
  }
}
