interface dbLoginType {
  success: boolean;
  username: string | null;
  id: number | null;  //add id to return it in the response
}

export function dbLogin(identifier: string, password: string,id:number): Promise<dbLoginType> {
  let username: string | null = null;
  
  let success = true;

  return new Promise(async(resolve, reject) => {
    const res = await fetch('http://127.0.0.1:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();
 
    //there are a failed to Authenticate
    if (data.error) {
    
      success = false;
    } else {
      // the authentication succeeded 
      console.log(data.user)
      username = data.user.username;
      id=data.user.id;
    }
    resolve({ success, username,id });
  });
}
