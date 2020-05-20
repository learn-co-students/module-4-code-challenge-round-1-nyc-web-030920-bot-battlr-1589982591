import React from "react";

const SortBar = (props) => {
	const {medic, witch, defender, support, assault} = props
  return (
    <div className="sort-bar">
      <form>
        <label>
          Support
          <input onChange={props.handleFilter} name="support" type="checkbox" value={support} />
        </label>
        <label>
          Witch
          <input onChange={props.handleFilter} name="witch" type="checkbox" value={witch} />
        </label>
		<label>
          Medic
          <input onChange={props.handleFilter} name="medic" type="checkbox" value={medic} />
        </label>
		<label>
          Defender
          <input onChange={props.handleFilter} name="defender" type="checkbox" value={defender} />
        </label>
		<label>
          Assault
          <input onChange={props.handleFilter} name="assault" type="checkbox" value={assault} />
        </label>
      </form>
	  <br/>
	  <br/>
    </div>
  );
};

export default SortBar;
