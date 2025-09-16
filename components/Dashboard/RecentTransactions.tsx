import React from 'react'
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from 'react-icons/fi'

function RecentTransactions() {
    return (
        <div className='col-span-12 p-4 rounded border border-gray-300'>
            <div className='mb-4 flex items-center justify-between'>
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiDollarSign />
                    RecentTransactions
                </h3>
                <button className='text-sm text-blue-700 hover:underline cursor-pointer'>
                    See all
                </button>
            </div>
            <table className='w-full table-auto'>
                <TableHead />
                <tbody>
                    <TableRow cusId="CUST-1001" sku="SKU-001" date="2025-09-15" price="$120.00" order={0} />
                    <TableRow cusId="CUST-1002" sku="SKU-002" date="2025-09-14" price="$89.99" order={1} />
                    <TableRow cusId="CUST-1003" sku="SKU-003" date="2025-09-13" price="$45.50" order={2} />
                    <TableRow cusId="CUST-1004" sku="SKU-004" date="2025-09-12" price="$230.00" order={3} />
                    <TableRow cusId="CUST-1005" sku="SKU-005" date="2025-09-11" price="$15.75" order={4} />
                </tbody>
            </table>
        </div>
    )
}

const TableHead = () => {
    return (
        <thead>
            <tr className='text-sm font-normal text-stone-500'>
                <th className='text-start p-1.5'>Customer ID</th>
                <th className='text-start p-1.5'>SKU</th>
                <th className='text-start p-1.5'>Date</th>
                <th className='text-start p-1.5'>Price</th>
                <th className='w-8'></th>
            </tr>
        </thead>
    );
}

const TableRow = ({
    cusId,
    sku,
    date,
    price,
    order
}: {
    cusId: string;
    sku: string;
    date: string;
    price: string;
    order: number;
}) => {
    return <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
        <td className='p-1.5'>
            <a
                href="#"
                className='text-blue-600 underline flex items-center gap-1'
            >
                {cusId} <FiArrowUpRight />
            </a>
        </td>
        <td className='p-1.5'>{sku}</td>
        <td className='p-1.5'>{date}</td>
        <td className='p-1.5'>{price}</td>
        <td className="w-8">
            <button className="hover:bg-stone-200 transition-colors-grid place-content-center rounded-text-sm size-8">
                <FiMoreHorizontal />
            </button>
        </td>
    </tr>
}
export default RecentTransactions