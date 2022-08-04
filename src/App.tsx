
import { useState } from 'react';
import styles from './App.module.css';
import imc from './assets/imc.png';
import leftArrow from './assets/left-arrow.png';
import {GridItem} from './components/GridItem';
import {levels, calculateImc, Level} from './helpers/imc' ;





const App = () => {

const [heightFild, setHeigthFild] = useState (0);
const [weigthFild, setweigthFild] = useState (0);
const [showItem, setshowItem] = useState < Level | null> (null);

const handlecalcular = () => {
  if (heightFild && weigthFild) {
      setshowItem(calculateImc(heightFild, weigthFild));
  } else {
    alert("preencha os campos obrigatórios")
  }

}
  
const backbutton = () => {
  setshowItem(null);
  setHeigthFild(0);
  setweigthFild(0);
}
  return (
    <div className={styles.main}> 

      <header>
        <div className={styles.headerContainer}> 
           <img src={imc} alt="" width={80} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1> Calcule o seu IMC. </h1>
          <p> O IMC e o indice de massa corpórea, parametro adotado pela Organização mundial da saúde para calcular o peso ideal de cada pessoa. </p>

          <input 
           type="number"
           placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
           value={heightFild > 0 ? heightFild : ""}
           onChange={e => setHeigthFild (parseFloat(e.target.value)) }
           disabled={showItem ? true : false}

          />
           <input 
           type="number"
           placeholder="Digite o seu peso. Ex: 65.5 (em kg)"
           value={weigthFild > 0 ? weigthFild : ""}
           onChange={e => setweigthFild (parseFloat(e.target.value)) }
           disabled={showItem ? true : false}

          />
          <button onClick={handlecalcular}   disabled={showItem ? true : false}> Calcular</button>
        </div>

        <div className={styles.rigthSide}>
          {!showItem &&
           <div className={styles.grid}>
             {levels.map((item, key) => (
              <GridItem key={key} item={item} />
              
              

             ))}

           </div>
          }
          {showItem && 
            <div className={styles.RigthBig} >
              <div className={styles.rigthArrow} onClick={backbutton}> 
                <img src={leftArrow} alt='' width={25}/>
              </div>
              <GridItem item={showItem}/>

           </ div>
          }
          

        </div>
      </div>

    </div>

  );
}


export default App;
