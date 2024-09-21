import { c as createComponent, r as renderTemplate, a as renderHead, b as renderSlot, d as createAstro } from './astro/server_DUVlr-pW.mjs';
import 'kleur/colors';
import 'clsx';
import wbtl from 'jsonwebtoken';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { page } = Astro2.props;
  return renderTemplate`<html> <head><meta charset="UTF-8"><meta http-equiv="Content-Encoding" content="gzip"><title translate="no">${page}</title><link rel="stylesheet" href="/css/style.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta property="og:title" content="Main"><meta property="og:image:width" content="200"><meta property="og:image:height" content="200"><meta property="og:type" content="website"><meta property="og:color" content="#1c041b"><link rel="icon" href="/img/favicon.ico"><link rel="apple-touch-icon" href="/img/favicon.ico"><link rel="apple-touch-icon-precomposed" href="/img/favicon.ico"><link rel="shortcut icon" href="/img/favicon.ico">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Fajer/OneDrive/Desktop/test/Astro-Login-master/src/layouts/Layout.astro", void 0);

function hasProfile(myToken, secret) {
  let identifier = null;
  let username = null;
  let success = true;
  switch (myToken) {
    case "undefined":
      success = false;
      return { success, identifier, username };
    case void 0:
      success = false;
      return { success, identifier, username };
    case "null":
      success = false;
      return { success, identifier, username };
    case null:
      success = false;
      return { success, identifier, username };
    default: {
      const data = wbtl.verify(myToken, secret);
      if (data.identifier && data.username) {
        identifier = data.identifier;
        username = data.username;
      } else {
        success = false;
      }
      return { success, identifier, username };
    }
  }
}

export { $$Layout as $, hasProfile as h };
