"use server";
import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addCityAction(name: string) {
  if (!name || name.trim() === "") {
    return { success: false, error: "City name is required" };
  }

  try {
    if (!prisma) {
        return { success: false, error: "Database connection failed." };
    }

    const today = new Date().toISOString().split('T')[0];

    const exists = await prisma.cityProgress.findFirst({
        where: {
            city: name.trim(),
            date: today
        }
    });

    if (exists) {
        return { success: false, error: `City '${name}' is already in today's scraping queue.` };
    }

    const newCity = await prisma.cityProgress.create({
      data: {
        city: name.trim(),
        date: today,
        status: "pending",
        pages: 0
      }
    });

    revalidatePath("/priority");
    return { success: true, city: newCity };
  } catch (error: any) {
    console.error("Database Error:", error);
    return { success: false, error: "Database error: " + error.message };
  }
}

export async function fetchCitiesAction() {
    try {
        if (!prisma) return [];
        return await prisma.cityProgress.findMany({
            orderBy: [{ priority: "asc" }, { id: "desc" }],
        });
    } catch (err) {
        console.error("Failed to fetch cities from DB:", err);
        return [];
    }
}

export async function saveCitiesOrderAction(orderedIds: string[]) {
    try {
        if (!prisma) return { success: false, error: "Database not connected" };

        const updatedCities = await prisma.$transaction(async (tx) => {
            for (let i = 0; i < orderedIds.length; i++) {
                const idNum = parseInt(orderedIds[i]);
                if (isNaN(idNum)) {
                    console.error(`Invalid city ID: ${orderedIds[i]}`);
                    continue;
                }
                await tx.cityProgress.update({
                    where: { id: idNum },
                    data: { priority: i + 1 }
                });
            }

            // Fetch cities in new order inside the same transaction
            return await tx.cityProgress.findMany({
                where: {
                    id: { in: orderedIds.map(id => parseInt(id)).filter(id => !isNaN(id)) }
                },
                orderBy: { priority: "asc" }
            });
        }, {
            maxWait: 15000,
            timeout: 45000,
        });

        const citiesList = updatedCities.map((c, i) => `${i + 1}. ${c.city}`).join("\n");

        // Send Email notification
        const resendApiKey = process.env.RESEND_API_KEY;
        const targetEmail = "mohamedibrahemhabib@gmail.com";

        if (resendApiKey && resendApiKey.startsWith("re_") && resendApiKey.length > 10) {
            try {
                const emailResponse = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${resendApiKey.trim()}`,
                    },
                    body: JSON.stringify({
                        from: 'Puppies <onboarding@resend.dev>',
                        to: [targetEmail],
                        subject: 'New Priority Queue Order Submitted 🚀',
                        text: `The city scraping priority has been updated. New order:\n\n${citiesList}`,
                        html: `
                            <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
                                <h2 style="color: #2563eb;">New Priority Queue Order</h2>
                                <p>The city scraping priority has been updated. Here is the new order:</p>
                                <ol style="background: #f4f4f5; padding: 20px 40px; border-radius: 8px;">
                                    ${updatedCities.map(c => `<li style="margin-bottom: 8px; font-weight: 500;">${c.city}</li>`).join("")}
                                </ol>
                                <p style="font-size: 0.9rem; color: #666; margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
                                    This update was triggered from the Puppies Dashboard.
                                </p>
                            </div>
                        `
                    }),
                });

                if (!emailResponse.ok) {
                    const errorText = await emailResponse.text();
                    console.error("Resend API Full Error:", errorText);
                } else {
                    console.log("✅ Email notification sent successfully to", targetEmail);
                }
            } catch (emailError) {
                console.error("❌ Failed to send email notification:", emailError);
            }
        } else {
            console.warn("⚠️ RESEND_API_KEY is missing or invalid in .env, skipping email.");
        }

        revalidatePath("/priority");
        return { success: true };
    } catch (err: any) {
        console.error("❌ Order save failed:", err);
        return { success: false, error: "Failed to save order: " + err.message };
    }
}

export async function deleteCityAction(id: string) {
    try {
        if (!prisma) return { success: false, error: "Database not connected" };

        await prisma.cityProgress.delete({
            where: { id: parseInt(id) }
        });

        revalidatePath("/priority");
        return { success: true };
    } catch (err: any) {
        console.error("Delete failed", err);
        return { success: false, error: "Failed to delete city: " + err.message };
    }
}
