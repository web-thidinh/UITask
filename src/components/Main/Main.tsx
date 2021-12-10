import React from 'react'
import * as S from './styled'
import {Text } from 'react-native'

 const Main = ()=>{
    return(
        <S.Main>
            <S.MainCategories>
                <S.WrapCategory horizontal={true}>
                    <S.ButtonCategory>
                        <S.CategoryItem>ALL</S.CategoryItem>
                    </S.ButtonCategory>
                    <S.ButtonCategory>
                        <S.CategoryItem>TOP</S.CategoryItem>
                    </S.ButtonCategory>
                    <S.ButtonCategory>
                        <S.CategoryItem>BOTTON</S.CategoryItem>
                    </S.ButtonCategory>
                    <S.ButtonCategory>
                        <S.CategoryItem>HOODIE</S.CategoryItem>
                    </S.ButtonCategory>
                    <S.ButtonCategory>
                        <S.CategoryItem>T-SHIRT</S.CategoryItem>
                    </S.ButtonCategory>
                </S.WrapCategory>
            </S.MainCategories>
            <S.MainContent>
                <S.ContentItem>
                    <Text>Product</Text>
                </S.ContentItem>
                <S.ContentItem>
                    <Text>Product</Text>
                </S.ContentItem>
                <S.ContentItem>
                    <Text>Product</Text>
                </S.ContentItem>
                <S.ContentItem>
                    <Text>Product</Text>
                </S.ContentItem>
            </S.MainContent>
        </S.Main>
    )
}
export default Main