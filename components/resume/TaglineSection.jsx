const TaglineSection = ({ summary = [], headline }) => (
  <section>
    <h2>{headline}</h2>
    <ul>
      {summary.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

export default TaglineSection;
