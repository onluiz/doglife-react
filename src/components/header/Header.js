import React, { Component } from 'react'
import Appbar from 'muicss/lib/react/appbar'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <Appbar>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td className="mui--appbar-height">
                                    <font>Doglife</font>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Appbar>
            </div>
        )
    }
}

export default Header;