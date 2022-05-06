import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

// See a table of the transactions.


function AccountContainer() {
const [transactions, setTransactions]= useState([])

const[search, setSearch]= useState('')

const handleSearch = (e) => {
  setSearch(e.target.value)
}

const filteredTransactions = transactions.filter(transaction => transaction.date.includes(search))




const addNewTransaction = (newTransaction) => {
  setTransactions([...transactions, newTransaction])
}

useEffect(() => {
  fetch('http://localhost:6001/transactions')
  .then(res => res.json())
  .then(data => setTransactions(data))
},[])
  







  return (
    <div>
      <Search search={search} handleSearch={handleSearch}/>
      <AddTransactionForm addNewTransaction={addNewTransaction} />
      <TransactionsList transactions ={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
