import React from 'react';






function SortBar(props) {
    return (

        <form className="search col-md-12">
            <div className="form-group col-md-8 offset-md-2">
                <div className='justify-content-center'>
                    <button type="submit" name='name' onClick={props.handleSort} className="btn btn-outline-dark btn-sm">
                        Sort by Name
        </button>
                    <button type="submit" name='name' onClick={props.handleSortDepartmentA} className="btn btn-outline-dark btn-sm ">
                        Sort by Department↑
        </button>
                    <button type="submit" name='name' onClick={props.handleSortDepartmentD} className="btn btn-outline-dark btn-sm">
                        Sort by Department↓
        </button>
                    <button type="submit" onClick={props.handleClear} className="btn btn-outline-dark btn-sm">
                        Clear
        </button>

                </div>
            </div>
        </form >
    )
}





export default SortBar;