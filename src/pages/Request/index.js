import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import coxinha from '../../assets/newproduct.jpg';
import paoDeQueijo from '../../assets/paodequeijo.jpg';
import massaPastel1kg from '../../assets/massapastel1kg.jpg';
import croisantChocolate from '../../assets/croisantchocolate.jpg';
import caneloni from '../../assets/canelonni.jpg';
import carneSeca from '../../assets/carneseca.jpg';
import massaPastel500gr from '../../assets/massapastel500gr.jpg';
import massaPizza2uni from '../../assets/massapizza2un.jpg';
import salgadoAssado from '../../assets/salgadoassado.jpg';
import talharim from '../../assets/talharim.jpg';
 
export default function Historic(){
        return (
            <Carousel>
                <div className="foto">
                    <img src={coxinha} alt="foto" />
                    <p className="legend">Legend 1</p>
                </div>
                <div className="foto">
                    <img src={paoDeQueijo} alt="foto" />
                    <p className="legend">Legend 2</p>
                </div>
                <div className="foto">
                    <img src={carneSeca} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={croisantChocolate} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={massaPastel1kg} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={caneloni} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={massaPastel500gr} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={massaPizza2uni} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={salgadoAssado} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={talharim} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={salgadoAssado} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={salgadoAssado} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={salgadoAssado} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
                <div className="foto">
                    <img src={salgadoAssado} alt="foto" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }

