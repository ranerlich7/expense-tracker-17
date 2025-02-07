import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../config/firebase-config"
import useGetUserInfo from "./useGetUserInfo"
function useAddTransaction() {
  const { userID } = useGetUserInfo()
  async function addTransaction({
    description,
    transactionAmount,
    transactionType,
  }) {
    const transactionCollectionRef = collection(db, "transactions")
    await addDoc(transactionCollectionRef, {
      userID,
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(),
    })
  }
  return { addTransaction }
}

export default useAddTransaction
