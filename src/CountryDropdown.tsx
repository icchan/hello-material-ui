import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const countries = ['Australia', 'Japan'];

function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = React.useState('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value as string);
    console.log(`Selected option: ${event.target.value}`);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="country-select-label">Please select your Country: </InputLabel>

      {countries.length > 0 && (
        <Select
            labelId="country-select-label"
            value={selectedCountry}
            onChange={handleChange}
        >
            {countries.map((country) => (
            <MenuItem value={country}>
                {country}
            </MenuItem>
            ))}
        </Select>
    )}

    </FormControl>
  );
}

export default CountryDropdown;