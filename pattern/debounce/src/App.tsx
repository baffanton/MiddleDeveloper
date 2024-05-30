import React, { useState } from 'react';
import './App.css';
import { debounce } from './debounce';

const accessKey = 'ydot893rhqO/F47fqANISw==NcSrM0NXMImIlJ6r';

function App() {
    const [filteredCities, setFilteredCities] = useState<string[]>([]);

    const getCitiesByName = async (cityName: string) => {
        const params = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'X-Api-Key': accessKey,
            },
        };

        const response = await fetch(
            `https://api.api-ninjas.com/v1/city?limit=5&name=${cityName}`,
            params,
        );

        if (response.ok) {
            const cities = await response.json();

            setFilteredCities(cities.map((city: any) => city.name));
        }
    };

    const onChangeHandler = (e: any) => {
        const { value } = e.target;

        getCitiesByName(value);
    };

    const debounceChangeHandler = debounce(onChangeHandler, 1000);

    return (
        <div className="search">
            <div className="search__title">Введите название города</div>
            <input
                className="search__input"
                type="text"
                onChange={debounceChangeHandler}
                placeholder=""
            />
            <div className="search__var">
                {filteredCities.map((city) => (
                    <div className="search__item">{city}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
