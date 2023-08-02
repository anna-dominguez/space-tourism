const Title = ({ titleNb, title }) => (
  <p className="barlow uppercase spacing md:self-start md:ml-7 md:text-bodyM lg:text-heading5 lg:ml-40">
    <span className="font-bold text-white/25 md:mr-5">{titleNb}</span> {title}
  </p>
)

export default Title
