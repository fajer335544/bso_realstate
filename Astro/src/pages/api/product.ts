import type { APIRoute } from "astro";

 

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const price = formData.get("price");
  const image = formData.get("image");

  // الحصول على التوكن من الـ cookies
  const token = cookies.get(import.meta.env.COOKIE_NAME || "_Security_Login_")?.value;
   
  console.log("token : + : ")
  console.log(token)
  const body = new FormData();
  body.append("data", JSON.stringify({ title, price }));
  body.append("files.image", image);

  try {
    const res = await fetch("http://127.0.0.1:1337/api/products", {
      method: "POST",
      headers: {
        
        'Authorization': `Bearer ${token}` 
      },
      body:body,
    });

    const data = await res.json();
    console.log("Producccccccccts   ------ :")
     console.log(data)
    if (data.error) {
      return new Response(null, { status: 302, headers: { Location: "/product" } });
    }

    return new Response(JSON.stringify(data), { status: 400 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create post" }), {
      status: 500,
    });
  }
};
