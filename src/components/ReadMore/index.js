import {useState} from 'react'

import {
  BgContainer,
  ImageCard,
  Paragraph,
  ButtonEle,
  Heading,
} from './styledComponents'

const ReadMore = ({reactHooksDescription}) => {
  const [readMore, setReadMore] = useState(false)

  const onReadToggle = () => {
    setReadMore(!readMore)
  }

  const BtnText = readMore ? 'Read Less' : 'Read More'
  return (
    <BgContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <ImageCard
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {readMore ? (
        <Paragraph>{reactHooksDescription}</Paragraph>
      ) : (
        <Paragraph>
          Hooks solve a wide variety of seemingly unconnected problems in React
          that we have encountered over five years of writing and maintaining
          tens of thousands of components.
        </Paragraph>
      )}
      <ButtonEle type="button" onClick={onReadToggle}>
        {BtnText}
      </ButtonEle>
    </BgContainer>
  )
}
export default ReadMore
