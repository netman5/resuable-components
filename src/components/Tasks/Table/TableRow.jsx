import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ data }) => (
  <tbody className="bg-white divide-y divide-gray-200">
    {data.map((rowData) => (
      <tr key={rowData.id}>
        <td className="block text-sm font-medium leading-8 text-bb-purple capitalize truncate px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          {rowData.title}
        </td>
      </tr>
    ))}
  </tbody>
);

TableRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default TableRow;
