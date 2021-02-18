import React,{useContext} from 'react';
import className from 'classnames'
import {MenuContext} from './menu'
export interface MenuItemProps{
    index:number,
    disabled?:boolean,
    classNames?:string,
    style?:React.CSSProperties
}
const MenuItem:React.FC<MenuItemProps>=(props)=>{
    const {classNames,style,children,index,disabled}=props
    const context=useContext(MenuContext)
    console.log(context.index===index);
    
    const classes=className('menu-item',className,{
        'is-disabled':disabled,
        'is-active':context.index===index
    })
    const handleclick=()=>{
        if(context.onSelect && !disabled){
            context.onSelect(index)
        }
    }
    return(
       <li className={classes} style={style} onClick={handleclick}>
           {children}
       </li>
    )
}

export default  MenuItem