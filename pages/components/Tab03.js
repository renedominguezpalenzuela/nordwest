import React from "react";
import Opcion2 from "./Opcion2";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ImagenDerecha1 from "./ImagenDerecha1";
import ImagenDerecha2 from "./ImagenDerecha2";
import AreaInferiorIzquierda from "./AreaInferiorIzquierda";
import {useRecoilState} from 'recoil';
import { tipoPersona } from "../../src/globales";
import { useState, useEffect } from "react";
import Image from 'next/image';

import {servidor_url} from '../../config/config'

import Swal from 'sweetalert2';


const Tab03 = (props) => {
  const [vTipoPersona, setTipoPersona] = useRecoilState(tipoPersona);

//   useEffect(() => {
//     console.log("Tipo persona "+vTipoPersona);
// }, []);

  return (
    <>
    {/*  lg:grid lg:grid-cols-[66%_34%] lg:grid-rows-[6vh_60vh_18vh]  lg:w-full hidden */}
      <div className="
      lg:grid 
      lg:grid-cols-[66%_34%] 
      lg:grid-rows-[15vh_46vh_19vh]  
          xl:grid-rows-[15vh_48vh_19vh]  
      lg:w-full 
      hidden    
      
         ">
        {/* ---------------------- Area Superior izquierda ----------------------     */}
        <div className="pl-10 pt-2  col-start-1 row-start-1 ">
          <AreaSuperiorIzquierda vTipoPersona={vTipoPersona}></AreaSuperiorIzquierda>
        </div>

        {/* ---------------------- Area Central izquierda----------------------     */}

        {/* <div className="ml-24 bg-[#EFEFEF] w-[60%] xl:h-[40vh] h-[32vh] col-start-1 row-start-2 self-center pt-5 mt-10 pl-10">
        
         <AreaCentralIzquierda
           updateContenido={props.updateContenido}
           updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
       </div> */}

        {/* ---------------------- Area Inferior izquierda ----------------------     */}
        <div className=" col-start-1 row-start-3 contenido ">
          <AreaInferiorIzquierda texto1 = "Warum fragen wir das?"
           texto2=
            "Wir bieten einen krisensicheren Job, in dem sich unsere  Mitarbeiter*innen individuell entwickeln k??nnen. Mit flachen Hierarchien und Kommunikation auf Augenh??he.">

          </AreaInferiorIzquierda>
        </div>
        {/*----------------------- Imagen de la derecha -----------------------------*/}

     

        <div className=" flex justify-end  col-start-2 row-start-1  row-end-4    imagen  ">
         <ImagenDerecha1></ImagenDerecha1>
       </div>
      </div>

      {/* PAntalla movil xl --> ancho < 1280  */}
      <div className="w-full lg:hidden  flex flex-col items-center">
        <div className="pt-2 px-6">
          <AreaSuperiorIzquierda vTipoPersona={vTipoPersona}></AreaSuperiorIzquierda>
        </div>

        {/* <div className="mt-5 p-2 px-6 pt-8 bg-[#EFEFEF] w-[90%]  ">
       <AreaCentralIzquierda
           updateContenido={props.updateContenido}
           updateOpenTab={props.updateOpenTab}></AreaCentralIzquierda>
       </div> */}

        <div className="mt-5 px-6 p-2 pt-8 bg-[#EFEFEF]   ">
        <AreaInferiorIzquierda texto1 = "Warum fragen wir das?"
           texto2=
            "Wir bieten einen krisensicheren Job, in dem sich unsere  Mitarbeiter*innen individuell entwickeln k??nnen. Mit flachen Hierarchien und Kommunikation auf Augenh??he.">

          </AreaInferiorIzquierda>
        </div>

        <div className="w-full ">
          <ImagenDerecha2 updateContenido ={props.updateContenido}></ImagenDerecha2>
        </div>
      </div>
    </>
  );
};



