import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, d as createAstro, f as addAttribute } from '../chunks/astro/server_DUVlr-pW.mjs';
import 'kleur/colors';
import { h as hasProfile, $ as $$Layout } from '../chunks/profile_BQMeMJby.mjs';
import 'clsx';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$CreateProductForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/product" enctype="multipart/form-data" method="POST" data-astro-cid-qcngcfbl> <div data-astro-cid-qcngcfbl> <label for="title" data-astro-cid-qcngcfbl>Title:</label> <br data-astro-cid-qcngcfbl> <input type="text" name="title" required data-astro-cid-qcngcfbl> </div> <div data-astro-cid-qcngcfbl> <label for="price" data-astro-cid-qcngcfbl>Price:</label> <br data-astro-cid-qcngcfbl> <input type="number" name="price" step="0.01" required data-astro-cid-qcngcfbl> </div> <div data-astro-cid-qcngcfbl> <label for="image" data-astro-cid-qcngcfbl>Image:</label> <br data-astro-cid-qcngcfbl> <input type="file" name="image" accept="image/*" required data-astro-cid-qcngcfbl> </div> <br data-astro-cid-qcngcfbl> <button type="submit" data-astro-cid-qcngcfbl>Submit</button> </form> `;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/components/CreateProductForm.astro", void 0);

const $$Astro = createAstro();
const $$CreatePost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CreatePost;
  const token = `${Astro2.cookies.get("_Security_Login_")?.value}`;
  const d = hasProfile(token, "secret");
  if (d.success === false) {
    return Astro2.redirect("/login");
  }
  const error = new URL(Astro2.request.url).searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Create Post" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`container ${error === "true" ? "error-active" : ""}`, "class")}> ${error === "true" && renderTemplate`<div class="error-message"> <p>Error: Could not create post. Please try again.</p> </div>`} <div class="create-post"> <h1>Create New Post</h1> ${renderComponent($$result2, "CreatePostForm", $$CreateProductForm, {})} </div> </div> ` })}`;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/pages/create-post.astro", void 0);
const $$file = "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/pages/create-post.astro";
const $$url = "/create-post";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CreatePost,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
