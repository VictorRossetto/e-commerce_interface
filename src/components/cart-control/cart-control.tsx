import {RiShoppingBag3Line} from "react-icons/ri"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import styled from "styled-components"

const CartCount = styled.span`
width: 17px;
height: 17px;
border-radius: 50%;
padding: 0px 5px;
font-size: 10px;

background-color: var(--delete-color);
color: white;

margin-left: -10px;
`
const Container = styled.div`
    position: relative;

`

export function CartControl() {
    const cartCount = useLocalStorage()

   
    return(
        <Container>
            <RiShoppingBag3Line size = '20px'/>
            {/* {numero && <CartCount>{numero}</CartCount>} */}
            {cartCount && <CartCount>{cartCount.cartCount}</CartCount>}
        </Container>
    )
}