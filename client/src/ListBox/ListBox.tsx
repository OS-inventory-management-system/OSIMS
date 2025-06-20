
import { useState } from "react";
import { ListBox } from 'primereact/listbox';
import type { ListBoxChangeEvent } from "primereact/listbox";
// improt styles
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './ListBox.css'

interface City {
    name: string;
    code: string;
} 

export default function List() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox filter 
            value={selectedCity} 
            onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} 
            options={cities} 
            optionLabel="name" 
            className="w-full md:w-14rem" />
        </div>
    )
}
        