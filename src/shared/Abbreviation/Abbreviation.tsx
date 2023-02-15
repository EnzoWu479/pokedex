import { Abbreviation, Container } from "./_abbreviation";

interface Props {
  maxCharacters: number;
  maxLenght?: number;
  maxLines?: number;
  text: string;
}

export default ({ maxCharacters, maxLenght, maxLines, text }: Props) => {
  if (text?.length > maxCharacters) {
    return (
      <Container maxLenght={maxLenght} maxLine={maxLines}>
        <Abbreviation title={text}>{text}</Abbreviation>
      </Container>
    );
  }
  return <p>{text}</p>;
};
