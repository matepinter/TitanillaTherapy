import React from 'react'
import '../components/Services.css'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import servicon1 from '../images/serv-icon1.png'
import servicon2 from '../images/serv-icon2.png'
import servicon3 from '../images/serv-icon3.png'
import servicon4 from '../images/serv-icon4.png'
import servicon5 from '../images/serv-icon5.png'
import servicon6 from '../images/serv-icon6.png'

const Services = () => {
  return (
    <>
        <div className='top-margin'>
            <div className="o-head" id='services'>
                <h1><span className="o-back">Szolgáltatások</span></h1>
            </div>

            <div className="p-back3 scale">
                <div className="dropdown">
                    <img src={servicon1} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            <li>koordináció és egyensúly</li>
                            <li>célzó mozgások</li>
                            <li>keresztcsatornák működése</li>
                            <li>mozgásügyetlenség</li>
                            <li>túlmozgékonyság</li>
                            <li>alapvető mozgásformák (járás, futás, ugrás, dobás stb.)</li>
                            <li>lúdtalp, gerincferdülés</li>
                            <li>fennmaradt csecsemőkori reflexek</li>
                            <li>szenzoros feldolgozási nehézségek/zavarok</li>
                            <li>testséma, térészlelés, téri tájékozódás</li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={servicon2} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            <li>általános tudás</li>
                            <li>analízis-szintézis</li>
                            <li>csoportosítás</li>
                            <li>összehasonlítás</li>
                            <li>rendszerezés</li>
                            <li>összehasonlítás</li>
                            <li>ok-okozati összefüggés</li>
                            <li>aritmetikai gondolkodás</li>
                            <li> emlékezet</li>
                            <li>vizualitás </li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={servicon3} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            <li>írás, olvasás, számolás</li>
                            <li>tanulási nehézségek</li>
                            <li>szövegértés</li>
                            <li>rövid idejű figyelem, koncentráció</li>
                            <li>lassú tanulási ütem, helytelen tanulási szokások</li>
                            <li>kusza írás</li>
                            <li>egyenetlen betűnagyságok</li>
                            <li>kialakulatlan feladat- és szabálytudat</li>
                            <li>iskolaelőkészítés</li>
                            <li>nyelvi fejlesztés</li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={servicon4} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            <li>írásmozgás, íráselőkészítés</li>
                            <li>mozgáskoordináció, szem-kéz koordináció, lábbal végzett
                            mozgások</li>
                            <li>dominancia (oldaliság)</li>
                            <li>görcsös ceruzafogás, nem megfelelő ceruzafogás</li>
                            <li>kézgyengeség, ujjak-kéz-csukló izmok fejletlensége</li>
                            <li>kusza rajzok, elmaradott rajzszint</li>
                            <li>kézügyességet igénylő feladatok elutasítása</li>
                            <li>ritmusérzék</li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={servicon5} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            <li>elemi mozgásminták (forgás, kúszás, mászás stb.)</li>
                            <li> hypotonia, hypertonia</li>
                            <li> féloldaliság</li>
                            <li>"lusta baba", nincs mozgásigénye</li>
                            <li>nem szeret hason lenni, nem tartja a fejét</li>
                            <li>szenzoros éretlenség</li>
                            <li>csecsemőkori reflexek</li>
                            <li>mozgásformák eltérőek</li>
                            <li>idegrendszeri éretlenség</li>
                        </ul>
                    </div>
                </div>

                <div className="dropdown">
                    <img src={servicon6} className="icon2"/>
                    <div className="dropdown-content">
                        <ul className="list">
                            <li>holisztikus szemléletű fejlesztés</li>
                            <li>idegrendszer érése</li>
                            <li>korosztálynak megfelelő ismeretanyagok</li>
                            <li>kognitív fejlesztés</li>
                            <li>mozgásfejlesztés</li>
                            <li>figyelem</li>
                            <li>egyensúly, koordináció</li>
                            <li>finommotorika</li>
                            <li>kommunikáció</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="serv scale">
                <div className="serv-cont">
                    <div className="serv-texts">
                        <div className="serv-text">
                            <h1 className="serv-name">Csoportos foglalkozások</h1>
                            <p className="serv-desc">Kiscsoportos fejlesztések, ahol a gyermekek együtt tanulnak és fejlődnek.
                                                        Fontos szerepet kapnak a dalok és mondókák, így felfedezik a közös mozgás
                                                        és éneklés örömét. 
                                                        A csoport célja többek között a mozgás, finom-és grafomotoros képességek,
                                                        egyensúlyérzék és koordináció, ritmusérzék, kognitív képességek és
                                                        személyiség fejlődésének támogatása játékos keretek között. </p>
                        </div>
                    </div>
                    <img src={img5} alt="img5" className='img5'/>
                </div>

                <div className="serv-cont">
                    <img src={img6} alt="img6" className='img6'/>
                    <div className="serv-texts">
                        <div className="serv-text">
                            <h1 className="serv-name">Online fejlesztés, élő online formában</h1>
                            <p className="serv-desc">Előzetes megbeszélés és felmérő feladatok alapján személyre szabott
                                                        feladatlapok, játékok készítése, melyeket otthon, önállóan, szülői segítséggel
                                                        kell elvégezni.</p>
                        </div>
                        <div className="serv-text">
                            <h1 className="serv-name">Tanácsadás szülőknek</h1>
                            <p className="serv-desc">Személyes és online konzultációk, amelyek segítik a családokat a mindennapi
                                                        kihívások kezelésében.</p>
                        </div>
                    </div>
                    <img src={img6} alt="img6 img-block" className='img6 img-hide'/>
                </div>
            </div>

            <div className="prices top-margin">
                <h1 className="g-h1"><span className="g-back">Árak</span></h1>
                <div className="p-back4">
                    <p className="price">Első telefonos konzultáció (30 perc): ______________________________ <strong>ingyenes</strong></p>
                    <p className="price">Egyéni fejlesztés + konzultáció (60 perc): ___________________________ <strong>120 CHF</strong></p>
                    <p className="price">Csoportos foglalkozás + konzultáció (90 perc): ________________________ <strong>40 CHF</strong></p>
                    <p className="price">Online fejlesztés - élő online formában + konzultáció (60 perc): __________ <strong>100 CHF</strong></p>
                    <p className="price">Online fejlesztés - személyre szabott feladatlapok + konzultáció: __________ <strong>50 CHF</strong></p>
                    <p className="price">Telefonos konzultáció (30 perc): __________________________________ <strong>20 CHF</strong></p>
                </div>
                <div className="p-back4 p-hide">
                    <p className="price">Első telefonos konzultáció (30 perc): <strong>ingyenes</strong></p>
                    <p className="price">Egyéni fejlesztés + konzultáció (60 perc): <strong>120 CHF</strong></p>
                    <p className="price">Csoportos foglalkozás + konzultáció (90 perc): <strong>40 CHF</strong></p>
                    <p className="price">Online fejlesztés - élő online formában + konzultáció (60 perc): <strong>100 CHF</strong></p>
                    <p className="price">Online fejlesztés - személyre szabott feladatlapok + konzultáció: <strong>50 CHF</strong></p>
                    <p className="price">Telefonos konzultáció (30 perc): <strong>20 CHF</strong></p>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Services
