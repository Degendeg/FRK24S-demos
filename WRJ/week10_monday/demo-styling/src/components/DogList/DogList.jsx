const DogList = ({ dogs, DogImg }) => {
  return (
    <div className="wrapper">
      {dogs && dogs.map((dog, idx) => (
        <DogImg src={dog} key={idx} alt="" />
      ))}
    </div>
  )
}
export default DogList