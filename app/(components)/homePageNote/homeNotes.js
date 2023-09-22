export default function HomeNotes(props) {
  return (
    <div className="course-col">
      <h3>{props.title}</h3>
      <p>
        {props.para}
      </p>
    </div>
  );
}
