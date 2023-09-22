import React from 'react'
import Header from '../(components)/header/header'
import Button from '../(components)/button/button'
import Input from './(components)/input'
import Image from 'next/image'
import Categories from './(components)/categories'
function Page() {
  return (
    <>
    <Header title="Our Post"/>
    <section className="blog-content">
        <div className="row">
        
        <div className="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Aug 1, 2021</h5>
                <Image src={"/post.png"}
                width={"500"}
                height={"470"} />
                {/* <img src="img/post.png" alt=""/> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>

                <div className="comment-box">
                    <h3>Leave a Comment</h3>
                    <form className="comment-form">
                       <Input type="text" name="Enter Name" req={true}/>
                       <Input type="email" name="Enter Email" req={true} />
                       <textarea rows="5" placeholder='Your Comment' ></textarea>
                       <Button title="POST COMMENT"/>
                    </form>
                </div>
            </div>
            <div className="blog-right">
                <h3>Post Categories</h3>
                <Categories title="Business Analytics" num="12"/>
                <Categories title="Machine Learning" num="29"/>
                <Categories title="Computer Science" num="15"/>
                <Categories title="Data Analytics" num="22"/>
                <Categories title="Full Stack" num="20"/>
            </div>

        </div>
    </section>
    </>
  )
}

export default Page
