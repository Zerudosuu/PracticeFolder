import { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
  //? declaring transaction as useState[] because it will be a list or objects
  const [transaction, setTransactions] = useState([]);
  const [transactiontotal, setTransactionstotal] = useState({
    balance: 0.0,
    income: 0.0,
    expense: 0.0,
  });

  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  // ? creating async function as we requesting data from database
  const getTransactions = async () => {
    let unsubscribe;

    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")

        /* 
        ? creaitng a varible whwere we query, the query needs to acess the transaction collection 
        ? therefore we declare again the transactionCollectionRef that has a value of collection, 
        ? with the needs of the db from firestore and the name of the collection. 
       */
      );

      /*
      ? onSnapshat is a realtime listner on Firestore that needed two parameters 
      ? the query which is the querytransactions and the callback function which is the snapshot
      ? the snapshot variable in here represents the all of the data queried from database
      ? then we have to foreach as doc be the callback function 
      ? we declare data equals the function doc.data() as well as the id
      ? the data() function is all the data that we extracted from the snapshot


      ? we push all the data to the docs array as well as the id
      ? after the we set the transaction to the state so that we can have the data saved on 
      ? current state. 
      */
      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        let income = 0;
        let expense = 0;

        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });

          if (data.transactionType === "expense") {
            expense += Number(data.transactionAmount);
          } else {
            income += Number(data.transactionAmount);
          }
        });

        let balance = 0;

        balance = income - expense;
        setTransactions(docs);

        setTransactionstotal({
          balance,
          income,
          expense,
        });
      });
    } catch (err) {
      console.log(err);
    }

    // ? we clean up after the query
    return () => unsubscribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  // ?  we return the transaction saved in out sate
  return { transaction, transactiontotal };
};