const VentanaModal = (props) => {


 

  //Estilos para el checkbox
  const styles = {
   
    ".MuiFormControlLabel-label": {
      fontSize: "0.55rem",
      fontFamily: "Inter-Light !important",
      // color:"red"
    },
  };


  


  const sendFormulario = async () =>  {
   

    

    const vorname = document.querySelector('#vorname').value;
    const nachname = document.querySelector('#nachname').value;
    const postleitzahl = document.querySelector('#postleitzahl').value;
    const email = document.querySelector('#email').value;
    const telefon = document.querySelector('#telefon').value;
    const tipopersona = props.vTipoPersona;

   

    // const peticion  = await fetch(`${servidor_url}/api/sendmail`, {
    const peticion  = await fetch(`${servidor_url}/api/sendmail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         vorname: vorname,
         nachname: nachname,
         postleitzahl: postleitzahl,
         email: email,
         telefon: telefon,
         tipopersona: tipopersona        
        })
    });



    const respuesta = await peticion.json()
    const cod_resp = respuesta.cod_resp;
    const detalles = respuesta.detalle;
    // console.log("respues"+respuesta.cod_resp)

    if (cod_resp==="ok") {
      Swal.fire({icon: 'success',text: 'Email wurde erfolgreich Versendet',
      confirmButtonText: 'Schlie??en'});
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fehler beim Senden der E-Mail',
        confirmButtonText: 'Schlie??en',
        // footer: '<a href="">Why do I have this issue?</a>'
      })

      
      //Swal.fire('Error sending email');
    }
   

  }

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 posision-z outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl lg:w-[40vw] w-[100vw] mx-2">
          {/*content*/}
          <div className="border-0 pt-6 pb-10 rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-1  ">
              <img src="/img/nwm_logo_400px.png" className="w-[40%] ml-7" alt="NordWest"  />

              <button
                className="p-1 ml-auto mr-6 border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => props.setShowModal(false)}>
                <span className=" opacity-1 h-8 w-8 text-2xl block outline-none focus:outline-none">
                  <img src="/img/ei_close.svg" alt="NordWest" />
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative  mx-10 flex-auto ">
              <div className=" font-inter-regular  mt-6 text-[1rem]">
                Jetzt bewerben
              </div>
              <div className=" font-inter-light mt-2 text-[0.6rem]">
                Du haben es fast geschafft!
              </div>
              <div className=" font-inter-light mt-2 text-[0.9rem]">
                So k??nnen wir Dich erreichen
              </div>
              <div className="mb-2 mt-2">
                <TextField
                  className=" w-full h-[6vh]"
                  id="vorname"
                  name="vorname"
                  label="Vorname"
                  variant="standard"
                />
              </div>
              <div className="mb-2">
                <TextField
                  className=" w-full h-[6vh]"
                  id="nachname"
                  name="nachname"
                  label="Nachname"
                  variant="standard"
                />
              </div>

              <div className="mb-2">
                <TextField
                  className=" w-full h-[6vh]"
                  id="postleitzahl"
                  name="postleitzahl"
                  label="Postleitzahl"
                  variant="standard"
                />
              </div>

              <div className="mb-2">
                <TextField
                  className=" w-full h-[6vh]"
                  id="email"
                  name="email"
                  label="Email"
                  variant="standard"
                />
              </div>

              <div className="mb-2">
                <TextField
                  className=" w-full h-[6vh]"
                  id="telefon"
                  name="Telefon"
                  label="Telefon"
                  variant="standard"
                />
              </div>

              <div className="mt-6">
                <button
                  className="btn bg-[#E20613] rounded text-[1rem] text-[#ffffff] px-7 py-1 font-roboto ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {
                   

                    sendFormulario();
                    props.setShowModal(false);
                  }
                  }>
                  Absenden
                </button>
              </div>

              <div>
                <FormControlLabel
                  sx={styles}
                  control={
                    <Checkbox
                      defaultChecked
                      size="small"
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 11 } }}
                    />
                  }
                  label=" Hiermit akzeptiere ich die geltenden Datenschutzbestimmungen."
                />
                {/* <Checkbox {...label} size="small"  sx={{ '& .MuiSvgIcon-root': { fontSize: 14 } }} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

const AreaSuperiorIzquierda = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  

  return (
    <>
      {showModal ? (
        <VentanaModal setShowModal={setShowModal}  vTipoPersona={props.vTipoPersona}></VentanaModal>
      ) : null}

      <div className="pt-4">
        <span className="underline underline-offset-4 font-tahoma-bold text-[17px]">
          Jetzt Teil von
        </span>
        <span className="font-tahoma-bold text-[17px]]">der nwm werden!</span>
      </div>

      <div className=" pt-4">
        <button
          className="btn bg-[#E20613] rounded  px-8 py-2 text-[12px] text-[#ffffff] font-tahoma-bold lg:hidden "
          type="button"
          onClick={() => setShowModal(true)}>
          Jetzt bewerben
        </button>

        <button
          className="btn bg-[#E20613] rounded  px-8 py-2 text-[12px] text-[#ffffff] font-tahoma-bold hidden lg:block"
          type="button"
          onClick={() => setShowModal(true)}>
          <div className="font-montserrat-bold text-[12px]">Jetzt bewerben</div>
          <div className="font-montserrat text-[11px]">
            (ohne Lebenslauf in 30 Sek.)
          </div>
        </button>
      </div>

      <div className="lg:overflow-y-auto lg:h-[40vh] lg:mt-1">
      <div className="font-tahoma-bold text-[#4B4B4B] lg:text-[30px] text-[16px] mt-8    leading-[2.7rem]">
        <span className="underline underline-offset-8 ">Das bieten wi</span>
        <span className=" ">r Dir!</span>
      </div>

      <div className="mt-0 text-[10px] lg:text-[12px] text-[#4B4B4B] font-tahoma mt-1 ml-3 lg:ml-0">
        <ul>
          <li>
            Flexible Arbeitszeiten in unserer Kernarbeitszeit (Montag bis
            Freitag von 8:00 Uhr bis 20:00 Uhr)
          </li>
          <li> Monatliches Festgehalt</li>
          <li>
            Zahlung der Verm??genswirksamen Leistungen, sowie F??rderung der
            betrieblichen Altersvorsorge
          </li>
          <li>
            Sicherer Arbeitsplatz als Teil der systemrelevanten Infrastruktur,
            sowie 20j??hrige Expertise als Tochterunternehmen und Service-Center
            der Sparkasse Bremen
          </li>
          <li>
            Pers??nliche und individuelle Einarbeitung (Fachschulungen und
            Kommunikation) durch unsere Fachspezialisten
          </li>
          <li>
            Erfahrungen im Banking sammeln oder erweitern (keine Vorkenntnisse
            erforderlich)
          </li>
          <li>
            {
              'Umfangreiche Sozialleistungen wie Beihilfen zur Gesundheitsvorsorge und Teilnahme am Angebot ???Job-Ticket" der BSAG'
            }
          </li>
          <li>
            Moderne und klimatisierte Arbeitspl??tze in zentraler Lage
            Technologiepark Bremen - Homeoffice ist aber auch m??glich
          </li>
          <li> Kostenlose Getr??nkebar (Kaffeespezialit??ten, Tee, Wasser)</li>
          <li>
            Kollegiales Arbeitsklima mit flachen Hierarchien, Kommunikation auf
            Augenh??he und Duz-Kultur{" "}
          </li>
        </ul>
      </div>

      <div className="font-tahoma-bold text-[#4B4B4B] lg:text-[30px] text-[16px] mt-8    leading-[2.7rem]">
        <span className="underline underline-offset-8 ">Deine Aufga</span>
        <span className="">ben</span>
      </div>

      <div className="mt-0 text-[10px] lg:text-[12px] text-[#4B4B4B] font-tahoma mt-1 ml-3 lg:ml-0">
        <ul>
          <li>
            {" "}
            Du bist der/die Ansprechpartner*in Nr. 1 f??r Kundinnen und Kunden
            der Sparkasse Bremen
          </li>
          <li>
            Mit Deiner Serviceorientierung und Deinem Fachwissen l??st Du
            fallabschlie??end Fragen und Anliegen unserer Kunden*innen, die uns
            per Telefon, Mail oder Chat erreichen
          </li>
          <li>
            Bei Bedarf leitest Du an Fachspezialisten ??ber oder vereinbarst
            R??ckrufe und Termine mit dem/der jeweiligen Berater*in
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};


export default Tab03;
