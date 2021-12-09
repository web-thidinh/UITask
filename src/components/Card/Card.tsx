import React, { FunctionComponent, useCallback } from 'react'
import Spacer from 'react-styled-spacer'
import colors from '../../theme/colors'
import PlanningButton from '../PlanningButton'
import * as T from '../../theme/typography'
import * as S from './styled'

type Props = {
  type: 'essential' | 'premium' | 'luxury'
  outs?: string[]
  image?: any
  brand: string
  product: string
  price: string
}

const sizeList = ['S', 'M', 'L', 'XL', 'XXL']

const Card: FunctionComponent<Props> = ({
  type = 'essential',
  outs = [],
  image,
  brand,
  product,
  price,
}) => {
  const sizes = useCallback(() => {
    return sizeList.map((size, index) => {
      const isOut = outs.includes(size)
      return (
        <T.CardTitle2 key={`${index}`} color={isOut ? colors.CHINESE_WHITE : colors.DARK_LIVER}>
          {size}{' '}
        </T.CardTitle2>
      )
    })
  }, [outs])

  return (
    <S.Container>
      <S.ImageWrapper>
        <S.Image source={image} resizeMode="cover" />

        <S.BookmarkImage
          source={require('../../assets/images/bookmark-outline.png')}
          resizeMode="cover"
        />
      </S.ImageWrapper>

      <S.Content>
        <Spacer h={8} />
        <T.CardTitle2 color={colors.ELEMENT_STROKE}>{brand}</T.CardTitle2>
        <Spacer h={6} />
        <T.CardTitle1 color={colors.DARK_LIVER}>{product}</T.CardTitle1>
        <Spacer h={8} />
        <S.StartedGrid>{sizes()}</S.StartedGrid>
        <Spacer h={8} />
        <S.CenteredGrid>
          <PlanningButton type={type} />
          <T.CardTitle2 color={colors.DARK_LIVER} bold>
            {price}
          </T.CardTitle2>
        </S.CenteredGrid>
      </S.Content>
    </S.Container>
  )
}

export default Card
