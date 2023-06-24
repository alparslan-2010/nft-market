import React from "react";

interface FilterProps{

    label: string ;
    options :string[];
    value: String;
    onChange : (value:string) => void
}

const Filter :React.FC<FilterProps> =({label, options, value, onChange}) => {

    return(

        <div>
<label htmlFor=""> Backraound</label>

<select
id="BacgroundFilter"
value={}


>
<option></option>
<option></option>
<option></option>

</select>
            
        </div>
    )
}

export default Filter;