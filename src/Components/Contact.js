import React from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import swal from 'sweetalert';
const Contact = (props) => {
    const sentEmail = async (e)=>{
        e.preventDefault();
        
        try{
            const res = await emailjs.sendForm("service_kr8s19z","template_2eyfvc7",e.target,"user_gj7aUi8lhSAkdH29yNj2Q");
            console.log(res);
            swal("Thank you!", "Your message was sent and you get a mail from me shortly", "success");  
            document.getElementById("myForm").reset();
        }catch(e){
            console.log(e);
            swal("OOPS!", "There was a Error!", "warning");
        }

    }
  return <section class={`contact ${props.mode?'':'temp'}`} id="contact">
  <div class="max-width">
      <h2 class="title">Contact me</h2>
      <div class="contact-content">
          <div class="column left">
              <div class="text">Get in Touch</div>
              <p>Connect with me for projects,discussion,programming. I am beginner in this field so come and join with me.</p>
              <div class="icons">
                  <div class="row">
                      <i class="fas fa-user"></i>
                      <div class="info">
                          <div class="head">Name</div>
                          <div class="sub-title">Anirban Dash</div>
                      </div>
                  </div>
                  <div class="row">
                      <i class="fas fa-map-marker-alt"></i>
                      <div class="info">
                          <div class="head">Address</div>
                          <div class="sub-title">Jhargram,West Bengal,India</div>
                      </div>
                  </div>
                  <div class="row">
                      <i class="fas fa-envelope"></i>
                      <div class="info">
                          <div class="head">Email</div>
                          <div class="sub-title">dashanirban275@gmail.com</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="column right">
              <div class="text">Message me</div>
              <form onSubmit={sentEmail} id='myForm'>
                  <div class="fields">
                      <div class="field name">
                          <input type="text" name='name' placeholder="Name" required/>
                      </div>
                      <div class="field email">
                          <input type="email" name='email' placeholder="Email" required/>
                      </div>
                  </div>
                  <div class="field">
                      <input type="text" name='subject' placeholder="Subject" required/>
                  </div>
                  <div class="field textarea">
                      <textarea cols="30" rows="10" name='message' placeholder="Message.." required></textarea>
                  </div>
                  <div class="button-area">
                      <button type="submit">Send message</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>;
};

export default Contact;
