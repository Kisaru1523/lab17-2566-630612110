import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Wisarut Sada",
    studentId: "630612110",
  });
};