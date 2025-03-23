import { headers } from "next/headers";

export async function getIp() {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const realIp = headerList.get("x-real-ip") ?? "";

  if (forwardedFor) {
    const bits = forwardedFor?.split(",");
    if (bits?.length > 0 && bits?.[0]) {
      return bits?.[0]?.trim();
    }
  }

  if (realIp.length > 0) {
    return realIp.trim();
  }

  return "0.0.0.0";
}
