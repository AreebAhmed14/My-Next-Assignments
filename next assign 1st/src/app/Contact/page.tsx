export default function About(){
    return(
        <>
       <div className="form-container">
    <center>
      <div className="contactcenter"><h1 className="contactheading">CONTACT <span className="oneword">US</span></h1></div>
    </center>
    <form>
      {/* <input type="hidden" value="d15ab1bb-f9db-44f8-8e85-a1ac92adbbfe" name="access_key"> */}
      <label htmlFor="name">Name:</label><br />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name.."
      /> <br />
      <label htmlFor="email">Email:</label><br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email.."
      /> <br />
      <label htmlFor="message">Message:</label><br />
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Write something.."
        defaultValue={""}
      /> <br />
      <div className="contactcenter"><input type="submit" /></div>
    </form>
    <div id="form-message" className="form-message" />
  </div>

        </>
    )
}