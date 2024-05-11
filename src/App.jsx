import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Search from "./components/Search";
import AddItem from "./components/AddItem";
import Color from "./components/Color";
function App() {
  const [data, setData] = useState([
    {
      id: 1,
      role: "Developer",
      checked: false,
    },
    {
      id: 2,
      role: "Ui deveoper",
      checked: true,
    },
    {
      id: 3,
      role: "Tester",
      checked: true,
    },
  ]);
  const [search, setSearch] = useState("");
  const [newItem, setNewItem] = useState("");

  const handleDelete = (id) => {
    const update = data.filter((items) => items.id !== id);
    setData(update);
    // localStorage.setItem("todo",JSON.stringify(listItem))
  };

  const addItem = (role) => {
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    const addNewItems = { id, checked: false, role };
    // console.log(addNewItems,"hello----");
    const listItem = [...data, addNewItems];
    console.log(listItem, "listItems---");
    setData(listItem);
    localStorage.setItem("todo", JSON.stringify(listItem));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleCheck = (id) => {
    const listItem = data.map((item) =>
      item.id === id ? {...item, checked:!item.checked } : item
    );
    console.log(listItem,"listItem--");
    setData(listItem);
    console.log(`id:${id}`);
  };

  const filteredData = data.filter(
    (item) =>
      item.role && item.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <Search search={search} setSearch={setSearch} />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <Todo
          data={filteredData}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
        <Color />
      </div>
    </>
  );
}

export default App;
