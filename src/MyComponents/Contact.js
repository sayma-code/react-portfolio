import React from 'react'

export default function Contact() {
  return (
    <div>
        {/* Contact Section */}
    <section className="contact" id="contact">
        <div className="con">
            <div className="frn">
                <p className="frnl">Let's be friends</p>
                <button className="conta"><a href="https://mail.google.com/mail/u/0/?fs=1&to=saymaobaida2@gmail.com&tf=cm">Contact me</a></button>
            </div>
            
            <div className="ico">
                <label className="red">
                    <i className="fab fa-reddit"></i>
                </label>
                <label className="git">
                    <i className="fab fa-github"></i>
                </label>
                <label className="link">
                    <i className="fab fa-linkedin-in"></i>
                </label>
            </div>
        </div>
        <div className="pad"><p><span className="in">Sayma Obaida</span>-saymaobaida2@gmail.com</p></div>
    </section>
    </div>
  )
}


