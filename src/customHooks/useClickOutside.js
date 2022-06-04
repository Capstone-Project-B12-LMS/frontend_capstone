import { useEffect } from "react"

const useClickOutSide = (ref, show ,setClickOutSide)=> {

    const clickOutSide = (e)=> show && !ref.current.contains(e.target) ? setClickOutSide(true) : false;

    useEffect(()=>{
        document.addEventListener('click',clickOutSide,true)
        return ()=> document.removeEventListener('click',clickOutSide,true)
    })
}

export { useClickOutSide }