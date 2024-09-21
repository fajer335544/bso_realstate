import wbtl from 'jsonwebtoken';

function dbLogin(identifier, password) {
  let username = null;
  let success = true;
  return new Promise(async (resolve, reject) => {
    const res = await fetch("http://127.0.0.1:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        identifier,
        password
      })
    });
    const data = await res.json();
    if (data.error) {
      success = false;
    } else {
      console.log(data.user);
      username = data.user.username;
    }
    resolve({ success, username });
  });
}

async function login({
  identifier,
  password,
  maxAge,
  secret
}) {
  const getLoginData = await dbLogin(identifier, password).then((data) => {
    return data;
  });
  if (getLoginData.success === false) {
    return { success: false, token: null, max: null };
  }
  const expire = Math.floor(Date.now() / 1e3) + maxAge;
  const token = wbtl.sign(
    {
      exp: expire,
      identifier,
      username: getLoginData.username
    },
    secret
  );
  return { success: true, token: `${token}`, max: maxAge };
}

export { login as l };
