/*import React,{useState} from 'react'

export default function Modal() {
 const [modal, setmodal] = useState(false)
    return (
        <>
            <div class="container">
  <h2>Modal Example</h2>
  <button  onClick = {() => setmodal(true)} type="button" class="btn btn-info btn-lg" data-toggle="modal"><i class="shopping basket icon"></i></button>
  { modal ? <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" onClick={() => setmodal(false)}>&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default"onClick={() => setmodal(false)}>Close</button>
        </div>
      </div>
      
    </div>
    </div>:"" }
  
</div>
        </>
    )
}
*/