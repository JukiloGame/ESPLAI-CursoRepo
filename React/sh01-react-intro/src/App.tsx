import './App.css'
/// import Greet from './ex01/Saludo'
import Composition, {users} from './ex02/composicion'


export default function App() {
return (
<main>
<h1>Introducción a React</h1>
{/* <Composicion /> */}

<Composition users={users}/>
{/* <Usuario /> */}
{/* <PanelLogin /> */}
{/* <Listas /> */}
{/* <Desafio /> */}
</main>
);
}
