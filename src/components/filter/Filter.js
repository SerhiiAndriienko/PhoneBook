import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFilters } from 'redux/filterSlice/filterSlice';
import './Filter.module.scss';

function Filter({ filterChange }) {
  const filterContacts = useSelector(getFilters);

  const handleFilterChange = event => {
    filterChange(event.target.value);
  };

  return (
    <form className="container">
      <label style={{ display: 'grid' }}>Find contacts by name:</label>
      <input
        className="filterInput"
        type="text"
        autoComplete="off"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleFilterChange}
        value={filterContacts}
      />
    </form>
  );
}
Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};
export default Filter;
