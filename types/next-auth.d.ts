// types/next-auth.d.ts

import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email?: string;
      groupid: number;
    };
  }

  interface User {
    id: string;
    name: string;
    email?: string;
    groupid: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email?: string;
    groupid: number;
  }
}
