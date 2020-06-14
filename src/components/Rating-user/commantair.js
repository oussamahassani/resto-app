import React from 'react'

export default function Commantair(props) {
    return (
        <div>
             <div className="flexcart">
     {props.user.map(el =>
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
        </div>
    )
}
