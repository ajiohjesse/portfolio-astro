interface Props {
  number: number;
  heading: string;
}
const SectionHeader = (props: Props) => {
  return (
    <h2 className="text-2xl font-bold tracking-tight uppercase md:text-3xl">
      <span className="text-primary">{props.number}.</span> {props.heading}.
    </h2>
  );
};

export default SectionHeader;
