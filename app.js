import userState from 'react'
import {useform} from 'react-hook-form'
import "./AudioParamMap.css";
function App(){
    const{register,handleSubmit,errors}=useform();
    const[userInfo,setUserInfo]= userState();
    const OnSubmit= (data) => {
        setUserInfo(data);
        console.log(data);

    }
    console.log(errors);
    return(
   
    <section class="container">
      <h1>Let's level up your </h1>
      <h1>brand,together</h1>
      <h6>You can reach us anytime via hi@untitledui.com</h6>
      <pre>JSON.stringify(userInfo,undefined,2)</pre>
      <form OnSubmit={handleSubmit( OnSubmit) }action="https://mint-forms.ieee-mint.org/api/form/addresponse?formId=task" method="post"  class="form">
        <div class="input-box">
          <label>First name</label>
          <input type="text" name="firstname" placeholder="First name" ref={register( required="First name is required")} />
        </div>
        <p>{errors.firstname.message}</p>
        <div class="input-box">
            <label>Last name</label>
            <input type="text" name="lastname" placeholder="Last name" ref={register( required="Last name is required")}  />
          </div>
          <p>{errors.lastname.message}</p>
        <div class="input-box">
          <label>Email </label>
          <input type="email" name="email" placeholder="you@company.com" ref={register( {
            required:"Email is required",
            pattern:{
                value: /\S+@\S+\.\S+/, 
                message :"This is invalid mail ",
             },
            })}   />
        </div>
        <p>{errors.email.message}</p>
        
          <div class="input-box">
            <label>Phone Number</label>
            <input type="tel" name="phonenumber" pattern="[0-9]{10}"  placeholder= "+1(555)000-0000"  ref={register( {
                required:"Phone Number is required",
                pattern:{
                    value: /^[0-9\b]+$/, 
                    length:{value:10,
                    message :"This is invalid phone number ",
                    },
                    message :"This is invalid phone number ",
                 },
                })}  />    
            </div>
            <p>{errors.phonenumber.message}</p>
          <div class="input-box">
            <label>Message</label>
            <input type="text" name="message" ref={register( required="Message is required")}  />
          </div>
          
        
                <div class="checkbox">
                    <input type="checkbox" id="policy-checkbox" name="policy-checkbox" unchecked />
                    <label for="policy-checkbox">You agree to our friendly privacy policy </label>
            </div>
        
        
           
         
        <button>Send message</button>
      </form>
    </section>
    )
}