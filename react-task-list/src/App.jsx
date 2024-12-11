const tasks = [
  {
    id: 1,
    title: "Implementare la homepage",
    priority: 1,
    estimatedTime: 120,
    state: "completed"
  },
  {
    id: 2,
    title: "Sviluppare il menu di navigazione",
    priority: 2,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 3,
    title: "Creare il footer del sito",
    priority: 3,
    estimatedTime: 30,
    state: "completed"
  },
  {
    id: 4,
    title: "Ottimizzare le performance",
    priority: 1,
    estimatedTime: 180,
    state: "completed"
  },
  {
    id: 5,
    title: "Scrivere test per i componenti",
    priority: 2,
    estimatedTime: 90,
    state: "completed"
  },
  {
    id: 6,
    title: "Implementare la pagina dei contatti",
    priority: 3,
    estimatedTime: 60,
    state: "completed"
  },
  {
    id: 7,
    title: "Aggiungere animazioni CSS",
    priority: 2,
    estimatedTime: 30,
    state: "backlog"
  },
  {
    id: 8,
    title: "Integrare l'API di autenticazione",
    priority: 1,
    estimatedTime: 120,
    state: "in_progress"
  },
  {
    id: 9,
    title: "Aggiornare la documentazione",
    priority: 3,
    estimatedTime: 60,
    state: "backlog"
  },
  {
    id: 10,
    title: "Rifattorizzare il codice CSS",
    priority: 2,
    estimatedTime: 90,
    state: "in_progress"
  }
];

console.log(tasks);

const array1 = tasks.filter((curElem) => curElem.state === "completed");


const array2 = tasks.filter((curElem) => curElem.state === "in_progress" || curElem.state === "backlog")



function App() {


  return (
    <>
      <div className="header">
        <h1 className="center">Task Manager</h1>
      </div>
      <div className="container">
        <div>Completed Tasks ({array1.length})
        </div>
        <br />
        <ul className="ul">
          {array1.map((cure, index) => (
            <li key={index}>
              <div className="title">
                <h5>{cure.title}</h5>
                <div className="state">{cure.state}</div>
              </div>
              <p className="p">Priorità: {cure.priority}</p>
              <p className="p">Tempo stimato: {cure.estimatedTime} min</p>
            </li>
          ))}
        </ul>
        <br />
        <hr />
        <br />
        <div>Current Tasks ({array2.length})
        </div>
        <br />
        <ul className="ul">
          {array2.map((cure, index) => (
            <li key={index}>
              <div className="title">
                <h5>{cure.title}</h5>
                <div className="state">{cure.state}</div>
              </div>
              <p className="p">Priorità: {cure.priority}</p>
              <p className="p">Tempo stimato: {cure.estimatedTime} min</p>
            </li>
          ))}
        </ul>
      </div >
    </>
  )
}

export default App