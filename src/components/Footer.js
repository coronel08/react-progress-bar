import React from 'react'
import styled from 'styled-components'


function Footer() {
    return (
        <div>
            <BarStyles.Wrapper>
                <BarStyles.Text>Test</BarStyles.Text>
                <BarStyles.Logo>Logo</BarStyles.Logo>
                <BarStyles.Items>
                    <BarStyles.Item>Home</BarStyles.Item>
                    <BarStyles.Item>Blog</BarStyles.Item>
                </BarStyles.Items>
            </BarStyles.Wrapper>
        </div>
    )
}

export default Footer

const BarStyles = {
    Wrapper: styled.div`
        display:flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(to right, #28313E, #302E24);
        color: white;  
        `,
    Logo: styled.h1`
        border: 2px solid gray;
        padding: 0.5rem 1rem;
        @media only screen and (max-width: 600px){
            display:none;
        }
    `,
    Items: styled.ul`
        display:flex;
        list-style: none;
    `,

    Item: styled.li`
        padding: 0 .5rem;
        cursor: pointer;
    `,

    Text: styled.p`
        color: purple;
        font-weight: 800;
        padding: 0 1rem;
    `,
}