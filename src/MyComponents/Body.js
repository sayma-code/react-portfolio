import React from 'react'

export default function Body() {
  return (
    <div>
        {/* Home Section */}
    <section class="home">
            <div class="intro">
                <div class="text-1" dat-hover="It has been a pleasure connecting">Hello, I am Sayma</div>
                <div class="text-2" data-hover="a programmer">a Software developer</div>
                <img class="log" src="image/logo.png" alt="My Cartoon Face"/>
                <div class="cafe"></div>
                <div class="car"></div>
            </div>
    </section>
    {/* About Section */}
    <section class="about">
            <div class="talk">
                <div class="Atext-1">Hello, I am Sayma Obaida. Nice to meet you.</div>
                <div class="Atext-2"> I build what interest me. I just started my journey after completing my graduation.
                    Looking forward to tell a lots of stories in future.</div>
              </div>
    </section>
    </div>
  )
}

