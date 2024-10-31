

const Cards = ({children, bg= "bg-gray-100 "}) => {
  return (

    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        
        <h1>{children}</h1>
    </div>
  )
}

export default Cards