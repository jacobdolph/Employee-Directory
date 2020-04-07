import React from 'react';






function SortBar(props) {
    return (

        <form className="search col-md-12">
            <div className="form-group col-md-6 offset-md-3">
                <div className='justify-content-center'>
                    <button type="submit" name='name' onClick={props.handleSort} className="btn btn-outline-dark btn-sm  col-md-3">
                        Sort by Name
        </button>
                    <button type="submit" name='name' onClick={props.handleSortDepartmentA} className="btn btn-outline-dark btn-sm  col-md-3 ">
                        Sort by Department↑
        </button>
                    <button type="submit" name='name' onClick={props.handleSortDepartmentD} className="btn btn-outline-dark btn-sm  col-md-3 ">
                        Sort by Department↓
        </button>
                    <button type="submit" onClick={props.handleClear} className="btn btn-outline-dark btn-sm col-md-2 offset-md-1">
                        Clear
        </button>

                </div>
            </div>
        </form >
    )
}





export default SortBar;