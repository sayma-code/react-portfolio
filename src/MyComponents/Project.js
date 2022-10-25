import React from 'react'

export default function Project() {
  return (
    <div>
        <section class="works" id="works">
        <div class="project">Projects</div>
        <div class="size">
        <div class="carousel owl-carousel">
            <div class="items">
                <a href="https://github.com/sayma-code/Cleaning-Robot"><img class="w1" src="image/work3.jpeg" alt="Website image"/></a>
                <p>Cleaning robot</p>
            </div>
            <div class="items">
                <a href="https://github.com/sayma-code/Todo"><img class="w1" src="image/work4.png" alt="Website image"/></a>
                <p>Todo software(Springboot based)</p>
            </div>
            <div class="items">
                <img class="w1" src="image/work1.jpeg" alt="Website image"/>
                <p>Crimes database(php based)</p>
            </div>
            <div class="items">
                <img class="w1" src="image/work2.jpeg" alt="Website image"/>
                <p>Plant Doctor website(django based)</p>
            </div>
        </div>
        </div>     
    </section>
    </div>
  )
}
