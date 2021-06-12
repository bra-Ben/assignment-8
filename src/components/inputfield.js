import '../pages/signup.css';


function Inputfield(props) {
  
    return(
        <div style={{display:'flex',flexDirection:'column',margin:10}}> 
            <input name={props.name}  onChange={props.onChange}
            placeholder={props.placeholder}style={{borderRadius:5, marginTop:10,border:0,width:250,height:25}}
            value={props.value} type={props.type}
             />
     </div>
    )
}

export default Inputfield;