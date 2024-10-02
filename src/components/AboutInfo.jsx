import React from 'react'
import '../components/AboutInfo.css'
import img4 from "../images/img4.jpg"
import hat from "../images/edu_hat.png"
import pap from "../images/edu_pap.png"

const AboutInfo = () => {
  return (
    <>
        <div className="about top-margin" id="about">
            <h1 className="g-h1"><span className="g-back">Rólam</span></h1>

            <div className="p-back2">
                    <div className="text">
                        <p>Az évek során sok, különböző gyermekkel és fiatallal
                        foglalkoztam. A szakmám a hivatásommá vált.</p>

                        <p>A munkám során fontosnak tartom, hogy a gyermek
                        problémájának és állapotának megfelelően állítsam össze
                        a terápia menetét, azonban mindezt játékba ágyazottan,
                        hogy a fejlesztés örömteli élmény legyen, és a gyermek
                        biztonságban érezze magát.</p>

                        <p>Arra törekszem, hogy játékon keresztül és szeretetteljes
                        odafordulással megtaláljam a gyermekekhez vezető utat. </p>

                        <p>A foglalkozások során magas szakmai színvonalú
                        módszereket alkalmazok, naprakészen tartom a tudásom. </p>

                        <p>A gyerekek fejlesztése mellett fontosnak tartom a szülők
                        megfelelő tájékoztatását és segítését is, hisz sokszor
                        egyedül vannak az úton, ami számukra is kihívásokkal teli.</p>
                    </div>

                    <div className="img4-div scale">
                        <img src= {img4} className="img4"/>
                    </div>
            </div>
        </div>

        <div className='top-margin'>
            <h1 className="g-h1"><span className="g-back">Tanulmányaim</span></h1>
        </div>

        <div className="studies">

            <div className="studies-cont">
                <div className="sch">
                    <div className="uni-cont">
                        <img src={hat} alt="hat" className='edu-icon'/>
                        <p className="uni">Debreceni Egyetem</p>
                    </div>
                    <p className="dep"> Gyógypedagógus - tanulásban akadályozottak pedagógiája szakirányon</p>
                </div>
                <div className="sch">
                    <div className="uni-cont">
                        <img src={hat} alt="hat" className='edu-icon'/>
                        <p className="uni">Eötvös Loránd Tudományegyetem</p>
                    </div>
                    <p className="dep">Gyógypedagógus - szomatopedagógia szakirányon</p>
                </div>
                <div className="sch d-show">
                    <div className="uni-cont">
                        <img src={pap} alt="pap" className='edu-icon'/>
                        <p className="uni">Továbbképzések, tanusítványok</p>
                    </div>
                    <p className="dep">Mozgásfejlődés a csecsemőkori reflexek tükrében</p>
                    <p className="dep">Az írásmozgás fejlődésének preventív segítése az óvodában</p>
                    <p className="dep">Gyerekjóga oktató</p>
                </div>
            </div>

            <div className="studies-cont d-hide">
                <div className="sch">
                    <div className="uni-cont">
                        <img src={pap} alt="pap" className='edu-icon'/>
                        <p className="uni">Továbbképzések, tanusítványok</p>
                    </div>
                    <p className="dep">Mozgásfejlődés a csecsemőkori reflexek tükrében</p>
                    <p className="dep">Az írásmozgás fejlődésének preventív segítése az óvodában</p>
                    <p className="dep">Gyerekjóga oktató</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutInfo
