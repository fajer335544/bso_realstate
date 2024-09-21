export { renderers } from '../../renderers.mjs';

const cookieName = "_Security_Login_";
const GET = async ({ cookies, redirect }) => {
  const cook = `${cookies.get(cookieName)?.value}`;
  cookies.set(cookieName, cook, {
    path: "/",
    maxAge: 0,
    secure: Boolean(false)
  });
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
