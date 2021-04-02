import React from 'react';
import { render,fireEvent } from '@testing-library/react'
import Button,{ButtonProps,ButtonType,ButtonSize} from '../button/button'
const defaultprops = {
    onClick:jest.fn()
}
const testprops:ButtonProps={
    btnType:ButtonType.Primary,
    size:ButtonSize.Large,
    className:'klass'
}
const disbledprops={
    disabled:true,
    onClick:jest.fn()
}
describe('test button component', () => {
    it('should render the correct the default button', () => {
        const wrap = render(<Button {...defaultprops}>nice</Button>) //render 渲染真实的dom节点进行断言
        const element = wrap.getByText('nice')
        expect(element).toBeTruthy()
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element)
        expect(defaultprops.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props', () => {
        const wrapper = render(<Button {...testprops}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-praimary btn-lg btn')
      })
    it('should render a link when href is provided', () => {

    })
})
