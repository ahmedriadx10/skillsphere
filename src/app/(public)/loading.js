import { ThreeCircles } from "react-loader-spinner"

const LoadingSpinner=()=>{

  return(
    <div className="h-[50vh] flex justify-center items-center">

      <ThreeCircles
visible={true}
height="100"
width="100"
color="#BA0035"
ariaLabel="three-circles-loading"
wrapperStyle={{}}
wrapperClass=""
/>


    </div>
  )

}

export default LoadingSpinner