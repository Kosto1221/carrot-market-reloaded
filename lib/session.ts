import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

const cookieStore = await cookies();

export default function getSession() {
  return getIronSession<SessionContent>(cookieStore, {
    cookieName: "delicious-karrot",
    password: process.env.COOKIE_PASSWORD!,
  });
}
