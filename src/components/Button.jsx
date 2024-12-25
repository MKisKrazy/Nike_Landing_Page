const Button = ({label,imgUrl,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={`flex items-center justify-center gap-2 px-7 py-4 border font-monsterrat leading-none 
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
    
    'text-lg bg-coral-red text-white  border-coral-red'} rounded-full ${fullWidth && 'w-full'} hover:text-coral-red hover:bg-transparent hover:border-coral-red`}>
        {label}
        {imgUrl && <img src={imgUrl} alt="rightArrow icon" 
        className="rounded-full ml-2 w-5 h-5"/>}
    </button>
  )
}

export default Button