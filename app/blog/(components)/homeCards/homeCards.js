import Image from "next/image";

export default function HomeCards(props) {
  return (
    <div className="campus-col">
        <Image src={props.src}
        width={"100"}
        height={"220"}
        />
      {/* <img src="/Campus1.png" alt="" /> */}
      <div className="layer">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}
