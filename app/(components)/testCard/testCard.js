import Image from "next/image"

export default function TestCard(props) {
  return (
    <div className="testimonials-col">
                <Image alt="" src={props.src}
                width={"200"}
                height={"100"}
                />
                {/* <img src="/user.png" alt="oo.."/> */}
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
                        praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
                        deserunt. In quia repellat maxime.</p>
                    <h3>Student Name</h3>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
            </div>
  )
}
