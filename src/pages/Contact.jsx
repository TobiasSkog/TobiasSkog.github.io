import '../pages/css/contact.css';
export default function Contact() {
  return (
    <main>
      <div className="side-border"></div>
      <div className="divider">
        <section className="content-container">
          <article className="container">
            <h1 className="contact-header">Contact Me</h1>

            <form action="#" method="post" id="contact-form">

              <div className="name">
                <label for="name"></label>
                <input type="text" placeholder="My name is" name="name" id="name_input" required />
              </div>

              <div className="email">
                <label for="email"></label>
                <input type="email" placeholder="My e-mail is" name="email" id="email_input" required />
              </div>

              <div className="phone">
                <label for="phone"></label>
                <input type="text" placeholder="My phone number is" name="phone" id="phone_input" required />
              </div>

              <div className="subject">
                <label for="subject"></label>
                <select name="subject" id="subject_input" placeholder="Subject" required>
                  <option disabled hidden selected>Subject</option>
                  <option>I'd like to get into contact</option>
                  <option>I'd like to make a project proposal</option>
                  <option>I'd like to hire you for a project</option>
                  <option>I would like to contact you about something else</option>
                </select>
              </div>

              <div className="message">
                <label for="message"></label>
                <textarea name="message" placeholder="I would like to talk about" id="message_input" cols="30" rows="5" required />
              </div>

              <div className="submit">
                <input type="submit" id="form_button" value="Contact Me" />
              </div>

            </form>
          </article>
        </section>
      </div>
      <div className="side-border"></div>
    </main>
  );
}