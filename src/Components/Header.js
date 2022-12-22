import React from 'react'
import Menu from './Menu'

export default function Header({ setScreen }) {
    return (
        <header>
            <Menu setScreen={setScreen} />
        </header>
    )
}