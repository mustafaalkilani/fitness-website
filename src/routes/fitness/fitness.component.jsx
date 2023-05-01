import React, { useContext, useEffect } from "react";
import { SignInContext } from "../../context/signin.context";
import { useNavigate } from "react-router-dom";
import { uploadFormExToFirestore } from "../../utils/firestore.utils";
import "./fitness.styles.scss";

const FitnessDashboard = () => {
  const { isSignedIn } = useContext(SignInContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { weight, day } = event.target.elements;

    const getEx = (num) => {
      return {
        title: event.target.elements[`ex${num}Title`].value,
        sets: event.target.elements[`ex${num}Sets`].value,
        reps: event.target.elements[`ex${num}Reps`].value,
        rest: event.target.elements[`ex${num}Rest`].value,
        image: event.target.elements[`ex${num}Image`].files[0],
      }
    }
    const exOne = getEx('One');
    const exTwo = getEx('Two');
    const exThree = getEx('Three');
    let exFour = '';
    let exFive = '';
    let exSix = '';
    let exSeven = '';
    if (!event.target.elements.exFourTitle.value) {
      console.log('done')
      exFour = getEx('Four');
    }
    if (!event.target.elements.exFiveTitle.value) {
      console.log('don 2')
      exFive = getEx('Five');
    }
    if (!event.target.elements.exSixTitle.value) {
      console.log('done 3')
      exSix = getEx('Six');
    }
    if (!event.target.elements.exSevenTitle.value) {
      console.log('done 5')
      exSeven = getEx('Seven');
    }
    console.log(exOne)
    await uploadFormExToFirestore(weight.value, [
      { weekName: day.value, exOne, exTwo, exThree, exFour, exFive, exSix, exSeven },
    ]);

    event.target.reset();
  };

  const imageLocation =
    "https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/app.jpg?alt=media&token=59e438a3-d99a-468b-a6c7-baf4128ebab9";

  return (
    <>
      <div className="dashboard-main-container">
        <h1 className="dashboard-heading">Upload to App?</h1>
        <img src={imageLocation} alt="my app" className="photo" />
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="weight">Exercise type:</label>
            <select id="weight" name="weight">
              <option value="In Gym">In Gym</option>
              <option value="Without Gym">Without Gym</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="day">Day:</label>
            <select id="day" name="day">
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>

          <div className="exOne">
            <h2>Exercise 1</h2>
            <div className="form-control">
              <label htmlFor="exOneTitle">Title:</label>
              <input
                type="text"
                id="exOneTitle"
                name="exOneTitle"
                placeholder="Exercise name"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exOneSets">Sets:</label>
              <input
                type="number"
                id="exOneSets"
                name="exOneSets"
                placeholder="Number of sets"
                min="1"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exOneReps">Reps:</label>
              <input
                type="number"
                id="exOneReps"
                name="exOneReps"
                placeholder="Number of reps"
                min="1"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exOneRest">Rest:</label>
              <input
                type="text"
                id="exOneRest"
                name="exOneRest"
                placeholder="Rest time"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exOneImage">Image:</label>
              <input
                type="file"
                id="exOneImage"
                name="exOneImage"
                accept="image/*"
                required
              />
            </div>
          </div>

          <div className="exTwo">
            <h2>Exercise 2</h2>
            <div className="form-control">
              <label htmlFor="exTwoTitle">Title:</label>
              <input
                type="text"
                id="exTwoTitle"
                name="exTwoTitle"
                placeholder="Exercise name"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exTwoSets">Sets:</label>
              <input
                type="number"
                id="exTwoSets"
                name="exTwoSets"
                placeholder="Number of sets"
                min="1"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exTwoReps">Reps:</label>
              <input
                type="number"
                id="exTwoReps"
                name="exTwoReps"
                placeholder="Number of reps"
                min="1"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exTwoRest">Rest:</label>
              <input
                type="text"
                id="exTwoRest"
                name="exTwoRest"
                placeholder="Rest time"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exTwoImage">Image:</label>
              <input
                type="file"
                id="exTwoImage"
                name="exTwoImage"
                accept="image/*"
                required
              />
            </div>
          </div>

          <div className="exThree">
            <h2>Exercise 3</h2>
            <div className="form-control">
              <label htmlFor="exThreeTitle">Title:</label>
              <input
                type="text"
                id="exThreeTitle"
                name="exThreeTitle"
                placeholder="Exercise name"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exThreeSets">Sets:</label>
              <input
                type="number"
                id="exThreeSets"
                name="exThreeSets"
                placeholder="Number of sets"
                min="1"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exThreeReps">Reps:</label>
              <input
                type="number"
                id="exThreeReps"
                name="exThreeReps"
                placeholder="Number of reps"
                min="1"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exThreeRest">Rest:</label>
              <input
                type="text"
                id="exThreeRest"
                name="exThreeRest"
                placeholder="Rest time"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="exThreeImage">Image:</label>
              <input
                type="file"
                id="exThreeImage"
                name="exThreeImage"
                accept="image/*"
                required
              />
            </div>
          </div>

          <div className="exFour">
            <h2>Exercise 4</h2>
            <div className="form-control">
              <label htmlFor="exFourTitle">Title:</label>
              <input
                type="text"
                id="exFourTitle"
                name="exFourTitle"
                placeholder="Exercise name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exFourSets">Sets:</label>
              <input
                type="number"
                id="exFourSets"
                name="exFourSets"
                placeholder="Number of sets"
                min="1"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exFourReps">Reps:</label>
              <input
                type="number"
                id="exFourReps"
                name="exFourReps"
                placeholder="Number of reps"
                min="1"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exFourRest">Rest:</label>
              <input
                type="text"
                id="exFourRest"
                name="exFourRest"
                placeholder="Rest time"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exFourImage">Image:</label>
              <input
                type="file"
                id="exFourImage"
                name="exFourImage"
                accept="image/*"
              />
            </div>
          </div>

          <div className="exFive">
            <h2>Exercise 5</h2>
            <div className="form-control">
              <label htmlFor="exFiveTitle">Title:</label>
              <input
                type="text"
                id="exFiveTitle"
                name="exFiveTitle"
                placeholder="Exercise name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exFiveSets">Sets:</label>
              <input
                type="number"
                id="exFiveSets"
                name="exFiveSets"
                placeholder="Number of sets"
                min="1"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exFiveReps">Reps:</label>
              <input
                type="number"
                id="exFiveReps"
                name="exFiveReps"
                placeholder="Number of reps"
                min="1"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exFiveRest">Rest:</label>
              <input
                type="text"
                id="exFiveRest"
                name="exFiveRest"
                placeholder="Rest time"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exFiveImage">Image:</label>
              <input
                type="file"
                id="exFiveImage"
                name="exFiveImage"
                accept="image/*"
              />
            </div>
          </div>

          <div className="exSix">
            <h2>Exercise 6</h2>
            <div className="form-control">
              <label htmlFor="exSixTitle">Title:</label>
              <input
                type="text"
                id="exSixTitle"
                name="exSixTitle"
                placeholder="Exercise name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exSixSets">Sets:</label>
              <input
                type="number"
                id="exSixSets"
                name="exSixSets"
                placeholder="Number of sets"
                min="1"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exSixReps">Reps:</label>
              <input
                type="number"
                id="exSixReps"
                name="exSixReps"
                placeholder="Number of reps"
                min="1"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exSixRest">Rest:</label>
              <input
                type="text"
                id="exSixRest"
                name="exSixRest"
                placeholder="Rest time"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exSixImage">Image:</label>
              <input
                type="file"
                id="exSixImage"
                name="exSixImage"
                accept="image/*"
              />
            </div>
          </div>

          <div className="exSeven">
            <h2>Exercise 7</h2>
            <div className="form-control">
              <label htmlFor="exSevenTitle">Title:</label>
              <input
                type="text"
                id="exSevenTitle"
                name="exSevenTitle"
                placeholder="Exercise name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exSevenSets">Sets:</label>
              <input
                type="number"
                id="exSevenSets"
                name="exSevenSets"
                placeholder="Number of sets"
                min="1"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exSevenReps">Reps:</label>
              <input
                type="number"
                id="exSevenReps"
                name="exSevenReps"
                placeholder="Number of reps"
                min="1"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exSevenRest">Rest:</label>
              <input
                type="text"
                id="exSevenRest"
                name="exSevenRest"
                placeholder="Rest time"
              />
            </div>
            <div className="form-control">
              <label htmlFor="exSevenImage">Image:</label>
              <input
                type="file"
                id="exSevenImage"
                name="exSevenImage"
                accept="image/*"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FitnessDashboard;
