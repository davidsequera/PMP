import React from 'react'
import './styles/Home.css'

class Home extends React.Component{
    render(){
        return(
                <div className="Page-container" id="Home">
                        <section id="HomeImg">
                            <div>
                                <h1 id="HomeImg-title">PMP</h1>
                                <p id="HomeImg-text">Project Management Professional</p>
                            </div>
                        </section>
                        <section id="HomeInfo">
                            <h1 id="HomeInfo-title">Bienvenido!!</h1>
                            <p  id="HomeInfo-text">Project Management Professional (PMP) es una certificación (credencial) ofrecida por el Project Management Institute (PMI). Al 31 de diciembre de 2016, había 745.841 personas certificadas PMP y 21.397 certificadas CAPM en 298 capítulos a nivel mundial.</p>
                        </section>
                </div>
            )
    }
}

export default Home