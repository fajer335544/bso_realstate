import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, d as createAstro, f as addAttribute } from '../chunks/astro/server_DUVlr-pW.mjs';
import 'kleur/colors';
import { h as hasProfile, $ as $$Layout } from '../chunks/profile_BQMeMJby.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$RegisterForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/register" accept-charset="UTF-8" method="POST"> <div> <label for="username">Username:</label> <br> <input type="text" name="username" required> </div> <div> <label for="email">Email:</label> <br> <input type="email" name="email" required> </div> <div> <label for="password">Password:</label> <br> <input type="password" name="password" required> </div> <br> <button type="submit">Register</button> </form>`;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/components/RegisterForm.astro", void 0);

const $$Astro = createAstro();
const $$Register = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const cookie = `${Astro2.cookies.get("_Security_Login_")?.value}`;
  const d = hasProfile(cookie, "secret");
  if (d.success === true) {
    return Astro2.redirect("/");
  }
  const error = new URL(Astro2.request.url).searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`container ${error === "true" ? "error-active" : ""}`, "class")}> ${error === "true" && renderTemplate`<div class="error-message"> <p>Error: Could not register. Please try again.</p> </div>`} <div class="login"> <h1>Register</h1> ${renderComponent($$result2, "RegisterForm", $$RegisterForm, {})} <div class="quote"></div> </div> </div> ` })}`;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/pages/register.astro", void 0);
const $$file = "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
