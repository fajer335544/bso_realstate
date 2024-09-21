import { l as login } from '../../chunks/login_DTBpw3Be.mjs';
export { renderers } from '../../renderers.mjs';

const cookieName = "_Security_Login_";
let maxAge = 604800;
const POST = async ({ cookies, redirect, request }) => {
  const data = Object.fromEntries(new URLSearchParams(await request.text()));
  console.log("Register data", data);
  const res = await fetch("http://127.0.0.1:1337/api/auth/local/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: data.username,
      email: data.email,
      password: data.password
    })
  });
  await res.json();
  if (res.ok) {
    const d = await login({
      identifier: data.email,
      password: data.password,
      maxAge: Number(604800),
      secret: "secret"
    });
    let token = "none";
    if (d.success === true) {
      token = d?.token || "none";
      maxAge = d?.max || 604800;
      cookies.set(cookieName, token, {
        path: "/",
        maxAge,
        secure: Boolean(false)
      });
      return redirect("/");
    }
  }
  return redirect("/register?error=true");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
