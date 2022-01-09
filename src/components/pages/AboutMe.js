import React from "react";
import './AboutMe.css';
 
export default function AboutMe() {
    return (
      <div className="About_Me_Screen">
        <div className="Banner">
          <img className="banner_img" src= {require("./AboutMeAssets/banner.gif")}/>
        </div>

        <div className="Resume">
          <div className="Principal_data">
            <text className="name">IVÁN SANTANA CALLE</text> <br></br>
            <text className="job">Front-end developer</text>
            <figure className='resume_image'>
                <img className='avatar' src={require("./AboutMeAssets/avatar.jpg")} alt=""/>
            </figure>
          </div>

          <div className="Contact_data">
            <text className='contact_data'>DATOS DE CONTACTO</text> <br></br>
                <text className='contact_data_info'>Nombre y apellidos: Iván Santana Calle</text> <br></br>
                <text className='contact_data_info'>Fecha de nacimiento: 02 / 09 / 1998</text> <br></br>
                <text className='contact_data_info'>Telf.: +34 665-61-30-08</text> <br></br>
                <text className='contact_data_info'>email: ivansantanacalle@gmail.com</text> <br></br>
                <text className='contact_data_info'>Dirección: Intxaurrondo, Baratzategui Nº3</text> <br></br>
          </div>

          <div className="Abilities_data">
              <text className='abilities_data'>HABILIDADES</text> <br></br>
                <text className='abilities_data_info'> - Fuertes habilidades de comunicación </text> <br></br>
                <text className='abilities_data_info'> - Trabajo en equipo </text> <br></br>
                <text className='abilities_data_info'> - Proactividad e iniciativa </text> <br></br>
                <text className='abilities_data_info'> - Resolución del problemas </text> <br></br>
                <text className='abilities_data_info'> - Ética de trabajo </text> <br></br>
                <text className='abilities_data_info'> - Gestión de sitios web </text> <br></br>
                <text className='abilities_data_info'> - Redes sociales </text> <br></br>
          </div>
        </div>



        <div className="About_Me">

          <div className="About_me_principal_info">
            <text className="About_Me_Title"> SOBRE MÍ</text> <br></br>
            <text className="About_Me_text"> Mi objetivo principal es formar parte de un equipo profesional, en el que se reconozcan los logros y éxitos de cada uno en un abmiente de trabajo agradable. <br></br>Soy una persona joven, formal y llena de energía para sumarme a un equipo de trabajo, en el que aportar mis conocimientos y formación. De esta forma, poder aumentar mi experiencia profesional en un entorno real, fuera del ámbito académico.</text>
          </div>

          <div className="About_me_Academic_info">
            <text className="academic_title"> AEG BERRIKUNTZA PROFESIONALEN ESKOLA </text> <br></br>
            <text className="academic_text"> - Técnico Superior en Desarrollo de Aplicaciones Web </text> <br></br>
          
            <text className="academic_title"> UNIVERSIDAD EUROPEA DEL ATÁNTICO </text> <br></br>
            <text className="academic_text"> - Ciencias de la Actividad Física y del Deporte. (3 cursos) </text> <br></br>

            <text className="academic_title"> LA SALLE DONOSTIA IKASTETXEA. </text> <br></br>
            <text className="academic_text"> - Graduado en Bachillerato </text> <br></br>
            <text className="academic_text"> - Graduado en E.S.O </text>
          </div>








          <div className="Skills">
          
          </div>
        </div>

      </div>
    )
}