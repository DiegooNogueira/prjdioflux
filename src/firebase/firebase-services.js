import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

//PEGA A COLEÇÃO DO BD
const usersCollectionRef = collection(db, "users");
const eventsCollectionRef = collection(db, "events");
const productsCollectionRef = collection(db, "products");


export const getUnicaData = async (id) => {
  const snap = await getDoc(doc(db, 'products', id));
  return snap;
};

export const getData = async (refCollection) => {
  let colecao = null;
  //TRATAMENTO E VALIDACOES
  switch (refCollection) {
    case "products":
      colecao = productsCollectionRef;
      break;

    case "users":
      colecao = usersCollectionRef;
      break;

    case "events":
      colecao = eventsCollectionRef;
      break;

    default:
      break;
  }
  const data = await getDocs(colecao);
  return data;
};


export const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  const delet = await deleteDoc(userDoc);
  console.log(delet);
};

export const createUser = async (newAge, newName) => {
  const cad = await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
  console.log(cad);
};

export const createProduct = async (newPrice, newName, newImage, newAmount, newDescription) => {
  const cad = await addDoc(productsCollectionRef, { 
    name: newName,
    price: Number(newPrice),
    image: newImage,
    amount: Number(newAmount),
    description: newDescription
   });
  console.log(cad);
};


export const updateUser = async (id, age) => {
  const userDoc = doc(db, "users", id);
  const newFields = { age: age + 1 };
  await updateDoc(userDoc, newFields);
};