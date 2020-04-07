import React from 'react';






function FilterBar(props) {
    return (

        <form className="search col-md-12">
            <div className="form-group col-md-8 offset-md-2">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="department"
                    list="departments"
                    type="text"
                    className="form-control"
                    placeholder="Filter by Department"
                    id="department"
                />
                <datalist id='departments'>
                    <option value="Executive" key="Executive" />
                    <option value="Finance" key="Finance" />
                    <option value="IT" key="IT" />
                    <option value="HR" key="HR" />
                    <option value="Marketing" key="Marketing" />
                    <option value="Sales" key="Sales" />
                </datalist>
                <div className='justify-content-center'>
                    <button type="submit" onClick={props.handleFormSubmit} className="btn btn-outline-dark btn-sm  col-md-2">
                        Search
        </button>
                    <button type="submit" onClick={props.handleClear} className="btn btn-outline-dark btn-sm  col-md-2 offset-md-8">
                        Clear
        </button>

                </div>
            </div>
        </form >
    )
}





export default FilterBar;