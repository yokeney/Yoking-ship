import React ,{ FC, useState, createContext, CSSProperties } from 'react';
import className from 'classnames'
type MenuMode='horizonal'|'vertical'
type onSelectcallback=(SelectedIndex:number)=>void
export interface MenuProps {
    defaultIndex?:number,
    classname?:string,
    mode?:MenuMode,
    style?:React.CSSProperties,
    defaultOpenSubMenus?: string[],
    onSelect?:onSelectcallback
}
interface IMenuContext {
    index: number;
    onSelect?: onSelectcallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];  
  }
export const MenuContext = createContext<IMenuContext>({index: 0})
const Menu:FC<MenuProps>=(props)=>{
    const {classname,mode,style,children,defaultIndex,onSelect}=props
    const [currentActive,setActive]=useState(defaultIndex)
    const handleClick=(index: number)=>{
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext:IMenuContext={
        index:currentActive?currentActive:0,
        onSelect:handleClick
    }
    const classes=className('yoking-menu',classname,{
        'menu-vertical':mode==='vertical'
    })
    return(
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
            {children}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps={
    defaultIndex:0,
    mode:"horizonal"
}
export default Menu