import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import DisplayBalance from "./components/DisplayBalance";
import { getAllEntries } from "./store/actions/entries.action";

function App() {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState({});

  useEffect(() => {
    let totalIncomes = 0;
    let totalexpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalexpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalexpenses);
    setTotal(totalIncomes - totalexpenses);
  }, [entries]);

  useEffect(() => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      setEntry(entries[index]);
    }
  }, [isOpen, id, entries]);

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />
      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
