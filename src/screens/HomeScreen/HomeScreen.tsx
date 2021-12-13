import React, { FunctionComponent } from 'react'
import Spacer from 'react-styled-spacer'
import { useTranslation } from 'react-i18next'
import Button from '../../components/Buttons'
import Field from '../../components/Fields'
import PlanningButton from '../../components/PlanningButton'
import PlanningRadio from '../../components/PlanningRadio'

import Card from '../../components/Card'

import * as T from '../../theme/typography'
import * as S from './styled'

type Props = {}

const HomeScreen: FunctionComponent<Props> = () => {
  const { t } = useTranslation()

  return (
    <S.Container>
      <S.ScrollContainer>
      <T.Title>Title</T.Title>
      <T.Header1>Header 1</T.Header1>
      <T.Header2>Header 2</T.Header2>
      <T.Header2Medium>Header 2 - medium</T.Header2Medium>
      <T.SubHeader>Sub- Header</T.SubHeader>
      <T.ButtonText1>Buttons text 1 - Roman</T.ButtonText1>
      <T.ButtonText2>Buttons text 2 - Roman</T.ButtonText2>
      <T.Text1Bold>Text 1 - bold</T.Text1Bold>
      <T.Text1>Text 1 - Roman</T.Text1>
      <T.Text2Bold>Text 2 - bold</T.Text2Bold>
      <T.Text2>Text 2 - Roman</T.Text2>
      <T.Text3Bold>Text 3 - bold</T.Text3Bold>
      <T.Text3>Text 3 - Roman</T.Text3>
      <T.Text4>Text 4 - Roman</T.Text4>

      <S.Grid>
        <S.Row>
          <Button text="Primary" onPress={(): void => {}} type="primary" />
        </S.Row>
        <S.Row>
          <Button text="Disabled" onPress={(): void => {}} disabled type="primary" />
        </S.Row>
        <S.Row></S.Row>
      </S.Grid>

      <S.Grid>
        <S.Row>
          <Button text="Secondary" onPress={(): void => {}} type="secondary" />
        </S.Row>
        <S.Row>
          <Button text="Disabled" onPress={(): void => {}} disabled type="secondary" />
        </S.Row>
        <S.Row></S.Row>
      </S.Grid>

      <S.Grid>
        <S.Row>
          <Button text="Third" onPress={(): void => {}} type="third" />
        </S.Row>
        <S.Row></S.Row>
        <S.Row>
          <Button text="Third" onPress={(): void => {}} activated type="third" />
        </S.Row>
      </S.Grid>

      <S.Grid>
        <S.Row>
          <Button text="Select" onPress={(): void => {}} type="select" />
        </S.Row>
        <S.Row></S.Row>
        <S.Row></S.Row>
      </S.Grid>

      <S.Grid>
        <S.Row>
          <Button text="Cancel" onPress={(): void => {}} type="cancel" />
        </S.Row>
        <S.Row>
          <Button text="Disabled" onPress={(): void => {}} disabled type="cancel" />
        </S.Row>
        <S.Row></S.Row>
      </S.Grid>

      <S.Grid>
        <Button text="Google" onPress={(): void => {}} type="google" />
      </S.Grid>
      <S.Grid>
        <Button text="Facebook" onPress={(): void => {}} type="facebook" />
      </S.Grid>
      <S.Grid>
        <Button text="Block" onPress={(): void => {}} type="block" />
      </S.Grid>

      <S.Grid>
        <Field label="Name" placeholder="Enter your name" />
      </S.Grid>

      <S.Grid>
        <S.Row>
          <PlanningButton type="essential" />
        </S.Row>
        <S.Row>
          <PlanningButton type="premium" />
        </S.Row>
        <S.Row>
          <PlanningButton type="luxury" />
        </S.Row>
      </S.Grid>

      <Card
        brand="ZARA"
        // product="Marvel Hoodie"
        outs={['S', 'M']}
        type="essential"
        price="35€/mo"
      />

      <PlanningRadio
        type="essential"
        price="35€/mo"
        description="Two words about this plan, lorem ipsum dolor sit amet lorem ipsum"
      />
      <Spacer h={200} />
      </S.ScrollContainer>
    </S.Container>
  )
}

export default HomeScreen
