import React from "react";
import FacebookLogin from "react-facebook-login";
import axios from "axios";

export default function LoginFacebook() {
 const responseFacebook = (response) => {
   console.log(response);
   
        const res = async () => {
          const res2 = await axios.post( "http://localhost:3000/facebook/auth/facebook",{
            access_token: response.accessToken
          })
          
          return res2
       }
      
       console.log(res());
      }
  React.useEffect(() => {
   
   
  }, [])

  /// lưu session 
  return (
    <div>
      <FacebookLogin
        appId="152726539648546"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={componentClicked}
        callback={responseFacebook}
      />
      {/* <a href="http://localhost:3000/auth/facebook/callback">login with face book</a> */}
    </div>
  );
}
