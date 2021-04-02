import React from 'react';
import classNames from 'classnames'
export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}
export enum ButtonType {
    Primary = 'praimary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}
 interface BaseButtonProps {
    className?: string,
    disabled?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children: React.ReactNode
    href?: string
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement> //让button组件添加原生属性和事件类型加上自己定义的属性
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement> //添加a标签支持的属性加上自己的定义的属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> //a链接不需要其他属性和事件，属性和事件要改成可选的，用Partial包裹一下，如果有必选的属性可在后面添加& 加上必选的属性
const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props
    const classes = classNames('btn',className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        "disabled": (btnType === ButtonType.Link) && disabled
    })
    if (btnType === ButtonType.Link && href) {
        return (
            <a href={href} className={classes} {...restProps}>
                {children}
            </a>
        )
    }
    else {
        return (
            <button className={classes} disabled={disabled} {...restProps}>
                {children}
            </button>
        )
    }
}
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
export default Button