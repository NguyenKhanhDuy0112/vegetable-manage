import {memo}  from 'react'
function InputAdmin({ label, placeholder,rows , frmField, err,errMessage,valueInput, input, labelClass, options, onChangeInput,length, id, ...others}) {
    const classInput = `form-control searchAdmin__input ${err ? "is-invalid" : ""}`
    return (
        <>
            <div className="row align-items-center mb-3 g-3">
                <div className= {labelClass}>
                    <label htmlFor={id} className="mb-0 fs-6">{label}</label>
                </div>
                <div className="col-md">
                    {rows && 
                        <textarea
                            id = {id} 
                            placeholder={placeholder} 
                            className={classInput}
                            {...frmField}
                            {...others}
                            rows = {rows}
                        >

                        </textarea> 
                    }
                    {input && 
                        <input
                            id = {id} 
                            placeholder={placeholder} 
                            className={classInput}
                            {...frmField}
                            {...others}
                        />
                    }
                    {options && 
                        <select
                            id = {id} 
                            className={classInput}
                            {...frmField}
                            {...others}
                        >
                            <option value="" hidden>{placeholder}</option>
                            {options.map((option,index) => <option key={index} value = {option.value}>{option.name}</option>)}
                        </select>
                    }
                    {err ? <div className = "invalid-feedback">{errMessage}</div>: ""}
                </div>
            </div>
        </>
    );
}

export default memo(InputAdmin);