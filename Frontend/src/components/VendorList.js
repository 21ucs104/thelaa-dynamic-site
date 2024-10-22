// src/components/VendorList.js
import React, { useEffect, useState } from 'react';
import VendorCard from './VendorCard';

const VendorList = ({ searchQuery }) => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        // Simulating API call
        const fetchVendors = async () => {
            const response = await fetch('http://localhost:3000/api/vendors'); // Replace with your API
            const data = await response.json();
            setVendors(data);
        };

        fetchVendors();
    }, []);

    const filteredVendors = vendors.filter(vendor =>
        vendor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="vendor-list">
            {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
            ))}
        </div>
    );
};

export default VendorList;
