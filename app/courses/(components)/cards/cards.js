import Image from "next/image"

export default function Cards(props) {
  return (
    <div class="facilities-col">
                <Image src={props.src} alt="" width={"323"} height={"232"}/>
                <h3>{props.title}</h3>
                <p>{props.para}
                </p>
            </div>
  )
}
