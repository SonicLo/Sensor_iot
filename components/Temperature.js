import './css/temperature.css'

export const Temperature = ({ room, value }) => {
    return(
        <div className= "container-fluid" >
        <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-sm-12 col-xs-12">
                <div className="card-tem text-white">
                    <div className="div1 p-4 p-md-5 ">
                     
                        <h1>{value}<sup>CM </sup> </h1>
                    </div>
                    <div className="div2"> </div>
                </div>
            </div>
        </div>
</div >)
}