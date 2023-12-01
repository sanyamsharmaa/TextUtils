import React,{useState} from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form(prop) {
    console.log(prop.fclr)
    let Cnvrtxt=()=>{
        let utxt=text.toUpperCase()
        txtcvtr(utxt)
    }
    let ChngHandler=(text)=>{
        txtcvtr(text.target.value)
    }
    let CpyClpb=()=>{
     navigator.clipboard.writeText(text);
    //  toast.success('Text copied on clipboard!',   {
    //     position: "bottom-center",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });
    }
    let Lwrcase=()=>{
        let ltxt=text.toLowerCase();
        txtcvtr(ltxt);
    }
    // let notify=()=>toast('Text copied!')
    const [text,txtcvtr]=useState('')
    return (
        <>
            <div className="frm" >
                <center ><h1 style={{color:prop.fclr}}>{prop.title}</h1></center>

                <div class="mb-3 ">
                    {console.log(text)}
                    <textarea class="form-control" id="exampleFormControlTextarea1" onChange={ChngHandler} value={text}  placeholder={text===''?'Enter text here to convert':''} rows="5"></textarea>
                    <center><input class="btn btn-primary mt-3  " type="submit" onClick={Cnvrtxt} value="UpperCase"></input>
                    <input class="btn btn-primary mt-3  " type="submit" onClick={Lwrcase} value="LowerCase"></input>
                    <input class="btn btn-primary mt-3  " type="submit" onClick={CpyClpb} value="Copy text"></input>
                    {/* <ToastContainer /> */}
                    </center> 
                    
                </div>
                <div className="sumry" style={{color:prop.fclr}} >
                    Text Summary-
                </div>
                    <span style={{color:prop.fclr}}>Total Words-{text.split(" ").length}</span>
                    <div style={{color:'yellow'}}>{(0.005*text.split(" ").length).toFixed(2)} Minutes read</div>

            </div>
        </>
    )
}
