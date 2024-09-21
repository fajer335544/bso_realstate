import type { APIRoute } from "astro";
import loginSave from "../../utils/login";

const cookieName = import.meta.env.COOKIE_NAME || "_Security_Login_";
let maxAge = 604800;

export const POST: APIRoute = async ({ cookies, redirect, request }) => {
  // استلام البيانات من النموذج
  const data = Object.fromEntries(new URLSearchParams(await request.text()));
  console.log("Register data", data);

  // إرسال البيانات إلى Strapi API
  const res = await fetch("http://127.0.0.1:1337/api/auth/local/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password,
    }),
  });

  const result = await res.json();

  if (res.ok) {
    // حفظ التوكن بعد التسجيل
    const d = await loginSave({
      identifier: data.email,
      password: data.password,
      maxAge: Number(import.meta.env.MAX_AGE || 604800),
      secret: import.meta.env.COOKIE_SECRET || "secret",
    });

    let token = "none";
    if (d.success === true) {
      token = d?.token || "none";
      maxAge = d?.max || 604800;
      cookies.set(cookieName, token, {
        path: "/",
        maxAge: maxAge,
        secure: Boolean(import.meta.env.COOKIE_SECURE || false),
      });
      return redirect("/");
    }
  }

  // إذا فشل التسجيل، إعادة توجيه مع رسالة خطأ
  return redirect("/register?error=true");
};
