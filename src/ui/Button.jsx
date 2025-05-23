import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Button({children, disabled, to, type, onClick}) {
   const base =  "px-4 bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"

  const styles = {
    primary: base + 'py-3 md:px-6 md:py-4',
    small: base + 'py-2 md:px-5 md:py-2.5 text-xs',
    round: base + 'py-1 md:px-3.5 md:py-2.5 text-sm',
    secondary: "px-4 bg-transparent border-2 border-stone-300 uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 focus:text-stone-800 transition-colors duration-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5"
  }

    if(to) return <Link className={styles[type]} to = {to}>{children}</Link>
    if(onClick) 
      return (
        <button onClick={onClick} disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
