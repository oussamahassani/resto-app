import React from 'react'
import {Nav} from '../../components'
import {Footer} from '../../components'
export default function Ratinguser() {
    let user = [{ "username": "mohamedali", "image": "https://semantic-ui.com/images/avatar/large/elliot.jpg", "age": "45", "pargraphe": "i love this food and i commendation", "note": "🏆🏆🏆🏆🏆" },

    { "username": "moez", "age": "40", "image": "https://semantic-ui.com/images/avatar/large/steve.jpg", "pargraphe": "i love this food and i commendation", "note": " 🏆🏆🏆🏆" },
    { "username": "slim", "age": "25", "image": "https://semantic-ui.com/images/avatar/large/steve.jpg", "pargraphe": "i love this food and i commendation", "note": "🏆🏆🏆🏆" },
    { "username": "amani", "age": "17", "image": "https://semantic-ui.com/images/avatar2/large/kristy.png", "pargraphe": "i love this food and i commendation", "note": "🏆🏆🏆🏆🏆" }


    ]


    return (
        <>
        <Nav/>
        <div className=" contenaire margin0">
            <div className="flexcart">
                {user.map(el =>
                    <>
                        <div class="ui card margin-left50">
                            {el.note}
                            <a class="image" href="#">
                                <img src={el.image} />
                            </a>
                            <p>avies : {el.pargraphe}</p>
                            <div class="content">
                                <a class="header" href="#">{el.username}</a>
                                <div class="meta">
                                    <a>{el.age}</a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div class="baroundnoir">
                <div class="ui inverted form">
                    <div class="two fields">
                        <div class="field">
                            <label>First Name</label>
                            <input placeholder="First Name" type="text" />
                        </div>
                        <div class="field">
                            <label>Last Name</label>
                            <input placeholder="Last Name" type="text" />
                        </div>
                    </div>
                    <div class="two fields">
                        <div class="field">
                            <label>age</label>
                            <input placeholder="age" type="Number" />
                        </div>
                        <div class="field">
                            <label>image</label>
                            <input placeholder="image" type="text" />
                        </div>
                    </div>
                    <div class="inline field">
                        <label>commantaire</label>
                        <textarea placeholder="commantaire" rows="4" cols="50" />



                        <div class="ui submit button">Submit</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
