import React from "react";
import { TiLocation } from "react-icons/ti";
import { SiGmail } from "react-icons/si";
import { AiOutlineGitlab, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";
import { DiJavascript1, DiReact, DiNodejsSmall, DiLinux } from "react-icons/di";
import { FiTrello } from "react-icons/fi";

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
            <text className="job">Frontend developer</text>
            <figure className='resume_image'>
                <img className='avatar' src={require("./AboutMeAssets/avatar.png")} alt=""/>
            </figure>
          </div>

          <div className="Contact_data">
            <text className='contact_data'>DATOS DE CONTACTO</text> <br></br>
              <text className="contact_data_info"><TiLocation /> Donostia - San Sebastian</text> <br></br>
              <text className="contact_data_info"><SiGmail /> ivansantanacalle@gmail.com</text> <br></br>
              <a href="https://www.facebook.com/ivansantaanacalle/" target="_blank">    
                <text className="contact_data_info"><AiFillLinkedin /> https://www.linkedin.com/in/iv%C3%A1n-santana-calle-9b624622a/ </text> <br></br>
              </a>
              <a href="https://www.facebook.com/ivansantaanacalle/" target="_blank">    
                <text className="contact_data_info"><AiOutlineGitlab /> https://gitlab.com/ivansantaana</text> <br></br>
              </a>




              
          </div>

          <div className="Abilities_data">
              <text className='abilities_data'>HABILIDADES</text> <br></br>
              <text className="abilities_data_info"><MdKeyboardArrowRight /> Fuertes habilidades de comunicación</text> <br></br>
              <text className="abilities_data_info"><MdKeyboardArrowRight /> Trabajo en equipo</text> <br></br>
              <text className="abilities_data_info"><MdKeyboardArrowRight /> Resolución de problemas</text> <br></br>
              <text className="abilities_data_info"><MdKeyboardArrowRight /> Diseño y gestión de sitios web</text> <br></br>
              <text className="abilities_data_info"><MdKeyboardArrowRight /> Redes sociales</text> <br></br>
          </div>
        </div>


        <div className="About_Me">
          <div className="About_me_principal_info">
            <text className="About_Me_Title"> PERFIL PROFESIONAL</text> <br></br>
              <text className="About_Me_text"> Mi objetivo principal es formar parte de un equipo profesional, en el que se reconozcan los logros y éxitos de cada uno en un abmiente de trabajo agradable. La mayor parte de mi experiencia con mis proyectos personales está relacionada con el diseño de aplicaciones en React y React Native. <br></br>Soy una persona joven, formal y llena de energía lista para sumarme a un equipo de trabajo, en el que aportar mis conocimientos y formación. De esta forma, poder aumentar mi experiencia profesional en un entorno real, fuera del ámbito académico.</text>
          </div>

          <div className="About_me_Academic_info">
            <text className="About_Me_Studies"> Estudios</text> <br></br>

              <text className="academic_title"> AEG BERRIKUNTZA PROFESIONALEN ESKOLA </text> <br></br>
              <text className="academic_text"><MdKeyboardArrowRight /> Técnico Superior en Desarrollo de Aplicaciones Web</text> <br></br>
              <text className="academic_text"><MdKeyboardArrowRight /> Lanbide | Curso de usabilidad Web</text> <br></br>
              <text className="academic_text"><MdKeyboardArrowRight /> Lanbide | Curso de gestión de proyectos con metodologías ágiles SCRUM</text> <br></br>
              <text className="academic_title"> UNIVERSIDAD EUROPEA DEL ATÁNTICO </text> <br></br>
              <text className="academic_text"><MdKeyboardArrowRight /> Ciencias de la Actividad Física y del Deporte. (3 cursos)</text> <br></br>

              <text className="academic_title"> LA SALLE DONOSTIA IKASTETXEA. </text> <br></br>
              <text className="academic_text"><MdKeyboardArrowRight /> Graduado en Bachillerato</text> <br></br>
              <text className="academic_text"><MdKeyboardArrowRight /> Graduado en E.S.O</text> <br></br>
          </div>

          <div className="Skills">
            <text className="skills_title"> SKILLS</text> <br></br>
              <text className="skills_languages"> Conocimientos básicos de:</text> <br></br>
                <text className="skills_text"><AiFillHtml5 /> HTML</text> <br></br>
                <text className="skills_text"><IoLogoCss3 /> CSS</text> <br></br>
                <text className="skills_text"><DiJavascript1 /> JavaScript</text> <br></br>
                <text className="skills_text"><DiReact /> React / React Native</text> <br></br>
                <text className="skills_text"><DiNodejsSmall /> Node.js</text> <br></br>
                
              <text className="skills_languages"><AiOutlineGitlab /> Git (GitHub,GitLab)</text> <br></br>
              <text className="skills_languages"><FiTrello /> Trello</text> <br></br>
              <text className="skills_languages"><DiLinux /> Entorno de desarrollo Linux</text> <br></br>
          </div>

          <div className="Languages">
            <text className="languages_title"> IDIOMAS</text> <br></br>
            <text className="languages_text"><MdKeyboardArrowRight /> Español: lengua materna.</text> <br></br>
            <text className="languages_text"><MdKeyboardArrowRight /> Euskera: nivel avanzado C1</text> <br></br>
            <text className="languages_text"><MdKeyboardArrowRight /> Inglés: nivel B2-C1</text> <br></br>
          </div>
        </div>
      </div>
    )
}