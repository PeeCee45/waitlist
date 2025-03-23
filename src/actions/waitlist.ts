"use server";

import { env } from "@/env";
import { getIp } from "./getIp";

export async function addToWaitingList(props: { [key: string]: string }) {
  const ip = await getIp();

  const subscriberData = {
    email: props.email,
    first_name: "",
    last_name: "",
    segment_ids: [env.NEWSLETTER_SEGMENT], // add waitlist segment
    double_optin: false,
    optin_ip: ip,
    optin_timestamp: new Date().toISOString(),
  };

  try {
    // First API request
    const response = await fetch("https://api.flodesk.com/v1/subscribers", {
      method: "POST",
      headers: {
        "User-Agent": "Trendibble (trendibble.com)",
        Authorization: env.FLODESK_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriberData),
    });

    // Parse the response
    let data;
    if (response.ok) {
      data = await response.json();
    } else {
      console.error(
        "Error adding your mail to the waitlist",
        response.status,
        response.statusText
      );
      return false;
    }

    return response.ok;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
