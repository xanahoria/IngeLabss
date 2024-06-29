const Button= (props)=>{
    const{ name } = props
    return(
        <>
        <button className="bg-purple-700 text-white" >{name}</button>
        </>
    )

}
export default Button;