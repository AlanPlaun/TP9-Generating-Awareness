import React from "react";
import Figure from 'react-bootstrap/Figure';

function Home() {
    return (
      <React.Fragment>
  
        <div>
          <div className='title'>
            <h1 className="main-title">URBAN LUXURY</h1>
            <h4 className="subtitle">Informate y ayuda a concientizar a otros</h4>
            <div>
              <Figure className="figure-container">
                <Figure.Image
                  width={171}
                  height={130}
                  alt="171x180"
                  src="https://images.vexels.com/media/users/3/296107/isolated/preview/87d9abb704822675875639924f9ede52-personaje-de-dibujos-animados-del-calentamiento-global-del-d-a-de-la-tierra.png"
                />
              </Figure>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

export default Home;