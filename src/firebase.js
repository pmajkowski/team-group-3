// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDN3qiXKxasJzGLs6uybYnsJRZYWhXjBm8",
  authDomain: "projekt-gr03.firebaseapp.com",
  projectId: "projekt-gr03",
  storageBucket: "projekt-gr03.appspot.com",
  messagingSenderId: "805011767201",
  appId: "1:805011767201:web:31bdd0b0c356fdba6595e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);



//------------Equipments Base-------------------------

// const eq = "Equipments";
// const addNewData = async()=>{
//         await setDoc(doc(firestore, eq, "o3"),
//         {
//             name: 'crawler excavator',
//             price: 200,
//             availability: true,
//             fot: 'o3'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "o1"),
//         {
//             name: 'Two-way excavator',
//             price: 180,
//             availability: true,
//             fot: 'o1'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "o2"),
//         {
//             name: 'Articulated hauler',
//             price: 210,
//             availability: true,
//             fot: 'o2'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "o3"),
//         {
//             name: 'crawler excavator',
//             price: 200,
//             availability: true,
//             fot: 'o3'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "w1"),
//         {
//             name: 'Universal tamping machine UNIMAT 09-4x8/4S',
//             price: 4600,
//             availability: true,
//             fot: 'w1'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "w2"),
//         {
//             name: 'Track tamping machine Duomatic 09-32 CSM',
//             price: 4000,
//             availability: true,
//             fot: 'w2'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "w3"),
//         {
//             name: 'Universal tamping machine UNIMAT 09-4x4/4S',
//             price: 4300,
//             availability: true,
//             fot: 'w3'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "w4"),
//         {
//             name: 'Dynamic track stabilizer DGS 62 N',
//             price: 3500,
//             availability: true,
//             fot: 'w4'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "w5"),
//         {
//           name: 'Universal ballast regulating machine USP 2000-C2',
//           price: 2300,
//           availability: true,
//             fot: 'w5'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "t1"),
//         {
//           name: 'Hydraulic track car DH-350.11',
//           price: 500,
//           availability: true,
//             fot: 't1'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "t2"),
//         {
//           name: 'Diesel locomotive 6DH-1 002',
//           price: 560,
//           availability: true,
//             fot: 'w2'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "zg1"),
//         {
//           name: 'Mobile rail welding KCM007',
//           price: 1600,
//           availability: true,
//             fot: 'zg1'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "z1"),
//         {
//           name: 'Crane Gottwald GS.150.14 GT',
//           price: 35000,
//           availability: true,
//             fot: 'z1'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "z2"),
//         {
//           name: 'Crane KRC910',
//           price: 28000,
//           availability: true,
//             fot: 'z2'
//         }
//         ) 
//         await setDoc(doc(firestore, eq, "z3"),
//         {
//           name: 'Track and turnouts laying system PEM-LEM',
//           price: 20000,
//           availability: true,
//             fot: 'z3'
//         }
//         ) 
// }
// addNewData();