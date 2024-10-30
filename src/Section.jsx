//Now we will make this Section as a reusable component

const Section = ({ className = '' , children , border = false }) => {
  return (
   <>
        <div className={`bg-black-bright-red-gradient w-full h-[100vh] ${border ? 'border-4 border-white' : ''} ${className}`} >
            {children}    
        </div>
   </>
  )
}

export default Section
