import { useEffect, useState } from "react";

export const useGetTransactions = () => {
  const [transaction, setTransactions] = useState([]);

  const getTransactions = async () => {};

  useEffect(() => {
    getTransactions();
  }, []);
  return { transaction };
};
