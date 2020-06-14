import React , {useEffect,useRef,createRef} from 'react'
import '../../components/index.css'
import {Nav} from '../../components'
import {Footer} from '../../components'
import {Main} from '../../components'
export default function Abonement() {
    let user = [{ "typeabonement": "basic Week", "price": "140", "avantage1": "assistance 24h / 7j", "avntage2": "2 dishes per day" },
    { "typeabonement": "pro Month", "price": "440", "avantage1": "assistance 24h / 7j", "avntage2": "4 dish per day", "avantage3": 
    "free delivery" },
    { "typeabonement": "prenium Month", "price": "700", "avantage1": "assistance 24h / 7j", "avntage2": "free delivery", "avantage3":
     "free gazouz , tee, and cofee ", "avantage4": "8 dishes per day" }]

    let unmountt = useRef(user.map(() => createRef()));
 useEffect(() => {
   for ( let i=0 ; i<user.length;i++){
    unmountt.current[i].current.style.display="none"
   }
  
     })
    return (
     
        <div className="box">
               <Nav/>
            <h2 style={{ textAlign: "center" }}>Responsive Pricing Tables</h2>
            <p style={{ textAlign: "center" }}>Responsive Pricing Tables</p>
            <div className=" contenaire margin0">
                <div className="flexcart">
                    {user.map((el,i) =>
                        <>
                            <div class="ui card hiegthcarte ">
                                <div className="">
                                    <ul class="price">
                                    <li class="grey"><button class="button" onClick = {() => console.log(unmountt.current[i].current.style.display="block")}>subscribe to the offer</button>
                                    <div className="centre-item" ref={unmountt.current[i]} width="80px"><Main   somme={el.price}/> </div></li>
                                        <li class="header">{el.typeabonement}</li>
                                        <li class="grey">{el.price} DT</li>
                                        <li>{el.avantage1}</li>
                                        <li>{el.avntage2}</li>
                                        <li>{el.avantage3}</li>
                                        <li>{el.avantage4}</li>
                                      
                            
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
