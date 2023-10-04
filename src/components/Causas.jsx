import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import './Soluciones.css'

function Causas() {
  return (
    <div className='conteiner'>
       <style>
        {`
          /* Agrega el enlace a la fuente 'Noto Sans' */
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

          /* Aplica la fuente 'Noto Sans' al texto */
          body {
            font-family: 'Noto Sans', sans-serif;
          }

          /* Define estilos para el título */
          .main-title {
            font-size: 36px;
            font-weight: bold;
            color: #333; /* Color de texto personalizado */
            margin-bottom: 20px;
          }

          /* Define estilos para el texto informativo */
          .info-text {
            font-size: 18px;
            line-height: 1.5;
            color: #666; /* Color de texto personalizado */
          }
        `}
      </style>
      <header>
        <div className='title'>
              <h1>Causas del calentamiento global</h1>
        </div>
      </header>
      
      <div className='content'>
      <p className='info-text'>Primero hablemos de qué es el calentamiento global, El calentamiento global es un fenómeno en el que 
          la temperatura promedio de la Tierra está subiendo gradualmente. Esto ocurre debido a la acumulación de 
          gases como el dióxido de carbono en la atmósfera, principalmente por actividades humanas como la quema 
          de combustibles fósiles y la deforestación. Este aumento de temperatura tiene efectos en el clima, como más sequías, 
          tormentas intensas y un aumento del nivel del mar, y también afecta a la biodiversidad y 
          la vida en nuestro planeta. Es un problema serio que requiere atención y medidas para reducir su impacto.</p>
      </div>
      <aside className='accordion-column'>
      <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>La generación de la energía</Accordion.Header>
        <Accordion.Body>
        La generación de electricidad y calor a través de los combustibles fósiles provoca una gran cantidad de emisiones globales. La mayoría de la electricidad se genera todavía con la combustión de carbón o gas, lo que produce dióxido de carbono y óxido nitroso, que son potentes gases de efecto invernadero que cubren el planeta y atrapan el calor proveniente del sol. A nivel global, algo más de un cuarto de la electricidad proviene de fuentes de energía renovables eólicas y solares que, al contrario que los combustibles fósiles, emiten poca o ninguna cantidad de gases o contaminantes en el aire.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Productos de fabricación</Accordion.Header>
        <Accordion.Body>
        La industria y las fábricas producen emisiones, en su mayoría provenientes de la quema de combustibles fósiles destinada a generar energía para la fabricación de cemento, hierro, acero, componentes electrónicos, ropa y otros bienes. La minería y otros procesos industriales también generan gases, de la misma forma que lo hace el sector de la construcción. La maquinaria utilizada en los procesos de fabricación a menudo realizados mediante carbón, petróleo o gas, y con algunos materiales, como los plásticos, están compuestos de sustancias químicas derivadas de los combustibles fósiles. La industria manufacturera es una de las que más contribuyen a las emisiones de gases de efecto invernadero a nivel mundial.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>La tala de los bosques</Accordion.Header>
        <Accordion.Body>
        La tala de bosques a fin de crear granjas o pastos, o por otros motivos, provoca emisiones dado que cuando se talan sus árboles se libera el carbono que estos han estado almacenando. Cada año se destruyen aproximadamente 12 millones de hectáreas de bosques. Puesto que los bosques absorben el dióxido de carbono, su destrucción también limita la capacidad de la naturaleza para mantener estas emisiones fuera de la atmósfera. La deforestación, junto con la agricultura y otros cambios en la utilización de los suelos, es responsable de aproximadamente un cuarto de las emisiones de gases de efecto invernadero.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>El uso del transporte</Accordion.Header>
        <Accordion.Body>
        La mayoría de camiones, barcos y aeronaves funcionan con combustibles fósiles. Esto hace que el transporte sea uno de los sectores que más contribuyen a generar gases de efecto invernadero, especialmente en lo que a emisiones de dióxido de carbono se refiere. Los vehículos terrestres son responsables de la mayor parte, debido a la combustión de productos derivados del petróleo, como la gasolina, en los motores de combustión interna. Sin embargo, las emisiones provenientes de barcos y aeronaves siguen aumentando. El transporte es responsable de cerca de un cuarto de las emisiones de dióxido de carbono relacionadas con la energía a nivel global. Y la tendencia es que continúe este importante aumento del uso de la energía para el transporte durante los próximos años.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>La producción de alimentos</Accordion.Header>
        <Accordion.Body>
        La producción de alimentos provoca emisiones de metano, dióxido de carbono y otros gases de efecto invernadero, de diferentes maneras, en lo que se incluye la deforestación y la roturación de tierras para la agricultura y el pastoreo, la alimentación del ganado bovino y ovino, la producción y uso de fertilizantes y el abono utilizado para los cultivos, además del uso de la energía que hace funcionar el equipo de las granjas o los barcos pesqueros, siendo normalmente con combustibles fósiles. Todo esto hace que la producción de alimentos sea uno de los sectores que más contribuyen al cambio climático. Además, las emisiones de efecto invernadero también provienen del envasado y la distribución de los alimentos.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Un consumo excesivo</Accordion.Header>
        <Accordion.Body>
        Su hogar, el uso que hace de la energía, el modo de desplazarse, lo que come, lo que derrocha, todo ello afecta a la emisión de gases de efecto invernadero. Y lo mismo ocurre con el consumo de bienes como la ropa, los componentes electrónicos y los productos fabricados en plástico. Un gran porcentaje de las emisiones de gases de efecto invernadero están ligadas a los hogares particulares. Nuestro estilo de vida tiene un profundo impacto en el planeta. Los más ricos son los que tienen mayor responsabilidad: el 1 por ciento de la población mundial con mayor riqueza, en conjunto genera más emisiones de gases de efecto invernadero que el 50 por ciento más pobre.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </aside>
      <div className='image-column'>
     <img src="https://www.un.org/sites/un2.un.org/files/causes01_1.png" className='imagenPNG'/>
      </div>
      <div>
  
      </div>
    </div>
  )
}

export default Causas;