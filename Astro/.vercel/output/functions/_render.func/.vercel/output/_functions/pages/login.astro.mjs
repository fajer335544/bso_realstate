import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, d as createAstro, f as addAttribute } from '../chunks/astro/server_DUVlr-pW.mjs';
import 'kleur/colors';
import { h as hasProfile, $ as $$Layout } from '../chunks/profile_BQMeMJby.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/login" accept-charset="UTF-8" method="POST"> <div> <label for="email">Email:</label> <br> <input type="email" name="identifier" required> </div> <div> <label for="password">Password:</label> <br> <input type="password" name="password" required> </div> <br> <button type="submit">Submit</button> </form>`;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/components/LoginForm.astro", void 0);

const $$Astro = createAstro();
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const cookie = `${Astro2.cookies.get("_Security_Login_")?.value}`;
  const d = hasProfile(cookie, "secret");
  console.log("d in login");
  console.log(d);
  if (d.success === true) {
    return Astro2.redirect("/");
  }
  const error = new URL(Astro2.request.url).searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "page": "Login" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`container ${error === "true" ? "error-active" : ""}`, "class")}> ${error === "true" && renderTemplate`<div class="error-message"> <p>Error: Could not login. Please verify your credentials.</p> </div>`} <div class="login"> <h1>Login</h1> ${renderComponent($$result2, "LoginForm", $$LoginForm, {})} <div class="quote"> <center> <span>Email: user@example.com</span> <span>Password: 1234</span> <span>
by <a href="https://zastinian.com">Zastinian</a>, <a href="https://github.com/Zastinian/Astro-Login">Github Code</a>,${" "} <a href="https://twitter.com/Zastinian">Twitter</a>.
</span> </center> </div> </div> </div> ` })}`;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/pages/login.astro", void 0);
const $$file = "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
