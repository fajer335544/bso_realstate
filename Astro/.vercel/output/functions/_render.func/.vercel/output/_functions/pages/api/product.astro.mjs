import 'jsonwebtoken';
export { renderers } from '../../renderers.mjs';

const POST = async ({ cookies, redirect, request }) => {
  const data = Object.fromEntries(new URLSearchParams(await request.text()));
  console.log("Register data", data);
  const res = await fetch("http://127.0.0.1:1337/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // 'Authorization': `Bearer ${token}`, // إرسال التوكن
    },
    body: JSON.stringify({
      data: {
        title: data.title,
        price: data.price,
        image: data.image
      }
    })
  });
  await res.json();
  return redirect("/");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
