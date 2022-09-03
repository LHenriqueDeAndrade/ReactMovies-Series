import React, { useState } from "react";
import * as S from "../styles/styles.js";

function Main() {
  const [tarefas, setTarefas] = useState("");
  const [lista, setLista] = useState([]);
  const tarefa = { tarefa: tarefas, id: Date.now() };

  const Add = () => {
    if (tarefas !== "") {
      setLista((antigaLista) => [...antigaLista, tarefa]);
    }
    setTarefas("");
  };
  console.table(lista);

  const Remove = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  const ClearAll = () => {
    setLista(lista.filter((item) => item.lista));
  };

  return (
    <S.MyList>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <S.ADD
          value={tarefas}
          onChange={(e) => {
            setTarefas(e.target.value);
          }}
          placeholder="Adicione uma Tarefa ✏️"
        />
        <button onClick={() => Add()}>Add</button>
        <button onClick={() => ClearAll()}>ClearAll</button>
        {lista.map((item) => (
          <S.listADD>
            <input id="text" type="checkbox" />
            <label for="text">{item.tarefa}</label>
            <button onClick={() => Remove(item.id)}>X</button>
          </S.listADD>
        ))}
      </form>
    </S.MyList>
  );
}
export default Main;
