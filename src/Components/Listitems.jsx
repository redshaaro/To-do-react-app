const Listitems = (props) => {
    const {items, handleDelete}=props;
    let length=items.length;
    const listItems= length ?(items.map((item)=>{
        return(
            <div key={item.id}>
                <span>{item.task}</span>
                <span>{item.time}</span>
                <span className="action icon" onClick={()=>handleDelete(item.id)}>&times;</span>


                 


            </div>
        )
    })):(
        <p>there is nothing to show</p>
    )



    return ( 
        <div className="listitems">
            <div>
                <span className="task title">Task</span>
                <span className="time title">Time</span>
                <span className="action title">Action</span>

            </div>




            {listItems}




             
        </div>
     );
}
 
export default Listitems;
