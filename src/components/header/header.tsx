import  styled  from "styled-components"
import { PrimaryInputWSearchIcon } from "../primary-input/primary-input"
import { CartControl } from "../cart-control/cart-control"

const TagHeader = styled.header`
    display: flax;
    align-items: center;
    justify-content: Space-between;
    padding: 20px 160px;
    -webkit-box-pack: justify;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
    font-family: 'Saira Stencil One', cursive;

`

export function Header() {
    return(
        <TagHeader>
            <Logo>
                capputeeno
            </Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?"/>
                <CartControl/>
            </div>
        </TagHeader>
    )
}