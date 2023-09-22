import Image from "next/image"

export default function Facilities(props) {
  return (
    <div className="facilities-col">
                <Image alt="" src={props.src}
                width={"200"}
                height={"220"}
                />
                {/* <img src="img/libary.png" alt=""/> */}
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
  )
}
