import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import './Soluciones.css'


function Soluciones() {

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
     
        <div className='title'>
        <h1>Iniciativas para combatir el cambio climatico</h1>
        </div>
     
      
        <div className='content'>
        <p className='info-text'>
          Los gobiernos, las empresas y los miembros de la sociedad civil se están uniendo en una serie de iniciativas climáticas para acelerar la acción contra el cambio climático. Estas iniciativas, que comenzaron en la Cumbre sobre la Acción Climática de 2019 en la sede de las Naciones Unidas en Nueva York, están desempeñando un papel crucial en la reducción de las emisiones, abordando cuestiones fundamentales como el empleo y la igualdad de género, desbloqueando la financiación necesaria, construyendo infraestructuras sostenibles y promoviendo soluciones basadas en la naturaleza. La participación de las Naciones Unidas como convocante es esencial para motivar a las personas a colaborar, establecer objetivos ambiciosos y tomar las medidas necesarias para limitar el aumento de la temperatura global a no más de 1,5 grados centígrados. Las Naciones Unidas también respaldan la transición hacia una economía sostenible y con bajas emisiones de carbono que sea justa y beneficiosa para todos.
        </p>
      </div>
      <aside className='accordion-column' id='lista'>
  <Accordion defaultActiveKey="0" flush>
    {/* Energía */}
    <Accordion.Item eventKey="0">
      <Accordion.Header>
        <div className="accordion-header">
          <img src="https://www.un.org/sites/un2.un.org/files/2021/09/energy01.png" alt="Energía" className="accordion-icon" />
          Energía
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {/* Contenido de Energía */}
        Acelerar la transición a las energías renovables en los PEID: treinta y seis pequeños Estados insulares en desarrollo y sus socios se han reunido para compartir estrategias e impulsar la transición hacia sistemas energéticos renovables y resilientes. Acción climática para el empleo: esta iniciativa ha elaborado una hoja de ruta y unas estrategias regionales de acción por el clima que sitúan el empleo y el bienestar de las personas en el centro de la transición hacia una economía verde. Coalición fría: el mundo une fuerzas para ofrecer una refrigeración eficiente y respetuosa con el clima para todos, lo que incluye planes climáticos nacionales mejorados. La coalición destaca innovaciones prometedoras como el «papel refrigerante», que mantiene la temperatura de los edificios. La Alianza Mundial para la Eficiencia Energética: La alianza, una coalición de líderes gubernamentales, empresariales y no gubernamentales, defiende la aceleración de la eficiencia energética y ayuda a los países a preparar hojas de ruta para impulsar la eficiencia. El Club del Tres por Ciento establece un objetivo de mejora anual en eficiencia energética del 3 %. Impulsando la Alianza del Carbón: países, inversores, empresas de servicios públicos y ciudades se encuentran entre los que trabajan en la jubilación anticipada del carbón como fuente de energía. La alianza contribuye a impulsar un nuevo consenso político e industrial para la eliminación progresiva de la financiación del carbón y su uso como fuente de energía.
      </Accordion.Body>
    </Accordion.Item>

    {/* Industria y transporte */}
    <Accordion.Item eventKey="1">
      <Accordion.Header>
        <div className="accordion-header">
          <img src="https://www.un.org/sites/un2.un.org/files/2021/09/industryandtransport01.png" alt="Industria y transporte" className="accordion-icon" />
          Industria y transporte
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {/* Contenido de Industria y transporte */}
        Acción hacia un transporte respetuoso con el clima: más de 100 organizaciones han forjado la mayor coalición de la historia dedicada a que todas las formas de transporte alcancen las cero emisiones. Investiga cuestiones como el acceso a las zonas rurales y cómo hacer que la economía de la descarbonización funcione. Un curso en línea ayuda a los líderes urbanos a desarrollar soluciones de movilidad urbana sostenible. Descarbonizar el transporte: Coalición para llegar a cero: La coalición, una poderosa alianza de más de 150 empresas marítimas, energéticas, de infraestructuras y financieras, tiene un objetivo ambicioso: la viabilidad comercial de los buques transoceánicos con cero emisiones para 2030. Los Estatutos para la carga marítima («Sea Cargo Charter») definen puntos de referencia para descarbonizar el transporte de contenedores marítimos a granel. En virtud de los Principios de Poseidón, 15 bancos han revelado el grado de adecuación de las carteras de préstamos del sector marítimo con los objetivos climáticos. Grupo de liderazgo en la transición de la industria: : con el objetivo de que las emisiones de carbono de la industria se eliminen en 2050, la iniciativa ha creado grupos industriales y ha elaborado hojas de ruta para las industrias pesadas, en las que es difícil reducir las emisiones de carbono. Su rastreador muestra el perfil de transición de las industrias en diversos países.
      </Accordion.Body>
    </Accordion.Item>

    {/* Negocios y finanzas */}
    <Accordion.Item eventKey="3">
      <Accordion.Header>
        <div className="accordion-header">
          <img src="https://www.un.org/sites/un2.un.org/files/2021/09/businessandfinance01.png" alt="Negocios y finanzas" className="accordion-icon" />
          Negocios y finanzas
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {/* Contenido de Negocios y finanzas */}
        Ambición empresarial para el 1,5°C: esta coalición de líderes empresariales e industriales hace un llamamiento a las empresas para que establezcan objetivos de reducción de las emisiones ambiciosos y basados en la ciencia, con el objetivo de eliminarlos y con el objetivo de conseguir el cero neto con el logro de los 1,5 °C. Hasta ahora, lo han suscrito más de 700 empresas con más de 13 billones de USD de capitalización bursátil. Coalición de Ministros de Finanzas para la Acción Climática:: los responsables de las políticas fiscales y económicas de más de 60 países que generan alrededor del 40 % de las emisiones mundiales reclaman que se tomen medidas y se invierta urgentemente en materia de clima, así como que se lleve a cabo una transición justa basada en la creación de millones de nuevos puestos de trabajo. Plantean medidas como la fijación de precios efectivos del carbono y la integración del cambio climático en la política macroeconómica y fiscal, entre otras cuestiones, basadas en los seis Principios de Helsinki. Alianza Financiera para las Cero Emisiones Netas:: un grupo internacional de más de 40 inversores institucionales con más de 6,6 billones de USD en activos ha asumido un audaz compromiso de transición de las carteras de inversión hacia las emisiones netas cero para 2050. Los miembros se proponen adaptar las carteras con la meta ya establecida en evitar un aumento en la temperatura global que supere los 1,5 grados centígrados. La alianza ha fijado objetivos para 2025 y ha hecho un llamamiento por el desarrollo de planes climáticos nacionales ambiciosos.
      </Accordion.Body>
    </Accordion.Item>

    {/* Resiliencia y Adaptacion */}
    <Accordion.Item eventKey="4">
      <Accordion.Header>
        <div className="accordion-header">
          <img src="https://www.un.org/sites/un2.un.org/files/2021/09/resilienceandadaptation01.png" alt="Resiliencia y Adaptacion" className="accordion-icon" />
          Resiliencia y Adaptacion
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {/* Contenido de Resiliencia y Adaptacion */}
        Llamamiento a la acción: asumir más ambición en la adaptación y la resiliencia al cambio climático. El llamamiento, que cuenta con el respaldo de 130 países y 86 organizaciones, establece objetivos más ambiciosos en materia de adaptación y resiliencia. Insta a llegar a los vulnerables, a aumentar rápidamente la financiación y a integrar el riesgo climático en nuestras perspectivas de futuro. Para obtener más información, haga clic aquí. Coalición por una inversión resiliente al clima: esta iniciativa moviliza al sector financiero privado mundial, en colaboración con instituciones privadas y públicas clave, para integrar los riesgos climáticos en la toma de decisiones de inversión. Actualmente, cuenta con 65 miembros con casi 10 billones de USD en activos, y ha contribuido a desarrollar herramientas para modelar el flujo de efectivo y las prioridades relativas a las infraestructuras en función del riesgo. Coalición por una infraestructura resistente a las catástrofres: gobiernos, organizaciones de la ONU, bancos multilaterales, empresas e instituciones del conocimiento colaboran para aumentar la resiliencia a los riesgos climáticos y de catástrofes en las infraestructuras. La iniciativa promueve la investigación y la innovación mediante un programa de becas. Asociación del Grupo InsuResilience 2025: la asociación ayuda a reforzar la resiliencia de los países en desarrollo y a proteger las vidas y los medios de subsistencia de las personas en situación de pobreza y vulnerabilidad frente a las catástrofes. En 2020, 218 proyectos en 101 países facilitaron protección financiera contra los riesgos relacionados con el clima a más de 130 millones de personas. También hace un seguimiento de las soluciones climáticas con perspectiva de género a través de un centro de excelencia. Iniciativa de países menos desarrollados para una adaptación y resiliencia efectivas (LIFE-AR): el grupo trabaja por un futuro resiliente al clima en los países menos desarrollados. Ha hecho avances en el establecimiento de unos estándares para la adaptación al clima en las comunidades locales, así como en un mecanismo de financiación. Asociación de Acción Temprana Informada sobre Riesgos (REAP): coalición de las comunidades climáticas, humanitarias y de desarrollo, que saca partido de los conocimientos, el intercambio de soluciones y las nuevas asociaciones para reducir el riesgo de catástrofes, con el objetivo de que, de aquí a 2025, 1000 millones de personas estén más seguras.
      </Accordion.Body>
    </Accordion.Item>

    {/* Soluciones basadas en la naturaleza */}
    <Accordion.Item eventKey="5">
      <Accordion.Header>
        <div className="accordion-header">
          <img src="https://www.un.org/sites/un2.un.org/files/2021/09/naturebasedsolutions01.png" alt="Soluciones basadas en la naturaleza" className="accordion-icon" />
          Soluciones basadas en la naturaleza
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {/* Contenido de Soluciones basadas en la naturaleza */}
        Campaña por la naturaleza: esta floreciente coalición de más de 100 organizaciones ecologistas pide a los responsables políticos que se comprometan con un nuevo acuerdo, ambicioso y basado en la ciencia, para la naturaleza. Su objetivo es la protección de al menos el 30 % del planeta para 2030, con el apoyo de recursos financieros suficientes y la plena realización del liderazgo y los derechos indígenas. Ocean Risk and Resilience Action Alliance Alianza para la acción resiliente a los riesgos Oceánicos: esta alianza pone en contacto a gobiernos, instituciones financieras, el sector de los seguros, organizaciones medioambientales y actores de Sur Global para aumentar la resiliencia ante los riesgos oceánicos. Es pionera en productos de financiación y seguros destinados a incentivar una inversión de 500 millones de USD en soluciones basadas en la naturaleza para 2030.
      </Accordion.Body>
    </Accordion.Item>

    {/* Planificación urbanística */}
    <Accordion.Item eventKey="6">
      <Accordion.Header>
        <div className="accordion-header">
          <img src="https://www.un.org/sites/un2.un.org/files/2021/09/citiesandurbanization01.png" alt="Planificación urbanística" className="accordion-icon" />
          Planificación urbanística
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {/* Contenido de Planificación urbanística */}
        Alianza para el Liderazgo en materia de Financiación Climática: se trata de una coalición de gobiernos, instituciones financieras, fondos para el clima, redes de ciudades y grupos de reflexión que ha desarrollado el marco LUCI para ayudar a 2000 ciudades a preparar y financiar proyectos climáticos, de los que, hasta la fecha, ya ha realizado el 20 %. El City Climate Finance Gap Fund, un fondo para cubrir las carencias financieras de las ciudades ante el cambio climático, que se nutre de la colaboración de los bancos multilaterales de desarrollo y los donantes bilaterales, constituye la base del proceso.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
</aside>

    </div>
  )

};


export default Soluciones;


