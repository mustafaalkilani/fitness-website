import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq9UB2qs4NtjXgeDA5VvvdjmUKl-WH9uc",
  authDomain: "fittness-app-2854c.firebaseapp.com",
  projectId: "fittness-app-2854c",
  storageBucket: "fittness-app-2854c.appspot.com",
  messagingSenderId: "1041719002340",
  appId: "1:1041719002340:web:7d3dc4a9ba2232282018f1"
};
initializeApp(firebaseConfig);

export const auth = getAuth();

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const db = getFirestore();
// export const storage = getStorage();

// export const uploadImageAndGetDownloadUrl = async (imageFile) => {
//   const storageRef = ref(storage, 'images/' + imageFile.name);
//   const snapshot = await uploadBytes(storageRef, imageFile);
//   const downloadUrl = await getDownloadURL(snapshot.ref);

//   return downloadUrl;
// };


export const uploadFormToFirestore = async (weightCategory, forms) => {
  try {
    let collectionName = "";
    if (weightCategory === "UnderWeight") {
      collectionName = "UnderWeight";
    } else if (weightCategory === "NormalWeight") {
      collectionName = "NormalWeight";
    } else if (weightCategory === "OverWeight") {
      collectionName = "OverWeight";
    } else if (weightCategory === 'Obese') {
      collectionName = 'Obese';
    }

    const batch = [];

    forms.slice(0, 7).forEach((form) => {
      const docName = `day : ${form.weekName}`;
      batch.push(setDoc(doc(db, collectionName, docName), {
        TitleOne: form.titleOne,
        TextOne: form.textOne,
        TitleTwo: form.titleTwo,
        TextTwo: form.textTwo,
        TitleThree: form.titleThree,
        TextThree: form.textThree,
        TitleFour: form.titleFour,
        TextFour: form.textFour
      }));
    });

    await Promise.all(batch);
    console.log("Documents written to collection ", collectionName);
  } catch (e) {
    console.error("Error adding documents: ", e);
  }
};

export const uploadFormExToFirestore = async (WherePlay, forms) => {
  try {
    let collectionName = "";
    if (WherePlay === "Gym") {
      collectionName = "Gym";
    } else if (WherePlay === "WithoutGym") {
      collectionName = "WithoutGym";
    } 

    const batch = [];

    forms.slice(0, 7).forEach((form) => {
      const docName = `day : ${form.weekName}`;
      batch.push(setDoc(doc(db, collectionName, docName), {
        exOne: form.exOne,
        exTwo: form.exTwo,
        exThree: form.exThree,
        exFour: form.exFour,
        exFive: form.exFive,
        exSix: form.exSix,
        exSeven: form.exSeven,
      }));
    });

    await Promise.all(batch);
    console.log("Documents written to collection ", collectionName);
  } catch (e) {
    console.error("Error adding documents: ", e);
  }
};


// export const getAllDocs = async () => {
//   const querySnapshot = await getDocs(collection(db, 'EatSchedule'));
//   const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   return docs;
// };
