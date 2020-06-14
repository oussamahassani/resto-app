import React, {useState} from 'react'
import {Nav} from '../../components'
import {Footer} from '../../components'
import Commantair from './commantair'
export default function Ratinguser() {
    
const [state, setstate] = useState(
    [{ "username": "mohamedali", "image": "https://semantic-ui.com/images/avatar/large/elliot.jpg", "age": "45", "pargraphe": "i love this food and i commendation", "note": "🏆🏆🏆🏆🏆" },
    { "username": "moez", "age": "40", "image": "https://semantic-ui.com/images/avatar/large/steve.jpg", "pargraphe": "i love this food and i commendation", "note": " 🏆🏆🏆🏆" },
    { "username": "slim", "age": "25", "image": "https://semantic-ui.com/images/avatar/large/steve.jpg", "pargraphe": "i love this food and i commendation", "note": "🏆🏆🏆🏆" },
    { "username": "amani", "age": "17", "image": "https://semantic-ui.com/images/avatar2/large/kristy.png", "pargraphe": "i love this food and i commendation", "note": "🏆🏆🏆🏆🏆" }
    ] 
)
const [name, setname] = useState("")
const [age, setage] = useState("")
const [image, setimage] = useState("")
const [para, setparagrape] = useState("")
const [note, setnote] = useState("")
function onChangenote(e){
    let x = e.target.value;
    let not = ""
    for (let i = 0 ; i<x;i++)
      not+= '🏆'
      setnote({note:not})
}
function senddate(){
    let paylod = {"username":name.name , "age":age.age,"image":image.image,"pargraphe":para.para,"note":note.note
}
state.push(paylod)
    
    console.log("ok",state)
}
    return (
        <>
        <Nav/>
        <Commantair user={state} />
        <div className=" contenaire margin0">
            <div class="baroundnoir">
                <div class="ui inverted form">
                    <div class="two fields">
                        <div class="field">
                            <label>First Name</label>
                            <input onChange = {(e) => setname({name: e.target.value})} placeholder="First Name" type="text" />
                        </div>
                        <div class="field">
                            <label>NOTE</label>
                            <input onChange = {(e) => onChangenote(e)} placeholder="Last Name" type="Number" min="1"  />
                        </div>
                    </div>
                    <div class="two fields">
                        <div class="field">
                            <label>age</label>
                            <input onChange = {(e) => setage({age: e.target.value})}   placeholder="age" type="Number" />
                        </div>
                        <div class="field">
                            <label>image</label>
                            <input  onChange = {(e) => setimage({image: e.target.value})}  placeholder="image" type="text" />
                        </div>
                    </div>
                    <div class="inline field">
                        <label>commantaire</label>
                        <textarea  onChange = {(e) => setparagrape({para: e.target.value})}  placeholder="commantaire" rows="4" cols="50" />



                        <div class="ui submit button" onClick ={() => senddate()}>Submit</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
