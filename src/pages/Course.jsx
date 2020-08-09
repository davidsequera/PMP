import React from 'react'
import LessonList from '../components/LessonList'
import Video from '../components/Video'
import './styles/Course.css'


class Explore extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
          };    
    }
    componentDidMount(){
        this.timeoutId = setTimeout(() => {
            this.setState({
                data: [              
                {
                    id: "1",
                    name: 'Capítulo 1: Introducción',
                    number: 1,
                    lessons:[
                        {
                            name:"Lección 1: Presentanción", 
                            number:1, 
                            link: "www.https://cursopmp.visbal.co/Cap%201%20Lecci%C3%B3n%201%20(Aura)Version2.mp4.com" },
                        {
                            name:"Lección 2: Concepto proyecto", 
                            number:2, 
                            link: "https://cursopmp.visbal.co/Cap%201%20Lecc%202%20El%20Proyecto.mp4" },
                        {
                            name:"Lección 3: Direccion de Proyectos Parte 1", 
                            number:3, 
                            link: "https://cursopmp.visbal.co/Cap%201%20Lec%203.mp4" },
                        {
                            name:"Lección 4: Direccion de Proyectos Parte 2", 
                            number:4, 
                            link: "https://cursopmp.visbal.co/lecci%C3%B3n%204%20Direcci%C3%B3n%20de%20proyectos%202.mp4" },
                        {
                            name:"Lección 5: Resumen", 
                            number:5, 
                            link: "https://cursopmp.visbal.co/Cap%201%20Leec%205.%20Resumen%201..mp4" },
                    ]
                },
                {
                    id: "2",
                    name: 'Capítulo 2: Conceptos Fundamentales',
                    number: 6,
                    lessons:[
                        {
                            name:"Lección 1: Programas", 
                            number:6, 
                            link: "www.google.com" }, 
                        {
                            name:"Lección 2: Portafolio", 
                            number:7, 
                            link: "www.google.com" }, 
                        {
                            name:"Lección 3: OPM3 - PMO", 
                            number:8, 
                            link: "www.google.com" },
                        {
                            name:"Lección 4: Resumen", 
                            number:9, 
                            link: "www.google.com" }
                    ]
                },
                {
                    id: "3",
                    name: 'Capítulo 3: Conceptos avanzados',
                    number: 10,
                    lessons:[
                        {
                            name:"Lección 1: Estructura Organizacional", 
                            number:10, 
                            link: "www.google.com" },
                        {
                            name:"Lección 2: Ciclo de vida del proyecto", 
                            number:11, 
                            link: "www.google.com" },
                        {
                            name:"Lección 3: Competencias del director de proyecto -Parte 1", 
                            number:12, 
                            link: "www.google.com" },
                        {
                            name:"Lección 4: Competencias del director de proyecto -Parte 2", 
                            number:13, 
                            link: "www.google.com" },
                        {
                            name:"Lección 5: Interesados del Proyecto", 
                            number:14, 
                            link: "www.google.com" },
                        {
                            name:"Lección 6: Registro de interesados", 
                            number:15, 
                            link: "www.google.com" }
                    ]
                },                  {
                    id: "4",
                    name: 'Capítulo 4: Anteproytecto',
                    number: 16,
                    lessons:[ 
                        {
                            name:"Lección 1: Definición de anteproyecto", 
                            number:16, 
                            link: "www.google.com" }, 
                        {
                            name:"Lección 2: Importancia del anteproyecto", 
                            number:17, 
                            link: "www.google.com" }, 
                        {
                            name:"Lección 3: Plan de gestion de beneficios", 
                            number:18, 
                            link: "www.google.com" } 
                    ]
                },
                {
                    id: "5",
                    name: 'Capítulo 5: Gestión del Alcance',
                    number: 19,
                    lessons:[
                        {
                            name:"Lección 1: Gestión del alcance -Parte 1 ", 
                            number:19, 
                            link: "www.google.com" },
                        {
                            name:"Lección 2: Gestión del alcance -Parte 2 ", 
                            number:20, 
                            link: "www.google.com" },
                        {
                            name:"Lección 3: Estructura de desglose del Trabajo EDT", 
                            number:21, 
                            link: "www.google.com" },
                        {
                            name:"Lección 4: Gestión del alcance -Parte 3 ", 
                            number:22, 
                            link: "www.google.com" },
                        {
                            name:"Lección 5: Planificar la gestión del alcance", 
                            number:23, 
                            link: "www.google.com" }

                    ]
                },                  {
                    id: "6",
                    name: 'Capítulo 6: Recopilación de requisitos',
                    number: 24,
                    lessons:[
                        {
                            name:"Lección 1: Recopilación de requisitos -Parte 1", 
                            number:24, 
                            link: "www.google.com" },
                        {
                            name:"Lección 2: Recopilación de requisitos -Parte 2", 
                            number:25, 
                            link: "www.google.com" },
                    ]
                },
                {
                    id: "7",
                    name: 'Capítulo 7: Como crear la EDT',
                    number: 26,
                    lessons:[
                        {
                            name:"Lección 1: Importancia de la EDT", 
                            number:26, 
                            link: "www.google.com" },
                        {
                            name:"Lección 2: Como crear la EDT -Parte 1 ", 
                            number:27, 
                            link: "www.google.com" },
                        {
                            name:"Lección 3: Como crear la EDT -Parte 2 ", 
                            number:28, 
                            link: "www.google.com" },
                        {
                            name:"Lección 4: Como crear la EDT -Parte 3 ", 
                            number:29, 
                            link: "www.google.com" },
                        {
                            name:"Lección 5: Como crear la EDT -Parte 4", 
                            number:30, 
                            link: "www.google.com" }
                    ]
                },
                {
                    id: "8",
                    name: 'Capítulo 8: Linea Base del Alcance',
                    number: 40,
                    lessons:[      
                        {
                            name:"Lección 1: Linea Base del alcance -Parte 1", 
                            number:40, 
                            link: "www.google.com" },
                        {
                            name:"Lección 2: Linea Base del alcance -Parte 2", 
                            number:41, 
                            link: "www.google.com" },
                        {
                            name:"Lección 3: Validar el alcance -Parte 1", 
                            number:42, 
                            link: "www.google.com" },
                        {
                            name:"Lección 4: Validar el alcance -Parte 2", 
                            number:43, 
                            link: "www.google.com" },
                        {
                            name:"Lección 5: Validar el alcance -Parte 3", 
                            number:44, 
                            link: "www.google.com" },
                        {
                            name:"Lección 6: Controlar el alcance", 
                            number:45, 
                            link: "www.google.com" }
                    ]
                },
                {
                    id: "9",
                    name: 'Capítulo 9: Gestion de la comunicación',
                    number: 46,
                    lessons:[
                        {
                            name:"Lección 1: Importancia de las comunicaciones", 
                            number:46, 
                            link: "www.google.com" },
                        {
                            name:"Lección 2: Conceptos basicos de la comunicación", 
                            number:47, 
                            link: "www.google.com" }, 
                        {
                            name:"Lección 3: Metodos de comunicación", 
                            number:48, 
                            link: "www.google.com" }
                    ]
                },
                {
                    id: "10",
                    name: 'Capítulo 10: Actividades de los grupos de Procesos',
                    number: 49,
                    lessons:[
                        {
                            name:"Lección 1: Actividades del grupo de procesos de inicio -Parte 1", 
                            number:49, 
                            link: "www.google.com" }, 
                        {
                            name:"Lección 2: Actividades del grupo de procesos de inicio -Parte 2", 
                            number:50, 
                            link: "www.google.com" }
                    ]
                },
                {
                    id: "11",
                    name: 'Capítulo 11: Video de Preguntas',
                    number: 51,
                    lessons:[
                        {
                            name:"Lección 1: Video - Practicar preguntas para el examen", 
                            number:51, 
                            link: "www.google.com" }
                    ]
                }
            ] 
            })
        }, 0);
    }
    componentWillUnmount(){
        clearTimeout(this.timeoutId)
    }
    render(){
        return(
                <div className="Page-container" id="Course">
                    <div className="courses">
                        <Video/>
                        <LessonList
                        restaurant={this.state.data}
                        />
                    </div>
                </div>
        )
    }
}

export default Explore;