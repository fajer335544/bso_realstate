import { l as login } from '../../chunks/login_DTBpw3Be.mjs';
export { renderers } from '../../renderers.mjs';

const cookieName = "_Security_Login_";
let maxAge = 604800;
const POST = async ({ cookies, redirect, request }) => {
  const data = Object.fromEntries(new URLSearchParams(await request.text()));
  const d = await login({
    identifier: data.identifier,
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
  return redirect("/login?error=true");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
