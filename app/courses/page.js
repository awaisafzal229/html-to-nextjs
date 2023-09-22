import Header from "../(components)/header/header";
import Notes from "./(components)/notes/notes";
import Cards from "./(components)/cards/cards";

function Courses() {
  return (
    <>
      <Header title="Our Courses" />
      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Notes
            title="Undergraduate Programs"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                    soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                    laborum velit non."
          />
          <Notes
            title="Graduate Programs"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non."
          />
          <Notes
            title="Adult Learning & Degree Completion"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non."
          />
        </div>
      </section>
      {/* Best courses section */}
      <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <Cards
            src="/course1.png"
            title="Web Development"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
          <Cards
            src="/course2.png"
            title="Artificial Intelligence"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
          <Cards
            src="/course3.png"
            title="Data Science"
            para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam."
          />
        </div>
      </section>
    </>
  );
}

export default Courses;
