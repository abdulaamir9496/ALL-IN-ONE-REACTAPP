import React from 'react'
import { Button, Flex } from 'antd'

export default function Buttons() {
    return (
        <>
        <button className='deleteButton'>Delete item</button>
        <div className="button">
            {/* <Buttons /> */}
            <Flex gap="small" wrap="wrap">
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Flex>
            <br />
            <br />
            {/* Ghost Button
            ghost property will make button's background transparent, 
            it is commonly used in colored background. */}
            <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
                <Button type="primary" ghost>Primary</Button>
                <Button ghost>Default</Button>
                <Button type="dashed" ghost>Dashed</Button>
                <Button type="primary" danger ghost>Danger</Button>
            </Flex>
            <br />
            {/* Block button: block property will make the button fit to its parent width. */}
            <Flex vertical gap="small" style={{ width: '100%' }}>
                <Button type="primary" block>Primary</Button>
                <Button block>Default</Button>
                <Button type="dashed" block>Dashed</Button>
                <Button disabled block>disabled</Button>
                <Button type="text" block>text</Button>
                <Button type="link" block>Link</Button>
            </Flex>
        </div>
        </>
    )
}
