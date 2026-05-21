import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage, MdCall, MdEmail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
    const[name,setName] = useState("Anshu");
    const[email,setEmail] = useState("Hello@world.com");
    const[text,setText] = useState("hello world");

    const onSubmit = (event) => {
        event.preventDefault();
        setName (event.target[0].value);
        setEmail (event.target[1].value);
        setText (event.target[2].value);

        console.log({
            name,
            email,
            text
        });    
    };

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>


                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
                    <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px" />} />
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" />
                    </div>
                                        <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8" />
                    </div>
                        <div 
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            
                        }}
                            >
                            <Button text="SUBMIT" />
                        </div>
                         <div>
                            {name + " " + email + " " + text}
                         </div>
                </form>
            </div>
            <div className={styles.contact_images}>
                 <img src="/images/contact.svg" alt="contact image" />
            </div>
        </section>
    )
}

export default ContactForm