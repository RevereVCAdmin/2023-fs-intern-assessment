function FundIndexItem({ fund }) {
  return (
    <>
      <div className="index-item-container">
        <p className="fund-name">{fund.fundName}</p>
        <p className="fund-location"><i class="fa-solid fa-location-dot" id="location-icon"></i>{fund.location}</p>
      </div>
    </>
  )
}

export default FundIndexItem;