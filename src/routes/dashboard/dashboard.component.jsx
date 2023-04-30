import { useContext, useEffect } from 'react';
import { SignInContext } from '../../context/signin.context';
import { useNavigate } from 'react-router-dom';
import { uploadFormToFirestore } from '../../utils/firestore.utils';

import './dashboard.styles.scss';

const DashBoardComp = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {weight , TitleOne, textOne, TitleTwo, textTwo, TitleThree, textThree, TitleFour, textFour, day} = event.target.elements;
        const targets = [weight, TitleOne, textOne, TitleTwo, textTwo, TitleThree, textThree, TitleFour, textFour, day];
        const forms = [
          { weekName: day.value, titleOne: TitleOne.value, textOne: textOne.value, titleTwo: TitleTwo.value, textTwo: textTwo.value, titleThree: TitleThree.value, textThree: textThree.value, titleFour: TitleFour.value, textFour: textFour.value },
        ];
        
        await uploadFormToFirestore(weight.value, forms);
        for(let i = 0; i < targets.length; i++) {
          targets[i].value = '';
        }
    }
    const imagelocation = 'https://firebasestorage.googleapis.com/v0/b/fittness-app-2854c.appspot.com/o/app.jpg?alt=media&token=59e438a3-d99a-468b-a6c7-baf4128ebab9';
    return (
      <>
        <div className="dashboard-main-container">
          <h1 className="dashboard-heading">Upload to App?</h1>
          <img src={imagelocation} alt="my app" className='photo'/>
          <form onSubmit={handleSubmit}>
          <label htmlFor='schName'>collectionName:</label>
          <select id="Weight" name='weight'>
          <option value="UnderWeight">UnderWeight</option>
          <option value="NormalWeight">NormalWeight</option>
          <option value="OverWeight">OverWeight</option>
          <option value="Obese">Obese</option>
        </select>
          <label htmlFor="day">Day:</label>
          <select name='day'>
          <option value="الاحد">الاحد</option>
          <option value="الاثنين">الاثنين</option>
          <option value="الثلاثاء">الثلاثاء</option>
          <option value="الاربعاء">الاربعاء</option>
          <option value="الخميس">الخميس</option>
          <option value="الجمعة">الجمعة</option>
          <option value="السبت">السبت</option>
        </select>          
        <label htmlFor="property-title">Title 1:</label>
          <input type="text" id="property-title" required name='TitleOne' />
          <label htmlFor="property-title">text 1:</label>
          <input type="text" id="property-title" required name='textOne' />
          <label htmlFor="property-title">Title 2:</label>
          <input type="text" id="property-title" required name='TitleTwo' />
          <label htmlFor="property-title">text 2:</label>
          <input type="text" id="property-title" required name='textTwo' />
          <label htmlFor="property-title">Title 3:</label>
          <input type="text" id="property-title" required name='TitleThree' />
          <label htmlFor="property-title">text 3:</label>
          <input type="text" id="property-title" required name='textThree' />
          <label htmlFor="property-title">Title 4:</label>
          <input type="text" id="property-title" required name='TitleFour' />
          <label htmlFor="property-title">text 4:</label>
          <input type="text" id="property-title" required name='textFour' />  
            <button type="submit" className='upload-property'>Upload</button>
          </form>
        </div>
      </>
    );
  };

const DashBoard = () => {
    const {isSignedIn} = useContext(SignInContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) {
            navigate('/');
        }
    }, [isSignedIn, navigate]);

    return (
        <div>
            {isSignedIn ? <DashBoardComp /> : null}
        </div>
    );
}

export default DashBoard;