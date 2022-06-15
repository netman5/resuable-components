import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ data }) => (
  <div className="flex flex-col mt-10">
    <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div className="overflow-hidden border-b border-gray-200 shadow md:custom-box-shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <TableHeader />
            <TableRow data={data} />
          </table>
        </div>
      </div>
    </div>
  </div>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Table;
