import { useEffect, useState } from "react"
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore"
import { db } from "../config/firebase-config"
import useGetUserInfo from "./useGetUserInfo"

export const useGetTransactions = () => {
  let unsubscribe

  const { userID } = useGetUserInfo()
  const transactionCollectionRef = collection(db, "transactions")
  const getTransactions = async () => {
    try {
      const queryTransactions = query(
        transactionCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt", "desc")
      )
      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = []
        snapshot.forEach((doc) => {
          const data = doc.data()
          const id = doc.id
          docs.push({ ...data, id })
        })
        setTransactions(docs)
      })
    } catch (error) {
      console.error(error)
    }
    return () => unsubscribe()
  }
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    getTransactions()
  }, [])
  return { transactions }
}
