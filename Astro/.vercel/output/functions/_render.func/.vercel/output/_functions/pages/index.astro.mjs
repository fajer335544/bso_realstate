import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, d as createAstro, F as Fragment, f as addAttribute } from '../chunks/astro/server_DUVlr-pW.mjs';
import 'kleur/colors';
import { h as hasProfile, $ as $$Layout } from '../chunks/profile_BQMeMJby.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$LogoutButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/logout" accept-charset="UTF-8" method="GET"> <button type="submit">Logout</button> </form>`;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/components/LogoutButton.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const cookie = `${Astro2.cookies.get("_Security_Login_")?.value}`;
  const d = hasProfile(cookie, "secret");
  console.log("data on the index");
  console.log(d);
  const response = await fetch("http://127.0.0.1:1337/api/products");
  const result = await response.json();
  const posts = result.data;
  console.log(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="index"> <center class="login"> ${d.success === true ? renderTemplate`<h1>Welcome, ${d.username} <a href="/create-post" class="create-post-link">Create New Post</a> </h1>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h1>Welcome, Guest</h1> <p>Please <a href="/login">Login</a> or <a href="/register">Register</a>.</p> ` })}`} <br> <h2>Posts from Strapi</h2> <ul> ${posts ? posts.map((post) => renderTemplate`<li${addAttribute(post.id, "key")}> <h2>${post.attributes.title}</h2> <p>${post.attributes.price}</p> <small>Published at: ${new Date(post.attributes.publishedAt).toLocaleDateString()}</small> </li>`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {})}`} </ul> ${d.success === true ? renderTemplate`${renderComponent($$result2, "Button", $$LogoutButton, {})}` : renderTemplate`<h1></h1>`} </center> <div class="quote"> <center> <span>by Fajer, ,
</span> </center> </div> </div> </div> ` })}`;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/pages/index.astro", void 0);
const $$file = "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
